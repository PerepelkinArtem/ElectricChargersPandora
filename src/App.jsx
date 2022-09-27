import React from 'react';
import './App.css';

import Tasklist from './components/Tasklist';
import Header from './components/Header/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <body>
        <Tasklist />
      </body>
    </div>
  );
}

export default App;
