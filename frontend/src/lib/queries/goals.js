import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createGoal, deleteGoal, getGoalById, getGoals, updateGoal } from "../api/goalsApi";

export const useGoalsQuery = () => useQuery({
    queryKey:['goals'],
    queryFn:getGoals,
});


export const useGoalQuery = (id) =>
    useQuery({
        queryKey: ["goal", id],
        queryFn: () => getGoalById(id),
        enabled: !!id && id !== "new",
    });

export const useCreateGoal = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: createGoal,
        onSuccess: ()=>qc.invalidateQueries(['goals']),
    });
};


export const useUpdateGoal = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }) => updateGoal(id, data),
        onSuccess: () => qc.invalidateQueries(["goals"]),
    });
}


export const useDeleteGoal = () => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: deleteGoal,
        onSuccess: () => qc.invalidateQueries(["goals"]),
    });
};