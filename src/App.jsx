import React from 'react';
import './App.css';

import Tasklist from './components/Tasklist';
import Header from './components/Header/Header';
import Station from './components/Station/Station';

function App() {

  return (
    <div className="App">
      <Header />
      <Station />
      <Station />
      <body>
        <Tasklist />
      </body>
    </div>
  );
}

export default App;
