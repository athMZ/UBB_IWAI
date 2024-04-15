import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, createContext } from 'react';
import Container from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import InputModal from './components/InputModal';
import TaskGroup from './components/TaskGroup';
import Stack from 'react-bootstrap/Stack';
import DayReset from './components/DayReset';

export const TaskContext = createContext()

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Finish this app',
      description: 'Finish this app as a part of the assignment',
      type: 'general',
      completed: false
    },
    {
      id: 2,
      title: 'Work on the assignment',
      description: 'Work on the assignment and submit it by the deadline',
      type: 'daily',
      completed: false
    }
  ]);

  return (
    <div className="App">
      <TaskContext.Provider value={{ tasks: tasks, setTasks: setTasks }}>

        <Container fluid="xs">
          <Row>
            <Col>
              <h1 className='text-center m-2'>Todo React App</h1>
              <hr />
            </Col>

          </Row>
          <Row>

            <Col xs={5} className='text-center p-2'>
              <Stack>
                <h2>Daily Tasks</h2>
                <hr />
                <TaskGroup tasks={tasks.filter((task) => task.type === 'daily')} />
              </Stack>
            </Col>

            <Col xs={2} className='text-center'>

              <Stack>
                <InputModal />
                <DayReset />
              </Stack>

            </Col>

            <Col xs={5} className='text-center p-2'>
              <Stack>
                <h2>General Tasks</h2>
                <hr />

                <TaskGroup tasks={tasks.filter((task) => task.type === 'general')} />

              </Stack>
            </Col>

          </Row>
        </Container>
      </TaskContext.Provider>

    </div >
  );
}

export default App;
