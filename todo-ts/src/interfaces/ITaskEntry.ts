export enum TaskType {
    DAILY = "daily",
    GENERAL = "general",
}

export default interface ITaskEntry {
    id: number;
    title: string;
    description: string;
    done: boolean;
    type: TaskType;
}