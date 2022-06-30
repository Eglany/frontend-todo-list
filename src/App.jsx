import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Main from './pages/main';

function App() {
  return (
    <Provider>
      <Main />
    </Provider>
  );
}

export default App;
