import React from 'react';
import './App.css';
import Tasklist from './components/Tasklist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={} className="App-logo" alt="logo" /> */}
        <p>
          Список задач
        </p>
        <p className='pdca'>
        Deming Cycle или PDCA (англ. «Plan-Do-Check-Act»)
        </p>
      </header>
      <body>
        <Tasklist />
      </body>
    </div>
  );
}

export default App;
