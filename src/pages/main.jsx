import React from 'react';
import '../App.css';
import NewTask from '../components/NewTask';
import NewTaskButton from '../components/NewTaskButton';

function Main() {
  return (
    <main>
      <aside id="new-task">
        <h1>criar nova tarefa</h1>
        <NewTask />
        <NewTaskButton />

      </aside>
      <section id="all-tasks">
        <h1 id="title-tasks">Lista de tarefas</h1>
      </section>
    </main>
  );
}

export default Main;
