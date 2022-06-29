import React from 'react';
import './App.css';
import TaskContext from './context/TaskContext';
import Main from './pages/main';

function App() {
  return (
    <TaskContext>
      <Main />
    </TaskContext>
  );
}

export default App;
