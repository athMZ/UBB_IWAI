import { React, useContext, useState } from 'react';
import { TaskContext } from '../App';
import '../Input.scss';

function Input() {
    const { tasks, setTasks } = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('daily');

    const onOptionChange = e => {
        setType(e.target.value)
    }

    function addTask(e) {
        e.preventDefault();

        const newTask = {
            id: Date.now().toString(36) + Math.random().toString(36),
            title: title,
            description: description,
            type: type,
            completed: false
        }

        setTasks([...tasks, newTask]);
    }

    return (
        <form className='task-form'>
            <div className="task-title-section">
                <label htmlFor="taskTitle" className="task-title-label">
                    Task Title
                </label>
                <input type="text" placeholder="Enter task title" value={title} onChange={e => setTitle(e.target.value)}
                    className="task-title-input" id="taskTitle" />
            </div>

            <div className="task-description-section">
                <label htmlFor="taskDescription" className="task-description-label">
                    Task Description
                </label>
                <input type="text" placeholder="Enter task description" value={description} onChange={e => setDescription(e.target.value)}
                    className="task-description-input" id="taskDescription" />
            </div>

            <div className="task-type-section">
                <label className="task-type-label">
                    Task Type
                </label>
                <div className="task-type-options">
                    <label className="task-type-option">
                        <input type="radio" className="task-type-radio" name="taskType" value="daily" checked={type === "daily"} onChange={onOptionChange} />
                        <span className="task-type-text">Daily</span>
                    </label>
                    <label className="task-type-option">
                        <input type="radio" className="task-type-radio" name="taskType" value="general" checked={type === "general"} onChange={onOptionChange} />
                        <span className="task-type-text">General</span>
                    </label>
                </div>
            </div>

            <div className="task-submit-section">
                <button type="submit" onClick={addTask} className="task-submit-button">
                    Add Task
                </button>
            </div>
        </form>
    )
}

export default Input;