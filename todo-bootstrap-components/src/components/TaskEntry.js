import React from 'react';
import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/esm/Button';

import { TaskContext } from '../App';

function TaskEntry(props) {

    const { tasks, setTasks } = useContext(TaskContext);

    const handleComplete = () => {
        const newTasks = tasks.map((task) => {
            if (task.id === props.id) {
                task.completed = true;
            }
            return task;
        });

        setTasks(newTasks);
    };

    const handleDelete = () => {
        const newTasks = tasks.filter((task) => task.id !== props.id);
        setTasks(newTasks);
    }

    function Buttons() {
        if (props.type === 'daily') {
            return (
                <>
                    <Button variant='success' onClick={handleComplete} className='m-2'>DONE</Button>
                    <Button variant='danger' onClick={handleDelete} className='m-2'>DELETE</Button>
                </>
            )
        } else {
            return (
                <>
                    <Button variant='outline-primary' onClick={handleDelete} className='m-2'>DONE</Button>
                </>
            )
        }
    }

    return (
        <Accordion.Item eventKey={props.eventKey}>
            <Accordion.Header>{props.title}</Accordion.Header>
            <Accordion.Body>
                {props.description}
                <hr />
                <Buttons />
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default TaskEntry;