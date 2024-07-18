import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  
  const [selectedCategory, setSelectedCatagory] = useState("All")

  const [tasks, setTasks] = useState(TASKS)

  function handleCategoryClick (category) {
      setSelectedCatagory(category)
  }  

  const filteredItems = tasks.filter((task) => {
    if( selectedCategory === "All") {
      return true
    } else if(task.category === selectedCategory) {
      return task
    }
  })

  function onTaskFormSubmit (newTask) {
    setTasks([...tasks, newTask])
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCategoryClick= {handleCategoryClick} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks= {filteredItems} setTasks={setTasks}  />
    </div>
  );
}

export default App;
