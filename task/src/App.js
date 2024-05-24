import React, { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/task';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Learn React' },
    { id: '2', text: 'Build a ToDo App' },
  ]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now().toString(),
      text,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="App">
      <h1>To Do Manager</h1>
      <AddTaskForm onAddTask={addTask} />
      <div className="task-list">
        {tasks.map(task => (
          <Task key={task.id} task={task} onDeleteTask={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default App;
