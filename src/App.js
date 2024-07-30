import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Bug 1: Mauvaise gestion de l'ajout de tâches
  const addTask = () => {
    setTasks([...tasks, { text: newTask, id: Date.now() }]);
    setNewTask('');
  };

  // Bug 2: Suppression incorrecte de la tâche
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Bug 3: Champ de saisie non contrôlé
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={addTask}>Add Task</button>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.text}
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}



export default App;
