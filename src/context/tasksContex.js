import { createContext } from "react";

const TasksContext = createContext({
  date: new Date(),
  tasks: [],  
  addTask: () => {},  
  completeTask: () => {}  
});


export default TasksContext;