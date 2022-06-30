import React, { useContext, useEffect } from 'react';
import TaskContext from '../../context/TaskContext';

function TaskList() {
  const { taskList } = useContext(TaskContext);

  useEffect(() => {
    console.log(taskList);
  }, [taskList]);
  return (
    <table>
      <tr>
        <th>tarefa</th>
        <th>status</th>
      </tr>
      {taskList ? taskList.map(({ message, status }) => (
        <tr>
          <td>{message}</td>
          <td>{status}</td>
        </tr>
      )) : null}
    </table>
  );
}

export default TaskList;
