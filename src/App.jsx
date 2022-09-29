import React from 'react'
import './App.css'

import Tasklist from './components/Tasklist'
import Header from './components/Header/Header'
import Station from './components/Station/Station'
import Menu from './components/Menu/Menu'

function App() {

  return (
    <div className="App">
      <Header />
      <Menu
        items={['Просмотр станций', 'Управление аккаунтом', 'Контакты']}
      />
      <Station />
      <Station />
      <body>
        <Tasklist />
      </body>
    </div>
  );
}

export default App
