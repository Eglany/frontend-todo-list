import React from 'react';
import '../App.css';
import NewTask from '../components/NewTask';
import TaskList from '../components/TaskList';

function Main() {
  return (
    <main>
      <aside id="new-task">
        <h1>criar nova tarefa</h1>
        <NewTask />
      </aside>
      <section id="task-container">
        <h1 id="title-tasks-list">Lista de tarefas</h1>
        <TaskList />
      </section>
    </main>
  );
}

export default Main;
