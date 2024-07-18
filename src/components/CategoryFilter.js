import React from "react";

function CategoryFilter({categories, handleCategoryClick, selectedCategory}) {

  function categoryButtons() {
      
     return categories.map((category) => {
      return <button key={category}className={ selectedCategory === category ? "selected" : ""} onClick={() => handleCategoryClick(category)}>
          {category}
        </button>
    })
  }
  


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons()}
    </div>
  ); 
}

export default CategoryFilter;
