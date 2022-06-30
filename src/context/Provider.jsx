import React, { useMemo, useState } from 'react';
import TaskContext from './TaskContext';

// eslint-disable-next-line react/prop-types
export function Provider({ children }) {
  const [newTask, setNewTask] = useState([]);

  const testTask = (value) => {
    setTasks(value);
    console.log(value);
  };

  const contextValues = useMemo(() => ({ testTask, setNewTask }));

  return (
    <TaskContext.Provider value={contextValues}>
      { children }
    </TaskContext.Provider>
  );
}

export default Provider;
