import React, {useState, useEffect } from "react";
import TasksContext from "../../context/taskContex";

function formatDate(today ){
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}


export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [date, setDate] = useState(new Date());


  useEffect(() => {
    const storedData = localStorage.getItem("tasks");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const storedDate = new Date(parsedData.date);
      

      if (formatDate(storedDate) === formatDate(new Date())) {
        setTasks(parsedData.tasks); 
        setDate(storedDate);
      } else {
        setTasks([]);
        setDate(new Date());
      }
    }
  }, []);

  const addTask = (newTask) => {
    newTask.id = tasks.length + 1;
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify({ date: new Date(), tasks: updatedTasks }));
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify({ date: new Date(), tasks: updatedTasks }));
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, completeTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider