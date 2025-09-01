import { clsx } from "clsx";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge"
import { axiosInstance } from "./axios";



const fetchGoals = async () => {
  try {
    const res = await axiosInstance.get('/goals'); // GET /api/goals returns goals for the logged-in user
    const goals = res.data;
  } catch (error) {
    console.error('Failed to fetch goals:', error);
  }
};

fetchGoals();


export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const completedGoals = (todolist) => {
  const totalTasks = todolist.length;
  const completedTasks = todolist.filter(task => task.done).length;

  return totalTasks > 0 && completedTasks === totalTasks;
};

export const statusGoals = (todolist) => {
  const totalTasks = todolist.length;
  const completedTasks = todolist.filter(task => task.done).length;

  let status = "Not Started";

  if (totalTasks > 0 && completedTasks === totalTasks) {
    status = 'Completed'
  }

  if (totalTasks > 0 && completedTasks != 0 && completedTasks < totalTasks) {
    status = 'Ongoing'
  }

  return status;
};

export const calculateProgress = (todolist) => {
  const totalTasks = todolist.length;
  if (totalTasks === 0) return 0;

  const completedTasks = todolist.filter(task => task.done).length;
  return (completedTasks / totalTasks) * 100;
};





