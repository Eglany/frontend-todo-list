import React, { useState } from 'react';
import TaskContext from './TaskContext';

// eslint-disable-next-line react/prop-types
function Provider({ children }) {
  const [newTask, setNewTask] = useState({});
  const [taskList, setTaskList] = useState([]);

  const createTask = (message, status) => {
    setNewTask({ message, status })
      .then(() => {
        if (!taskList) setTaskList([newTask]);
        setTaskList([...taskList, newTask]);
      });
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValues = { createTask, taskList };

  return (
    <TaskContext.Provider value={contextValues}>
      { children }
    </TaskContext.Provider>
  );
}

export default Provider;
