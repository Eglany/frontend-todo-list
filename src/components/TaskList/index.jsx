import React, { useContext, useEffect } from 'react';
import TaskContext from '../../context/TaskContext';
import DeleteButton from '../DeleteButton';
import EditButton from '../EditButton';
import './styles.css';

function TaskList() {
  const { taskList, allTasks } = useContext(TaskContext);

  useEffect(() => {
    allTasks();
  }, []);

  useEffect(() => {
  }, [taskList]);

  return (
    <section id="task-list">
      {taskList.map(({ task, status, id }) => (
        <div id={`task-${id}`} className="task-item">
          <span>{task}</span>
          <div className="task-datails">
            <span>{status}</span>
            <div className="task-buttons">
              <EditButton />
              <DeleteButton props={id} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default TaskList;
