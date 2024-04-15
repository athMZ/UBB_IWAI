import React from 'react';
import ITaskEntry, {TaskType} from '../interfaces/ITaskEntry';
import { useTaskContext } from '../Context/TaskContext';

interface TaskEntryProps {
    task: ITaskEntry;
}

const VerticalTaskEntry: React.FC<TaskEntryProps> = ({ task }) => {
    const {tasks, setTasks} = useTaskContext();

    const handleComplete = () => {
        const newTasks = tasks.map(t => t.id === task.id ? { ...t, done: true } : t);
        setTasks(newTasks);  
    };
  
    const handleDelete = () => {
        const newTasks = tasks.filter(t => t.id !== task.id );
        setTasks(newTasks);
    };

    const Buttons = () => {
    if (task.type === TaskType.DAILY) {
        return (
        <div className='flex flex-col space-y-4'>
            <button
            onClick={handleComplete}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 w-full'>
            Complete
            </button>

            <button
            onClick={handleDelete}
            className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded m-2 w-full'>
            Delete
            </button>
        </div>
        )
    } else {
        return (
        <div className='flex flex-col justify-end'>
            <button
            onClick={handleDelete}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 w-full'>
            Delete
            </button>
        </div>
        )
    }
    }

    return(
    <div>
        <h4>
            {task.title}    
        </h4>
        <p>
            {task.description}
        </p>

        <Buttons />
    </div>
    )
}

export default VerticalTaskEntry;