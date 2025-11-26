import React from 'react';
import {
    Card, CardContent, CardDescription,
    CardFooter, CardHeader, CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star } from 'lucide-react';
import AddGoalForm from './AddGoalForm';
import { statusGoals } from '../lib/utils';
import { axiosInstance } from '../lib/axios';
import { useDeleteGoal } from '../lib/queries/goals';
import { useNavigate } from 'react-router';

const GoalCard = ({ goals }) => {

    const navigate = useNavigate();
    const deleteGoalMutation = useDeleteGoal();


    const handleGoalClick = (goalId) => {
        // Redirect to the GoalDetails page with the specific goal ID
        navigate(`/goalDetails/${goalId}`);
    };

    const handleDelete = (id) => {
        deleteGoalMutation.mutate(id);
    };

    const calculateProgress = (todolist) => {
        const total = todolist.length;
        const done = todolist.filter(t => t.done).length;
        return (done / total) * 100;
    };

    return (
        <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5'>
            {goals.map((goal) => (
                <Card key={goal._id}>

                    <CardHeader>
                        <div className='flex justify-center items-center gap-5 mb-5'>
                            <CardTitle className='text-4xl font-extrabold underline hover:cursor-pointer' onClick={() => handleGoalClick(goal._id)}>
                                {goal.title}
                            </CardTitle>
                            <Badge>{statusGoals(goal.todolist)}</Badge>
                        </div>
                        <CardDescription>{goal.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div className='flex flex-col md:flex-row gap-3 justify-between m-3'>
                            <p>Start Date: {goal.startDate}</p>
                            <p>Target Date: {goal.targetDate}</p>
                        </div>

                        <div className='m-2 border-2 p-4 font-extrabold text-xl'>
                            <p className='flex items-center gap-2'>
                                <Star /> Purpose: {goal.purpose}
                            </p>
                        </div>

                        <div className='flex flex-col m-5 gap-3'>
                            <p className='font-bold'>
                                Progress: {Math.round(calculateProgress(goal.todolist))}%
                            </p>
                            <Progress value={calculateProgress(goal.todolist)} />
                        </div>
                    </CardContent>

                    <CardFooter className='flex flex-col gap-4 items-center'>
                        <Button link='/todolists'>
                            Check The ToDo List for this Goal
                        </Button>

                        <div className='flex gap-5'>
                            {/* Edit Goal Form */}
                            <Button
                                
                                onClick={() => navigate(`/goalDetails/${goal._id}`)}
                            >
                                Edit Goal
                            </Button>

                            <Button
                                className='bg-red-500'
                                onClick={() => handleDelete(goal._id)}
                            >
                                Delete Goal
                            </Button>
                        </div>
                    </CardFooter>

                </Card>
            ))}
        </div>
    );
};

export default GoalCard;
