import React from 'react';
import ITaskEntry, {TaskType} from '../interfaces/ITaskEntry';
import TaskEntry from './TaskEntry';
import { useAppSelector } from '../Redux/hooks'

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
       <TaskEntry
          key={task.id}
          task={task}
        />      
      ))}
    </div>
  );
}

export default TaskGroup;