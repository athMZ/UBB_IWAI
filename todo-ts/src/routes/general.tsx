import { TaskType } from '../interfaces/ITaskEntry';
import TaskGroup from '../components/TaskGroup';

export default function General() {
    return (
        <>              
            <h2 className='text-xl font-bold'>General Tasks</h2>
            <hr />
            <TaskGroup type={TaskType.GENERAL} />
        </>
    )
}
