import React from 'react';
import './styles.css';

function NewTask() {
  return (
    <section id="container-new-task">
      <div id="div-new-task">
        <span>Tarefa:</span>
        <label htmlFor="new-task">
          <input type="text" id="new-task" />
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
    </section>
  );
}

export default NewTask;
