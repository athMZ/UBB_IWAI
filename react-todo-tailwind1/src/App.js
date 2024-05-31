import './App.scss';
import { useState, useEffect, createContext } from 'react';
import InputModal from './components/InputModal';
import TaskGroup from './components/TaskGroup';
import DayReset from './components/DayReset';

export const TaskContext = createContext()

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  return (
    <div className="App">
      <TaskContext.Provider value={{ tasks: tasks, setTasks: setTasks }}>
        <div className='header'>
          <h1>Todo React App with SCSS ON GH pages</h1>
        </div>

        <div className='task-grid'>

          <div className='daily-tasks-section'>
            <div>
              <h2>Daily Tasks</h2>
              <hr />
              <TaskGroup tasks={tasks.filter((task) => task.type === 'daily')} />
            </div>
          </div>

          <div className='input-modal-section'>
            <InputModal />
            <DayReset />
          </div>

          <div className='general-tasks-section'>
            <div>
              <h2>General Tasks</h2>
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
