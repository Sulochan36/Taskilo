import { axiosInstance } from "../axios";


export const fetchTodayTasks = async () => {
    const { data } = await axiosInstance.get("/today");
    return data;
};

export const addTaskToToday = async ({ goalId, taskId }) => {
    const { data } = await axiosInstance.post("/today/add", { goalId, taskId });
    return data;
};

export const removeTaskFromToday = async ({ goalId, taskId }) => {
    const { data } = await axiosInstance.post("/today/remove", { goalId, taskId });
    return data;
};
