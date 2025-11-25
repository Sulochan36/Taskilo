import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../axios";

export const useUpdateTaskDone = () => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: ({ goalId, taskId, done }) =>
            axiosInstance.patch(`/goals/${goalId}/tasks/${taskId}`, { done }),

        onSuccess: () => {
            qc.invalidateQueries({ queryKey: ["goals"] });
            qc.invalidateQueries({ queryKey: ["todayTasks"] });
        }
    });
};
