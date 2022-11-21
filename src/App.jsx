import React from 'react'
// import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
// import axios from 'axios'

import './App.css'
import Header from './components/Header'
import NoMatchRoute from './pages/NoMatchRoute'
import Login from './pages/Login'
import Home from './pages/Home'

// const baseURL = 'https://622072c8ce99a7de1959cf52.mockapi.io/items'
// const basePandorURL = 'http://web1.pandora.develop:5003'

function App() {

//   const [items, setItems] = useState([])
  
//Рабочий код
// const [stations, setStt] = useState([])

//   useEffect(() => {
//   service.post(`/api/login`, `{"login":"a.perepelkin","password":"3f86ou"}`).then(res => {
//     service.get(`/api/v1/getstations`).then(res => {
//       // setStt(JSON.stringify(res.data));
//       setStt(res.data);
//     });
//   });
// }, [])

// console.log (stations)
//Рабочий код

  return (
    <div className="App">
      <Header />
      {/* {stations} */}
      {/* for testing */}
      {/* {items.map(items => {
        return (
          <p>{items.data.price}</p>
        );
      })} */}
      {/* for testing */}
      {/* <Menu items={['Просмотр станций', 'Управление аккаунтом']} /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NoMatchRoute />} />
      </Routes>
    </div >
  );
}

// useEffect(() => {
//   const service = axios.create({
//     timeout: 10000, // request timeout
//     withCredentials: true
//   });
// }, [])

// Рабочий код
// const service = axios.create({
//   timeout: 10000, // request timeout
//   withCredentials: true
// });
// Рабочий код

export default App
