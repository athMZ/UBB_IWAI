import React from 'react';
import { TaskType } from './interfaces/ITaskEntry';
import TaskGroup from './components/TaskGroup';
import DayReset from './components/DayReset';
import './App.css';

const App: React.FC = () => {
  return (

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>

          <div className='text-center'>
            <div className='shadow rounded p-4 dark:bg-gray-700'>
              <h2 className='text-xl font-bold'>Daily Tasks</h2>
              <hr />
              <TaskGroup type={TaskType.DAILY} />
            </div>
          </div>

          <div className='text-center sm:col-span-2 lg:col-span-1'>
          <div className='flex flex-col bg-white shadow rounded p-4 dark:bg-gray-700'>
              <DayReset/>
            </div>
          </div>

          <div className='text-center'>
            <div className='bg-white shadow rounded p-4 dark:bg-gray-700'>
              <h2 className='text-xl font-bold'>General Tasks</h2>
              <hr />
              <TaskGroup type={TaskType.GENERAL} />
            </div>
          </div>

        </div>

  );
}

export default App;