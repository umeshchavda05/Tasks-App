import React, { useState } from 'react';
//mock data
import data from "./data.json";
//components

import ToDoList from "./toDoList";


function App() {
  
  const [ toDoList, setToDoList ] = useState(data);

  function handleToggle(id){
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }



  return (
    <div className="App">
     
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>

    </div>
  );
}

export default App;
