import React, {useState, ChangeEvent} from 'react';
import ITaskEntry, {TaskType} from '../interfaces/ITaskEntry';

import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/taskSlice';

const TaskInputForm: React.FC = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState(TaskType.DAILY);
    
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const newTask: ITaskEntry = {
        id: Math.random(),
        title,
        description,
        done: false,
        type,
      };

      dispatch(addTask(newTask))

    setTitle('');
    setDescription('');
    setType(TaskType.DAILY);
    };

    const onOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setType(event.target.value as TaskType);
      };

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
                        <input type="radio" className="form-radio" name="taskType" value={TaskType.DAILY} checked={type === TaskType.DAILY} onChange={onOptionChange} />
                        <span className="ml-2">Daily</span>
                    </label>
                    <label className="inline-flex items-center ml-6 text-black">
                        <input type="radio" className="form-radio" name="taskType" value={TaskType.GENERAL} checked={type === TaskType.GENERAL} onChange={onOptionChange} />
                        <span className="ml-2">General</span>
                    </label>
                </div>
            </div>

            <div className="mt-4">
                <button type="submit" onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Task
                </button>
            </div>
        </form>
    );
}

export default TaskInputForm;