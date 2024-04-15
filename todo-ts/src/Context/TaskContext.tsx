import { PropsWithChildren, useState, createContext, useContext, useEffect } from "react";
import ITaskEntry from "../interfaces/ITaskEntry";

type ContextType = {
  tasks: ITaskEntry[];
  setTasks: (tasks: ITaskEntry[]) => void;
}

export const TaskContext = createContext<ContextType | undefined>(undefined);

export const TaskProvider = ({ children }: PropsWithChildren<{}>) => {
  const [tasks, setTasks] = useState<ContextType["tasks"]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = ()=>{
  const  context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTaskContext must be used inside the TaskProvider");
  }

  return context;
}