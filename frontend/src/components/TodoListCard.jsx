import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import TodayTodoList from './TodayTodoList';
import { useGoalsQuery } from '../lib/queries/goals';
import { useAddTaskToToday, useRemoveTaskFromToday, useTodayTasks } from '../lib/queries/useTodayTasks';
import { useUpdateTaskDone } from '../lib/queries/useUpdateTaskDone';

const TodoListCard = () => {
    const { data: goals = [] } = useGoalsQuery();
    const { data: todayTasks = [] } = useTodayTasks();
    const updateTaskDone = useUpdateTaskDone();

    const addTaskMutation = useAddTaskToToday();
    const removeTaskMutation = useRemoveTaskFromToday();

    const [editingLabel, setEditingLabel] = useState(null);

    const toggleTodayTask = (goalId, taskId) => {
        const exists = todayTasks.some(t => t.goalId === goalId && t.taskId === taskId);
        if (exists) removeTaskMutation.mutate({ goalId, taskId });
        else addTaskMutation.mutate({ goalId, taskId });
    };

    const startEditing = (goalId, taskId) => {
        setEditingLabel({ goalId, taskId });
    };

    const stopEditing = () => {
        setEditingLabel(null);
    };

    return (
        <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5'>
            <TodayTodoList />

            {goals.map(goal => (
                <Card key={goal._id}>
                    <CardHeader>
                        <CardTitle className='text-3xl underline'>{goal.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul>
                            {goal.todolist.map(task => (
                                <li key={task.taskId} style={{ marginBottom: "10px" }}>
                                    <input
                                        type="checkbox"
                                        checked={task.done}
                                        onChange={() =>
                                            updateTaskDone.mutate({
                                                goalId: goal._id,
                                                taskId: task.taskId,
                                                done: !task.done
                                            })
                                        }
                                    />

                                    {editingLabel?.goalId === goal._id && editingLabel?.taskId === task.taskId ? (
                                        <input
                                            type="text"
                                            value={task.text}
                                            onChange={(e) => {
                                                // Optional: call updateGoal API if you want live updates
                                                task.text = e.target.value;
                                            }}
                                            onBlur={stopEditing}
                                            autoFocus
                                            style={{ margin: "10px" }}
                                        />
                                    ) : (
                                        <label
                                            htmlFor={task.taskId}
                                            onClick={() => startEditing(goal._id, task.taskId)}
                                            style={{ cursor: "pointer", margin: "10px" }}
                                        >
                                            {task.text}
                                        </label>
                                    )}

                                    <button
                                        className='p-2 text-[12px] rounded-3xl underline hover:cursor-pointer hover:text-blue-500'
                                        onClick={() => toggleTodayTask(goal._id, task.taskId)}
                                    >
                                        {todayTasks.some(t => t.goalId === goal._id && t.taskId === task.taskId)
                                            ? 'X Remove from Today'
                                            : '+ Add to Today'}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter></CardFooter>
                </Card>
            ))}
        </div>
    );
};

export default TodoListCard;
