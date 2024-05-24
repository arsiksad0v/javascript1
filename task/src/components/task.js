import React from 'react';

const Task = ({ task, onDeleteTask }) => {
  return (
    <div className="task">
      <span>{task.text}</span>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;