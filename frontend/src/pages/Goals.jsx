import React, { useEffect, useState } from 'react';
import GoalCard from '../components/GoalCard';
import AddGoalForm from '../components/AddGoalForm';
import { axiosInstance } from '../lib/axios';

const Goals = () => {
  const [goals, setGoals] = useState([]);

  const fetchGoals = async () => {
    try {
      const res = await axiosInstance.get('/goals');
      setGoals(res.data);
    } catch (err) {
      console.error("Failed to fetch goals:", err);
    }
  };

  // Fetch goals once when page loads
  useEffect(() => {
    fetchGoals();
  }, []);

  // Called after adding/updating/deleting a goal
  const handleGoalUpdate = () => {
    fetchGoals();
  };

  return (
    <div>
      <h2 className="text-4xl text-center my-4">GOALS</h2>

      {/* This Add form adds new goals */}
      <AddGoalForm onGoalUpdate={handleGoalUpdate} />

      {/* Pass goals to GoalCard */}
      <GoalCard goals={goals} onGoalUpdate={handleGoalUpdate} />
    </div>
  );
};

export default Goals;
