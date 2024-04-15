import { React, useContext } from 'react';
import CustomButton from './CustomButton';
import { TaskContext } from '../App';

function DayReset() {
    const { tasks, setTasks } = useContext(TaskContext);

    const resetDailyTasks = () => {

        const newTasks = tasks.map((task) => {
            if (task.type === 'daily') {
                task.completed = false;
            }
            return task;
        });

        setTasks(newTasks);
    }

    return (
        <CustomButton onClick={resetDailyTasks}>Reset Daily Tasks</CustomButton>
    )
}

export default DayReset;