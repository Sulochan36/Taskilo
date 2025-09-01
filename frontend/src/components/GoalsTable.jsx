import React, {useState,useEffect} from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { calculateProgress, statusGoals } from '../lib/utils';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { axiosInstance } from '../lib/axios';


const GoalsTable = () => {
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
        }, []);
    

    return (
        <Table>
            <TableCaption>Status of Your Goals</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Your Goals</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Check In</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {goals.map((goal) => (
                    <TableRow key={goal.id}>
                        <TableCell className="font-medium">{goal.title}</TableCell>
                        <TableCell className='w-[60px] h-[60px] flex justify-center items-center mx-2'>
                            <CircularProgressbar
                                className=" "
                                value={calculateProgress(goal.todolist)}
                                text={`${Math.round(calculateProgress(goal.todolist))}%`}
                                styles={buildStyles({
                                    textSize: '28px',
                                    pathColor: '#17e009',
                                    textColor: '#17e009',
                                    trailColor: '#e5e7eb',
                                })}
                            />
                        </TableCell>
                        <TableCell>{statusGoals(goal.todolist)}</TableCell>
                        <TableCell >
                            <form>
                                <input type="checkbox" name="checkin" id="checkin" />
                            </form>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            {/* <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter> */}
        </Table>
    )
}

export default GoalsTable