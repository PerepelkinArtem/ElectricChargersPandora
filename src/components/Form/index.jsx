import React, { useState, useRef, useEffect, useContext } from 'react'
import { Navigate } from 'react-router-dom'

import AuthContext from '../../context/AuthProvider'
import './Form.css'

import axios from '../../api/axios'
const LOGIN_URL = '/api/login'

const Form = () => {
    const { setAuth } = useContext(AuthContext)
    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState('')

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                { "login": user, "password": pwd },
                {
                    withCredentials: true
                }
            );
            console.log(response)
            //console.log(JSON.stringify(response));
            const accessToken = response.data.result.access_expired
            const refreshToken = response.data.result.refresh_token
            const roles = response.data.result.roles
            setAuth({ user, pwd, roles, accessToken, refreshToken })
            setUser('')
            setPwd('')
            setSuccess(true)
        } catch (err) {
            if (!err.response) {
                setErrMsg('No Server Response');
            } else if (err.response.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            // errRef.current.focus();
        }
    }
    return (
        <>
            {success ? (
                <Navigate to='/stations' replace={true} />
            ) : (
                <div className="login-box">
                    <p>Вход в <span>систему</span></p>
                    <span className="login-box_info">Введите данные для входав систему,<br />чтобы получить доступ</span>
                    <form onSubmit={handleSubmit}>
                        <div className="user-box">
                            <input
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                placeholder="a.perepelkin"
                                required
                                className="username-input"
                            />
                            <label>Имя пользователя</label>
                        </div>
                        <div className="user-box-password">
                            <input
                                type="password"
                                id="password"
                                onChange={e => setPwd(e.target.value)}
                                value={pwd}
                                placeholder="**************"
                                required
                            />
                            <label>Пароль</label>
                        </div>
                        <button className="enterButtonForm">
                            Вход
                        </button>
                    </form>
                    <span className="noPassword">Не помню пароль</span>
                </div>
            )}
        </>
    )
}
export default Form