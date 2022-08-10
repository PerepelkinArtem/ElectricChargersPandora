import React from 'react';
import './App.css';

import Tasklist from './components/Tasklist';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={} className="App-logo" alt="logo" /> */}
        <p>
          TASK LIST
        </p>
        <p className='pdca'>
        Deming Cycle or PDCA (Plan-Do-Check-Act)
        </p>
      </header>
      <body>
        <Tasklist />
      </body>
    </div>
  );
}

export default App;
