import React, { useState, useEffect, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import NoMatchRoute from './pages/NoMatchRoute'
import Login from './pages/Login'
import Home from './pages/Home'
import axios from './api/axios'
import AuthContext from './context/AuthProvider'

const GET_STATIONS_URL = '/api/v1/getstations'

function App() {
  const { auth } = useContext(AuthContext)
  const [stations, setStations] = useState([])

  useEffect(() => {
    const stationsResponce = axios
      .get(GET_STATIONS_URL)
      // .then(data => data.data.result)
      // .then(data => data.data.result)
      .then((response) => { setStations(response) })
  }, [auth])
  // console.log('из App - ', auth)
  // console.log('из App - stations: ', stations)

  // const stationID = stations.data
  // console.log ('из App stationID - ', stationID)

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
      {/* <Menu items={['Просмотр станций', 'Управление аккаунтом']} /> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/stations' element={<Home stations={stations} />} />
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
