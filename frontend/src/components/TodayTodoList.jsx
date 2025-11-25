import React, { useEffect, useState } from 'react';
import { useAddTaskToToday, useRemoveTaskFromToday, useTodayTasks } from '../lib/queries/useTodayTasks';
import { useGoalsQuery } from '../lib/queries/goals';
import { useUpdateTaskDone } from '../lib/queries/useUpdateTaskDone';

const TodayTodoList = () => {
    const { data: todayTasks = [] } = useTodayTasks();
    const { data: goals = [] } = useGoalsQuery();
    const addTaskMutation = useAddTaskToToday();
    const removeTaskMutation = useRemoveTaskFromToday();
    const updateTaskDone = useUpdateTaskDone();


    const handleToggle = (goalId, taskId) => {
        const exists = todayTasks.some(t => t.goalId === goalId && t.taskId === taskId);
        if (exists) {
            removeTaskMutation.mutate({ goalId, taskId });
        } else {
            addTaskMutation.mutate({ goalId, taskId });
        }
    };

    const tasksForToday = todayTasks
        .map(({ goalId, taskId }) => {
            const goal = goals.find(g => g._id === goalId);
            const task = goal?.todolist.find(t => t.taskId === taskId);
            return task ? { ...task, goalId, goalTitle: goal?.title } : null;
        })
        .filter(Boolean);

    return (
        <div className="mt-10">
            <h2 className="text-xl font-bold mb-4">Today's Tasks</h2>
            {tasksForToday.length === 0 ? (
                <p>No tasks selected for today.</p>
            ) : (
                <ul>
                    {tasksForToday.map(task => (
                        <li key={task.taskId} className="mb-2 flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={task.done}
                                onChange={() =>
                                    updateTaskDone.mutate({
                                        goalId: task.goalId,
                                        taskId: task.taskId,
                                        done: !task.done
                                    })
                                }
                            />

                            <span>{task.text} <em>({task.goalTitle})</em></span>
                            <button
                                className="text-blue-500 underline text-sm"
                                onClick={() => handleToggle(task.goalId, task.taskId)}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TodayTodoList;
