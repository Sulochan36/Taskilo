import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addTaskToToday, fetchTodayTasks, removeTaskFromToday } from "../api/todayApi";

// -------------------------------
// Fetch Today Tasks
// -------------------------------
export const useTodayTasks = () => {
    return useQuery({
        queryKey: ["todayTasks"],
        queryFn: fetchTodayTasks,
    });
};

// -------------------------------
// Add Task to Today
// -------------------------------
export const useAddTaskToToday = () => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: addTaskToToday,
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ["todayTasks"] });
        },
    });
};

// -------------------------------
// Remove Task from Today
// -------------------------------
export const useRemoveTaskFromToday = () => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: removeTaskFromToday,
        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ["todayTasks"] });
        },
    });
};
