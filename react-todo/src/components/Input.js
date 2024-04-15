import { React, useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { TaskContext } from '../App';

function Input() {
    const { tasks, setTasks } = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');

    const onOptionChange = e => {
        setType(e.target.value)
    }

    function addTask(e) {
        e.preventDefault();

        const newTask = {
            id: Date.now().toString(36) + Math.random().toString(36),
            title: title,
            description: description,
            type: type,
            completed: false
        }

        setTasks([...tasks, newTask]);
    }

    return (
        <Form className='m-4'>
            <Form.Group className="mb-3" controlId="taskTitle">
                <Form.Label>Task Title</Form.Label>
                <Form.Control type="text" placeholder="Enter task title" value={title} onChange={e => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="taskDescription">
                <Form.Label>Task Description</Form.Label>
                <Form.Control type="text" placeholder="Enter task description" value={description} onChange={e => setDescription(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="taskType">
                <Form.Check inline type="radio" label="Daily" value={"daily"} checked={type === "daily"}
                    onChange={onOptionChange} />
                <Form.Check inline type="radio" label="General" value={"general"} checked={type === "general"} onChange={onOptionChange} />
            </Form.Group>

            <div className="d-grid gap-2">
                <Button variant="primary" type="submit" onClick={addTask}>
                    Add Task
                </Button>
            </div>
        </Form>
    )
}

export default Input;