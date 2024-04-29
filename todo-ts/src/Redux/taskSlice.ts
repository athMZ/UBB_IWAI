import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ITaskEntry from '../interfaces/ITaskEntry';

interface TaskState {
    tasks: ITaskEntry[];
}

const initialState: TaskState = {
    tasks: []
};

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITaskEntry>) => {
            state.tasks.push(action.payload);
        },
        markTaskComplete: (state, action: PayloadAction<number>) => {
            let taskId = action.payload;
            const newTasks = state.tasks.map(t => t.id === taskId ? { ...t, done: true } : t);

            state.tasks = newTasks
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            let taskId = action.payload;
            const newTasks = state.tasks.filter(t => t.id !== taskId);

            state.tasks = newTasks
        },
        resetDailyTasks: (state) => {
            const newTasks = state.tasks.map(task => ({ ...task, done: false }));

            state.tasks = newTasks
        }
    },
});

export const { addTask, markTaskComplete, deleteTask, resetDailyTasks } = taskSlice.actions;

export default taskSlice.reducer;