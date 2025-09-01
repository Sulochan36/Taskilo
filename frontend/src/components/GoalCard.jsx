import React, { useState, useEffect } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Star } from 'lucide-react'
import AddGoalForm from './AddGoalForm';
import { statusGoals } from '../lib/utils'
import { axiosInstance } from '../lib/axios'


const GoalCard = () => {

    const [goals, setGoals] = useState([]);

    useEffect(() => {
        const fetchGoals = async () => {
            try {
                const res = await axiosInstance.get('/goals'); // GET /api/goals returns goals for the logged-in user
                setGoals(res.data);
            } catch (error) {
                console.error('Failed to fetch goals:', error);
            }
        };

        fetchGoals();
    }, [goals]);




    const deleteGoal = async(goalId) => {
        try {
            const res = await axiosInstance.delete(`/goals/${goalId}`);
            console.log("Goal deleted:", res.data);
            return res.data;
        } catch (error) {
            console.error("Error deleting goal:", error.response?.data || error.message);
            throw error;
        }
    };



    const handleGoalUpdate = (updatedGoal) => {
        const updatedGoals = goals.map(goal =>
            goal._id === updatedGoal._id ? updatedGoal : goal
        );
        setGoals(updatedGoals);
    };


    const calculateProgress = (todolist) => {
        const totalTasks = todolist.length;
        const completedTasks = todolist.filter(task => task.done).length;
        return (completedTasks / totalTasks) * 100;
    };

    return (
        <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5'>
            {goals.map((goal)=>(
                <Card key={goal._id}>

                    <CardHeader>
                        <div className='flex flex-row justify-center items-center gap-5 mb-5'>
                            <CardTitle className='text-4xl font-extrabold underline'>{goal.title}</CardTitle>
                            <Badge variant="default">{statusGoals(goal.todolist)}</Badge>
                        </div>
                        <CardDescription>{goal.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div className='flex flex-col md:flex-row gap-3 items-center justify-between m-3'>
                            <p>Start Date : {goal.startDate}</p>
                            <p>Target Date : {goal.targetDate}</p>
                        </div>
                        <div className='m-2 border-2 p-4 font-extrabold text-xl'>
                            <p className='flex flex-row flex-nowrap gap-2 items-center'><Star />  Purpose : {goal.purpose}</p>
                        </div>
                        <div className='flex flex-col m-5 gap-3'>
                            <p className='font-bold'>Progress : {`${Math.round(calculateProgress(goal.todolist))}%`}</p>
                            <Progress className='' value={calculateProgress(goal.todolist)} />
                        </div>

                    </CardContent>
                    <CardFooter className='flex flex-col flex-wrap gap-4 justify-center items-center'>
                        <div >
                            <Button link='/todolists'>Check The ToDo List for this Goal</Button>
                            <div className='flex flex-row flex-wrap gap-5 my-4 justify-center'>
                                
                                
                                    <AddGoalForm
                                        goal= {goal}
                                        onGoalUpdate={handleGoalUpdate} // Pass the update handler
                                    />
                                    
                                <Button className='bg-red-500' onClick={()=>deleteGoal(goal._id)}>Delete Goal</Button>
                            </div>

                        </div>

                    </CardFooter>
                </Card>
            ))}
            
            
            
        </div>
    )
}

export default GoalCard