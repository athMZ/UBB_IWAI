import { createAsyncThunk } from "@reduxjs/toolkit";
import { markTaskComplete, deleteTask } from "./taskSlice";
import ITaskEntry from '../interfaces/ITaskEntry';
import axios from "axios";

const baseURl = process.env.REACT_APP_API_URL;

const api = axios.create({
    baseURL: baseURl,
});

export const axios_getTasks = createAsyncThunk('task/fetchTasks', async () => {
    const response = await api.get('/getAll');
    return response.data;
});

export const axios_postTask = createAsyncThunk('task/addTask', async (task: ITaskEntry) => {
    const response = await api.post('/post', task);
    return response.data;
});

export const axios_putTask = createAsyncThunk('task/markTaskComplete', async (task: ITaskEntry, thunkAPI) => {
    const response = await api.put(`/update/${task._id}`, task);
    thunkAPI.dispatch(markTaskComplete(task._id));
    return response.data;
});

export const axios_resetDay = createAsyncThunk('task/resetDay', async () => {
    const response = await api.put(`/updateDailyTasks`);
    return response.data;
});

export const axios_deleteTask = createAsyncThunk('task/deleteTask', async (taskId: string, thunkAPI) => {
    await api.delete(`/delete/${taskId}`);
    thunkAPI.dispatch(deleteTask(taskId));
    return taskId;
});