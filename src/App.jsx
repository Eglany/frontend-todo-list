import React from 'react';
import './App.css';
import { TaskProvider } from './context/TaskContext';
import Main from './pages/main';

function App() {
  return (
    <TaskProvider>
      <Main />
    </TaskProvider>
  );
}

export default App;
