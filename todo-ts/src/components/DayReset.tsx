import React from 'react';
import { useTaskContext } from '../Context/TaskContext';

const DayReset: React.FC = () => {
  const { tasks, setTasks } = useTaskContext();

  const handleReset = () => {
    const resetTasks = tasks.map(task => ({ ...task, done: false }));
    setTasks(resetTasks);
  };

  return (
    <button
    onClick={handleReset}
    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >Reset Tasks</button>
  );
};

export default DayReset;