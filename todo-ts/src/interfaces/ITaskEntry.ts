export enum TaskType {
    DAILY = "daily",
    GENERAL = "general",
}

export default interface ITaskEntry {
    _id: string;
    title: string;
    description: string;
    done: boolean;
    type: TaskType;
}