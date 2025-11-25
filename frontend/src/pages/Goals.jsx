import React, { useEffect, useState } from 'react';
import GoalCard from '../components/GoalCard';
import AddGoalForm from '../components/AddGoalForm';
import { useGoalsQuery } from '../lib/queries/goals';

const Goals = () => {
  const { data: goals, isLoading } = useGoalsQuery();

  if (isLoading) return <p>Loading goals...</p>;

  return (
    <div>
      <h2 className="text-4xl text-center my-4">GOALS</h2>

      {/* This Add form adds new goals */}
      <AddGoalForm/>

      {/* Pass goals to GoalCard */}
      <GoalCard goals={goals} />
    </div>
  );
};

export default Goals;
