import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import ITaskEntry, {TaskType} from '../interfaces/ITaskEntry';
import { useTaskContext } from '../Context/TaskContext';

interface TaskEntryProps {
    task: ITaskEntry;
}

const TaskEntry: React.FC<TaskEntryProps> = ({ task }) => {
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
                <div className='flex justify-between space-x-4'>
                    <button
                        onClick={handleComplete}
                        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2'>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>

                    <button
                        onClick={handleDelete}
                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2'>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            )
        } else {
            return (
                <div className='flex justify-end'>
                    <button
                        onClick={handleDelete}
                        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2'>
                        <FontAwesomeIcon icon={faTrash} />
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

export default TaskEntry;