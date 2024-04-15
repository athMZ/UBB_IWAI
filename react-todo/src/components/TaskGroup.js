import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import TaskEntry from './TaskEntry';

function TaskGroup(props) {

    const entries = props.tasks
        .filter((task) => !task.completed)
        .map((task, index) => {
            return (
                <TaskEntry
                    key={index}
                    eventKey={index}
                    title={task.title}
                    description={task.description}
                    type={task.type}
                    id={task.id}
                ></TaskEntry>
            )
        })

    return (
        <Accordion defaultActiveKey="0" flush className='p-2'>
            {entries}
        </Accordion>
    )
}

export default TaskGroup;