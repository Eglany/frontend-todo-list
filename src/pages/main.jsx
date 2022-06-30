import React from 'react';
import '../App.css';
import NewTask from '../components/NewTask';

function Main() {
  return (
    <main>
      <aside id="new-task">
        <h1>criar nova tarefa</h1>
        <NewTask />
      </aside>
      <section id="all-tasks">
        <h1 id="title-tasks">Lista de tarefas</h1>
      </section>
    </main>
  );
}

export default Main;
