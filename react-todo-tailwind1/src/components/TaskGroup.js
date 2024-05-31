import React from 'react';
import TaskEntry from './TaskEntry';

function TaskGroup(props) {

    const entries = props.tasks
        .filter((task) => !task.completed)
        .map((task, index) => {
            return (
                <TaskEntry
                    key={index}
                    title={task.title}
                    description={task.description}
                    type={task.type}
                    id={task.id}
                ></TaskEntry>
            )
        })

    return (
        <div>
            {entries}
        </div>
    )
}

export default TaskGroup;