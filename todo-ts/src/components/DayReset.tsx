import React from 'react';
import { useDispatch } from 'react-redux';
import { resetDailyTasks } from '../Redux/taskSlice';

const DayReset: React.FC = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetDailyTasks());
  };

  return (
    <button
    onClick={handleReset}
    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >Reset Tasks</button>
  );
};

export default DayReset;