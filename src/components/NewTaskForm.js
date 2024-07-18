import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [taskDetails, setTaskDetails] = useState("")
  const [selectedTaskCategory, setSelectedTaskCatagory] = useState("")

  function handleTaskDetails (event) {
    setTaskDetails(event.target.value)
  }

  function handleCategory(event) {
    setSelectedTaskCatagory(event.target.value)
  }

  function handleSubmit (event) {
    event.preventDefault()
    const newTask = {
      text : taskDetails,
      category: selectedTaskCategory
    }

    onTaskFormSubmit(newTask)
    setTaskDetails('')
    setSelectedTaskCatagory('')
    
  }

function handleOptionDisplay () {
  return categories.filter((category) => category !== "All").map((category) => {
    return <option key={category}>{category}</option> 
  }) 
  

  
}
  return (
    <form className="new-task-form" onSubmit= {handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value= {taskDetails} onChange={handleTaskDetails} />
      </label>
      <label>
        Category
        <select name="category"  value={selectedTaskCategory} onChange={handleCategory}>
          {/* render <option> elements for each category here */}
          { handleOptionDisplay() }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
