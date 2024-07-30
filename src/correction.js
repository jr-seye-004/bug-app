// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');

//   // Correction Bug 1: Assurer que le champ de saisie est vidé après l'ajout
//   const addTask = () => {
//     if (newTask.trim() !== '') {
//       setTasks([...tasks, { text: newTask, id: Date.now() }]);
//       setNewTask('');
//     }
//   };

//   // Correction Bug 2: S'assurer que le bon identifiant est utilisé pour filtrer
//   const deleteTask = (id) => {
//     setTasks(tasks.filter(task => task.id !== id));
//   };

//   Correction Bug 3: Mise à jour correcte de l'état newTask
//   const handleInputChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>To-Do List</h1>
//         <input
//           type="text"
//           placeholder="Add a new task"
//           value={newTask}
//           onChange={handleInputChange}
//         />
//         <button onClick={addTask}>Add Task</button>
//         <ul>
//           {tasks.map(task => (
//             <li key={task.id}>
//               {task.text}
//               <button onClick={() => deleteTask(task.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </header>
//     </div>
//   );
// }

// export default App;
