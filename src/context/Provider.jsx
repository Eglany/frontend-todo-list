import React, { useState } from 'react';
import TaskContext from './TaskContext';

// eslint-disable-next-line react/prop-types
function Provider({ children }) {
  const [newTask, setNewTask] = useState([]);

  const checkTask = () => console.log(newTask, 'provider');

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValues = { checkTask, setNewTask };

  return (
    <TaskContext.Provider value={contextValues}>
      { children }
    </TaskContext.Provider>
  );
}

export default Provider;
