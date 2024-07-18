import React from "react";
import Task from "./Task.js"

function TaskList( {tasks, setTasks} ) {

  function deleteTask (taskToDelete) {
    setTasks(tasks.filter(task => task.text !== taskToDelete))
  }
  
  

  return (
    <div className="tasks">
      {tasks.map((task) => {
       return <Task key={task.text} text={task.text} category={task.category} onDelete={deleteTask} />
      })}
    </div>
  );
}

export default TaskList;
