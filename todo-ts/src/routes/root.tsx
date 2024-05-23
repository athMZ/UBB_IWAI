import { Outlet, Link } from "react-router-dom";
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { axios_getTasks } from '../Redux/apiThunk';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

export async function loader() {
    // const contacts = await getContacts();
    // return { contacts };
  }

export default function Root() {
    const dispatch: ThunkDispatch<any, void, Action> = useDispatch();

    useEffect(() => {
      dispatch(axios_getTasks());
    }, [dispatch]);

    return (
        <div className="App mx-auto w-full h-screen sm:px-2 dark:bg-gray-800 dark:text-white">
            <div className='text-center m-2'>
                <h1 className='text-4xl font-bold text-blue-500 m-4'>Todo React App with Tailwind, TypeScript, Redux, Axios & Router</h1>
                <hr />
                    <div className="m-4">
                        <Link to={'all'} className="px-4 py-2 bg-blue-500 text-white rounded m-2">All Tasks</Link>
                        <Link to={'daily'} className="px-4 py-2 bg-blue-500 text-white rounded m-2">Daily Tasks</Link>
                        <Link to={'general'} className="px-4 py-2 bg-blue-500 text-white rounded m-2">General Tasks</Link>
                        <Link to={'add'} className="px-4 py-2 bg-blue-500 text-white rounded m-2">Add Task</Link>
                    </div>
            </div>
                    <Outlet></Outlet>
        </div>
    );
}