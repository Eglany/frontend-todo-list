import React, { createContext } from 'react';

const TaskContext = createContext();

function teskContext({ children }) {
  const task = (value) => {
    console.log(value);
    return null;
  };

  const contextValues = { task };

  return (
    <TaskContext.Provider value={contextValues}>
      { children }
    </TaskContext.Provider>
  );
}

export default teskContext;
