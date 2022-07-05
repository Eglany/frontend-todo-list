import React, { useState } from 'react';
import taskApi from '../Utils/fetchAPI';
import TaskContext from './TaskContext';

// eslint-disable-next-line react/prop-types
function Provider({ children }) {
  const [taskList, setTaskList] = useState([]);

  const allTasks = async () => taskApi.GET().then((data) => setTaskList(data));

  const createTask = async (task, status) => taskApi.POST({ task, status }).then(allTasks);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValues = { createTask, taskList, allTasks };

  return (
    <TaskContext.Provider value={contextValues}>
      { children }
    </TaskContext.Provider>
  );
}

export default Provider;
