import React from 'react';
import ITaskEntry, {TaskType} from '../interfaces/ITaskEntry';
import TaskEntry from './TaskEntry';
import { useAppSelector } from '../Redux/hooks'
import { Link } from 'react-router-dom';
interface TaskGroupProps {
    type: TaskType;
}

const TaskGroup: React.FC<TaskGroupProps> = ({ type }) => {
  const tasks = useAppSelector((state) => state.tasks)

  const filteredTasks = tasks
  .filter(task => task.type === type)
  .filter(task => task.done === false);

  return (
    <div>
      {filteredTasks.map((task: ITaskEntry) => (
        <div className='m-2'>
          <TaskEntry
            key={task._id}
            task={task}
          />
          <Link to={`/details/${task._id}`} className="text-blue-500 hover:underline">Details</Link>
          <hr/>
        </div>
      ))}
    </div>
  );
}

export default TaskGroup;