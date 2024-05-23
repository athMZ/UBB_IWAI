import { useParams } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import ITaskEntry from '../interfaces/ITaskEntry';
import { RootState } from '../Redux/taskStore';
import TaskEntry from '../components/TaskEntry';

const Details: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const task: ITaskEntry|undefined = useSelector((state: RootState) => state.tasks.find((task: ITaskEntry) => task._id === id));

    return (
        <div className='p-8'>
            <div className="flex justify-center items-center">
                    <h2 className="text-4xl font-bold">Task Details</h2>
            </div>

            {task ? (
                <TaskEntry task={task} />
            ) : (
                <div>Error: Task not found</div>
            )}
        </div>
    );
};

export default Details;