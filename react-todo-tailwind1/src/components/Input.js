import { React, useContext, useState } from 'react';
import { TaskContext } from '../App';

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
        <form className='m-4'>
            <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskTitle">
                    Task Title
                </label>
                <input type="text" placeholder="Enter task title" value={title} onChange={e => setTitle(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="taskTitle" />
            </div>

            <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taskDescription">
                    Task Description
                </label>
                <input type="text" placeholder="Enter task description" value={description} onChange={e => setDescription(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="taskDescription" />
            </div>

            <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Task Type
                </label>
                <div className="mt-2">
                    <label className="inline-flex items-center text-black">
                        <input type="radio" className="form-radio" name="taskType" value="daily" checked={type === "daily"} onChange={onOptionChange} />
                        <span className="ml-2">Daily</span>
                    </label>
                    <label className="inline-flex items-center ml-6 text-black">
                        <input type="radio" className="form-radio" name="taskType" value="general" checked={type === "general"} onChange={onOptionChange} />
                        <span className="ml-2">General</span>
                    </label>
                </div>
            </div>

            <div className="mt-4">
                <button type="submit" onClick={addTask} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Task
                </button>
            </div>
        </form>
    )
}

export default Input;