import React from 'react';
import { useAppDispatch } from '../Redux/hooks';
import { axios_resetDay } from '../Redux/apiThunk';

const DayReset: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleReset = () => {
    dispatch(axios_resetDay());
  };

  return (
    <button
    onClick={handleReset}
    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >Reset Tasks</button>
  );
};

export default DayReset;