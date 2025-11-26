import React, { useState, useRef } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';

import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import { axiosInstance } from '../lib/axios';
import { useCreateGoal, useUpdateGoal } from '../lib/queries/goals';

const formSchema = z.object({
    title: z.string().min(1),
    startDate: z.string(),
    targetDate: z.string(),
    description: z.string().min(1),
    purpose: z.string().min(1),
    todolist: z.array(
        z.object({
            taskId: z.string(),
            text: z.string(),
            done: z.boolean(),
        })
    ).min(1)
});

const AddGoalForm = ({ goal }) => {

    const [open, setOpen] = useState(false);
    const [activityText, setActivityText] = useState("");
    const activityInputRef = useRef(null);

    const createGoalMutation = useCreateGoal();
    const updateGoalMutation = useUpdateGoal();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: goal || {
            title: "",
            startDate: "",
            targetDate: "",
            description: "",
            purpose: "",
            todolist: []
        }
    });

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "todolist"
    });

    const handleActivitySubmit = () => {
        if (!activityText.trim()) return;

        append({
            taskId: `task-${Date.now()}-${Math.random()}`,
            text: activityText,
            done: false,
        });

        setActivityText("");
        activityInputRef.current?.focus();
    };

    const onSubmit = (values) => {
        if (goal) {
            // UPDATE goal
            updateGoalMutation.mutate(
                { id: goal._id, data: { ...values, status: goal.status } },
                {
                    onSuccess: () => {
                        toast.success("Goal updated!");
                        setOpen(false);
                    },
                    onError: () => toast.error("Failed to update goal"),
                }
            );
        } else {
            // CREATE new goal
            createGoalMutation.mutate(values, {
                onSuccess: () => {
                    toast.success("Goal added!");
                    form.reset();
                    setOpen(false);
                },
                onError: () => toast.error("Failed to add goal"),
            });
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">
                    {goal ? "Edit Goal" : "Add Goal"}
                </Button>
            </DialogTrigger>

            <DialogContent className="max-h-[90vh] overflow-y-auto">

                <h2 className="text-3xl font-bold mb-4">
                    {goal ? "Edit Goal" : "Add New Goal"}
                </h2>

                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >

                    {/* Title */}
                    <input
                        className="border p-2 rounded w-full"
                        placeholder="Goal Title"
                        {...form.register("title")}
                    />

                    {/* Dates */}
                    <div className="flex gap-4">
                        <input
                            className="border p-2 rounded"
                            type="date"
                            {...form.register("startDate")}
                        />
                        <input
                            className="border p-2 rounded"
                            type="date"
                            {...form.register("targetDate")}
                        />
                    </div>

                    {/* Description */}
                    <textarea
                        className="border p-2 rounded w-full"
                        rows="4"
                        placeholder="Description"
                        {...form.register("description")}
                    />

                    {/* Purpose */}
                    <textarea
                        className="border p-2 rounded w-full"
                        rows="3"
                        placeholder="Purpose"
                        {...form.register("purpose")}
                    />

                    {/* Todolist */}
                    <div className="space-y-3">
                        <label>Todolist</label>
                        {fields.map((item, index) => (
                            <div key={item.id} className="flex gap-2">
                                <input
                                    type="checkbox"
                                    checked={item.done}
                                    onChange={() => {
                                        form.setValue(
                                            `todolist.${index}.done`,
                                            !item.done
                                        );
                                    }}
                                />
                                <input
                                    className="border p-2 rounded flex-grow"
                                    value={item.text}
                                    onChange={(e) =>
                                        form.setValue(
                                            `todolist.${index}.text`,
                                            e.target.value
                                        )
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

                        {/* Add new activity */}
                        <div className="flex gap-2">
                            <input
                                ref={activityInputRef}
                                className="border p-2 rounded flex-grow"
                                placeholder="New activity"
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

                    <Button className="bg-green-500 font-bold" type="submit">
                        {goal ? "Update Goal" : "Add Goal"}
                    </Button>
                </form>

            </DialogContent>
        </Dialog>
    );
};

export default AddGoalForm;
