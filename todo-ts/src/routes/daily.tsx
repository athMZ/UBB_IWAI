import { TaskType } from '../interfaces/ITaskEntry';
import TaskGroup from '../components/TaskGroup';

export default function Daily() {
    return (
        <>              
            <h2 className='text-xl font-bold'>Daily Tasks</h2>
            <hr />
            <TaskGroup type={TaskType.DAILY} />
        </>
    )
}
