import React, { useState } from 'react';
import './TodoList.css';

const Todopist = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
      localStorage.setItem(newTask)
    }
    else {
      alert("Plese enter Your's")
    }
  };
  
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    
  };





  return (
    <div className='background'>
      <div className="todo-container">
        <h1>TODOLIST</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)} />

          <button onClick={addTask}>Add</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => removeTask(index)}>Remove</button>
              {/* <button onClick={() => editTask(index)}>Edit</button> */}

            </li>

          ))}
        </ul>

      </div>
    </div>

  );
};

export default Todopist;
