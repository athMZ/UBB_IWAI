import React from 'react';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { TaskContext } from '../App';

function TaskEntry(props) {

    const { tasks, setTasks } = useContext(TaskContext);

    const handleComplete = () => {
        const newTasks = tasks.map((task) => {
            if (task.id === props.id) {
                task.completed = true;
            }
            return task;
        });

        setTasks(newTasks);
    };

    const handleDelete = () => {
        const newTasks = tasks.filter((task) => task.id !== props.id);
        setTasks(newTasks);
    }

    function Buttons() {
        if (props.type === 'daily') {
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
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                </div>
            )
        }
    }

    return (
        <div className="bg-white dark:bg-gray-800 shadow rounded p-4 mt-4 dark:text-white">
            <h2 className="text-xl font-bold">{props.title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{props.description}</p>
            <hr className="my-2" />
            <Buttons />
        </div>
    )
}

export default TaskEntry;