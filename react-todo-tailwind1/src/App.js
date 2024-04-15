import './App.css';
import { useState, useEffect, createContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import InputModal from './components/InputModal';
import TaskGroup from './components/TaskGroup';
import DayReset from './components/DayReset';

export const TaskContext = createContext()

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [darkMode, setDarkMode] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const classList = document.documentElement.classList;
    if (darkMode) {
      classList.add('dark');
    } else {
      classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="App mx-auto w-full h-screen sm:px-2 dark:bg-gray-800 dark:text-white">

      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`font-bold py-2 px-4 rounded m-2 transition-colors duration-200 
                    ${darkMode ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900' : 'bg-gray-800 hover:bg-gray-700 text-white'}`}
      >
        {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
      </button>

      <TaskContext.Provider value={{ tasks: tasks, setTasks: setTasks }}>
        <div className='text-center m-2'>
          <h1 className='text-4xl font-bold text-blue-500 m-4'>Todo React App with Tailwind</h1>          <hr />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>

          <div className='text-center'>
            <div className='bg-white shadow rounded p-4 dark:bg-gray-700'>
              <h2 className='text-xl font-bold'>Daily Tasks</h2>
              <hr />
              <TaskGroup tasks={tasks.filter((task) => task.type === 'daily')} />
            </div>
          </div>

          <div className='text-center sm:col-span-2 lg:col-span-1'>
            <div className='bg-white shadow rounded p-4 dark:bg-gray-700'>
              <InputModal />
              <DayReset />
            </div>
          </div>

          <div className='text-center'>
            <div className='bg-white shadow rounded p-4 dark:bg-gray-700'>
              <h2 className='text-xl font-bold'>General Tasks</h2>
              <hr />
              <TaskGroup tasks={tasks.filter((task) => task.type === 'general')} />
            </div>
          </div>

        </div>
      </TaskContext.Provider>
    </div>
  )
}

export default App;
