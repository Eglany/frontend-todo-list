import React, { useContext, useState } from 'react';
import TaskContext from '../../context/TaskContext';
import './styles.css';

function NewTask() {
  const [inputText, setInputText] = useState('');
  const { task } = useContext(TaskContext);
  const testHoks = (value) => task(value);
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
          <select type="" id="status-new-task">
            <option value="pending">Pendente</option>
            <option value="progress">Em andamento</option>
            <option value="done">Pronto</option>
          </select>
        </label>
      </div>
      <button>teste</button>
    </section>
  );
}

export default NewTask;
