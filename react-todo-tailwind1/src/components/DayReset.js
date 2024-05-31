import { React, useContext } from 'react';
import { TaskContext } from '../App';
import '../DayReset.scss';

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
        <button className="reset-button" onClick={resetDailyTasks}>Reset Daily Tasks</button>
    )
}

export default DayReset;