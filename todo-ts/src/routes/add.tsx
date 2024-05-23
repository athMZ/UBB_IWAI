import TaskInputForm from "../components/TaskInputForm"

export default function Add() {
    return (
        <div className="bg-gray-700 p-4">              
            <h2 className='text-white text-xl font-bold'>Add Task</h2>
            <hr />
            <TaskInputForm></TaskInputForm>
        </div>
    )
}
