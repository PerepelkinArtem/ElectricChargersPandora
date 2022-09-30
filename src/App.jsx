import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import NoMatchRoute from './pages/NoMatchRoute'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {

  return (
    <div className="App">
      <Header />
      <Menu items={['Просмотр станций', 'Управление аккаунтом', 'Контакты']} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NoMatchRoute />} />
      </Routes>
    </div >
  );
}

export default App
