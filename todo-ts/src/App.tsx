import React from 'react';
import { TaskType } from './interfaces/ITaskEntry';
import TaskGroup from './components/TaskGroup';
import InputModal from './components/InputModal';
import DayReset from './components/DayReset';

import './App.css';

const App: React.FC = () => {

  return (
    <div className="App mx-auto w-full h-screen sm:px-2 dark:bg-gray-800 dark:text-white">

      <div className='text-center m-2'>
          <h1 className='text-4xl font-bold text-blue-500 m-4'>Todo React App with Tailwind, TypeScript & Redux</h1>
          <hr />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>

          <div className='text-center'>
            <div className='bg-white shadow rounded p-4 dark:bg-gray-700'>
              <h2 className='text-xl font-bold'>Daily Tasks</h2>
              <hr />
              <TaskGroup type={TaskType.DAILY} />
            </div>
          </div>

          <div className='text-center sm:col-span-2 lg:col-span-1'>
          <div className='flex flex-col bg-white shadow rounded p-4 dark:bg-gray-700'>
              <InputModal/>
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

    </div>
  );
}

export default App;