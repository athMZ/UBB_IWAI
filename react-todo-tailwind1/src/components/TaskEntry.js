import React from 'react';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { TaskContext } from '../App';
import '../TaskEntry.scss';

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
                <div className='button-container'>
                    <button
                        onClick={handleComplete}
                        className='complete-button'>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>

                    <button
                        onClick={handleDelete}
                        className='delete-button'>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            )
        } else {
            return (
                <div className='button-container'>
                    <button
                        onClick={handleDelete}
                        className='complete-button'>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                </div>
            )
        }
    }

    return (
        <div className="task-entry">
            <h2 className="task-title">{props.title}</h2>
            <p className="task-description">{props.description}</p>
            <hr className="divider" />
            <Buttons />
        </div>
    )
}

export default TaskEntry;