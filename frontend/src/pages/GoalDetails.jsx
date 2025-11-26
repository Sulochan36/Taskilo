import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { useCreateGoal, useGoalQuery, useUpdateGoal } from "../lib/queries/goals";


// -----------------
// ZOD SCHEMA
// -----------------
const formSchema = z.object({
    title: z.string().min(1, "Title required"),
    startDate: z.string(),
    targetDate: z.string(),
    description: z.string().min(1, "Description required"),
    purpose: z.string().min(1, "Purpose required"),
    todolist: z
        .array(
            z.object({
                taskId: z.string(),
                text: z.string(),
                done: z.boolean(),
            })
        )
        .min(1, "At least 1 task needed"),
});

// =============================
//        GOAL DETAILS PAGE
// =============================
const GoalDetails = () => {

    const { id } = useParams();                   // "new" or goalId
    const navigate = useNavigate();
    const isEditing = id && id !== "new";

    // ------ Fetch Goal Data ------
    const { data: goal, isLoading } = useGoalQuery(isEditing ? id : null);

    // ------ Mutations ------
    const createGoal = useCreateGoal();
    const updateGoal = useUpdateGoal();

    // ------ Form Setup ------
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            startDate: "",
            targetDate: "",
            description: "",
            purpose: "",
            todolist: [],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "todolist",
    });

    // ------ Prefill After Fetch ------
    useEffect(() => {
        if (goal) {
            form.reset(goal);
        }
    }, [goal]);

    // ------ Add Task ------
    const [activityText, setActivityText] = useState("");
    const activityInputRef = useRef(null);

    const handleActivitySubmit = () => {
        if (!activityText.trim()) return;

        append({
            taskId: `task-${Date.now()}`,
            text: activityText,
            done: false,
        });

        setActivityText("");
        activityInputRef.current?.focus();
    };

    // ------ Submit Form ------
    const onSubmit = (values) => {
        if (isEditing) {
            updateGoal.mutate(
                { id, data: values },
                {
                    onSuccess: () => {
                        toast.success("Goal updated!");
                        navigate("/goals");
                    },
                    onError: () => toast.error("Failed to update"),
                }
            );
        } else {
            createGoal.mutate(values, {
                onSuccess: () => {
                    toast.success("Goal created!");
                    navigate("/goals");
                },
                onError: () => toast.error("Failed to create goal"),
            });
        }
    };

    if (isEditing && isLoading) return <p>Loading Goal...</p>;

    // =================================
    //             RETURN UI
    // =================================
    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col mx-7 my-5"
        >
            {/* TITLE + SUBMIT BUTTON */}
            <div className="flex justify-between items-center mt-6 mb-12">
                <input
                    className="text-4xl font-bold w-full max-w-xl"
                    placeholder="Goal Title"
                    {...form.register("title")}
                />

                <Button type="submit" className="bg-green-500 text-xl px-6 py-3 ml-5">
                    {isEditing ? "Update Goal" : "Create Goal"}
                </Button>
            </div>

            {/* PURPOSE */}
            <div className="flex flex-col items-center border px-3 py-3 rounded-xl mb-12">
                <h3 className="text-3xl font-semibold mb-2">Purpose</h3>
                <textarea
                    className="border p-2 rounded w-full"
                    rows="3"
                    placeholder="Why is this your goal?"
                    {...form.register("purpose")}
                />
            </div>

            {/* DATES */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-16 mb-12">
                <div className="flex items-center gap-4 text-xl">
                    <label htmlFor="start">Start Date:</label>
                    <input
                        id="start"
                        type="date"
                        className="border px-4 py-1 rounded-xl"
                        {...form.register("startDate")}
                    />
                </div>

                <div className="flex items-center gap-4 text-xl">
                    <label htmlFor="end">End Date:</label>
                    <input
                        id="end"
                        type="date"
                        className="border px-4 py-1 rounded-xl"
                        {...form.register("targetDate")}
                    />
                </div>
            </div>

            {/* TODOLIST */}
            <div className="border rounded-xl p-5 mb-12">
                <h3 className="text-2xl font-semibold mb-4">To-Do List</h3>

                {fields.map((item, index) => (
                    <div key={item.id} className="flex gap-3 mb-3">
                        <input
                            type="checkbox"
                            checked={item.done}
                            onChange={() =>
                                form.setValue(`todolist.${index}.done`, !item.done)
                            }
                        />

                        <input
                            className="border p-2 rounded flex-grow"
                            value={item.text}
                            onChange={(e) =>
                                form.setValue(`todolist.${index}.text`, e.target.value)
                            }
                        />

                        <Button
                            type="button"
                            className="bg-red-600 text-white"
                            onClick={() => remove(index)}
                        >
                            X
                        </Button>
                    </div>
                ))}

                {/* ADD NEW TASK */}
                <div className="flex gap-3 mt-4">
                    <input
                        ref={activityInputRef}
                        className="border p-2 rounded flex-grow"
                        placeholder="Add new activity..."
                        value={activityText}
                        onChange={(e) => setActivityText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                handleActivitySubmit();
                            }
                        }}
                    />
                    <Button
                        type="button"
                        onClick={handleActivitySubmit}
                        className="bg-green-700"
                    >
                        Add
                    </Button>
                </div>
            </div>

            {/* DESCRIPTION */}
            <textarea
                className="border p-3 rounded-xl w-full h-[250px] mb-12"
                placeholder="Description"
                {...form.register("description")}
            />
        </form>
    );
};

export default GoalDetails;
