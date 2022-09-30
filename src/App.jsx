import React from 'react'
import './App.css'

import Header from './components/Header/Header'
import Station from './components/Station/Station'
import Menu from './components/Menu/Menu'

function App() {

  return (
    <div className="App">
      <Header />
      <Menu items={['Просмотр станций', 'Управление аккаунтом', 'Контакты']} />
      <div className="mainStation">
        <Station />
        <Station />
        <Station />
      </div>
    </div >
  );
}

export default App
