import { React, useContext } from 'react';
import Button from 'react-bootstrap/Button';
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
        <Button variant="outline-info" onClick={resetDailyTasks} className='m-2'>Reset Daily Tasks</Button>
    )
}

export default DayReset;