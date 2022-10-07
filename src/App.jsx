import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'


import './App.css'
import Header from './components/Header'
import NoMatchRoute from './pages/NoMatchRoute'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {

  const [stations, setStt] = useState();

  service.post(`/api/login`, `{"login":"a.perepelkin","password":"3f86ou"}`).then(res => {
    service.get(`/api/v1/getstations`).then(res => {
      setStt(JSON.stringify(res.data));
    });
  });
console.log ({stations})

  return (
    <div className="App">
      <Header />
      {stations}
      {/* <Menu items={['Просмотр станций', 'Управление аккаунтом']} /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NoMatchRoute />} />
      </Routes>
    </div >
  );
}

const service = axios.create({
  timeout: 10000, // request timeout
  withCredentials: true
});

export default App
