import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { axios_deleteTask, axios_getTasks, axios_postTask, axios_putTask, axios_resetDay } from './apiThunk';
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
        markTaskComplete: (state, action: PayloadAction<string>) => {
            let taskId = action.payload;
            const newTasks = state.tasks.map(t => t._id === taskId ? { ...t, done: true } : t);

            state.tasks = newTasks
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            let taskId = action.payload;
            const newTasks = state.tasks.filter(t => t._id !== taskId);

            state.tasks = newTasks
        },
        resetDailyTasks: (state) => {
            const newTasks = state.tasks.map(task => ({ ...task, done: false }));

            state.tasks = newTasks
        }
    },
    extraReducers: builder => {
        builder
            .addCase(axios_getTasks.fulfilled, (state, action) => {
                state.tasks = [...action.payload];
            })
            .addCase(axios_postTask.fulfilled, (state, action) => {
                state.tasks.push(action.payload);
            })
            .addCase(axios_putTask.fulfilled, (state, action) => {
                const index = state.tasks.findIndex(task => task._id === action.payload.id);
                if (index !== -1) {
                    state.tasks[index] = action.payload;
                }
            })
            .addCase(axios_deleteTask.fulfilled, (state, action) => {
                const index = state.tasks.findIndex(task => task._id === action.payload);
                if (index !== -1) {
                    state.tasks.splice(index, 1);
                }
            })
            .addCase(axios_resetDay.fulfilled, (state, action) => {
                state.tasks = state.tasks.map(task => ({ ...task, done: false }));
            });
    },
});

export const { addTask, markTaskComplete, deleteTask, resetDailyTasks } = taskSlice.actions;

export default taskSlice.reducer;