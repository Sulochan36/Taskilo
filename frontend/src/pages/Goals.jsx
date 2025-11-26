import React, { useEffect, useState } from 'react';
import GoalCard from '../components/GoalCard';
import AddGoalForm from '../components/AddGoalForm';
import { useGoalsQuery } from '../lib/queries/goals';
import { useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';

const Goals = () => {
  const { data: goals, isLoading } = useGoalsQuery();
  const navigate = useNavigate();

  if (isLoading) return <p>Loading goals...</p>;

  return (
    <div>
      <h2 className="text-4xl text-center my-4">GOALS</h2>

      {/* Add Goal Button */}
      <div className="flex justify-center mb-6">
        <Button
          className="bg-blue-600 text-white px-6 py-3 text-lg"
          onClick={() => navigate("/goalDetails/new")}
        >
          Add New Goal
        </Button>
      </div>

      {/* Pass goals to GoalCard */}
      <GoalCard goals={goals} />
    </div>
  );
};

export default Goals;
