import React, { useContext, useState } from 'react';
import TaskContext from '../../context/TaskContext';
import './styles.css';

function NewTask() {
  const [inputText, setInputText] = useState('');
  const [inputStatus, setInputStatus] = useState('pending');
  const { createTask } = useContext(TaskContext);

  return (
    <section id="container-new-task">
      <div id="div-new-task">
        <span>Tarefa:</span>
        <label htmlFor="new-task">
          <input
            type="text"
            value={inputText}
            id="new-task"
            onChange={({ target: { value } }) => setInputText(value)}
          />
        </label>
      </div>
      <div id="div-status-new-task">
        <span>status:</span>
        <label htmlFor="status-new-task">
          <select
            id="status-new-task"
            onClick={({ target: { value } }) => setInputStatus(value)}
          >
            <option value="pending">Pendente</option>
            <option value="progress">Em andamento</option>
            <option value="done">Pronto</option>
          </select>
        </label>
      </div>
      <button
        type="button"
        id="button-new-task"
        onClick={() => createTask([inputText, inputStatus])}
      >
        criar
      </button>
    </section>
  );
}

export default NewTask;
