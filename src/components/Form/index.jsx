import React, { useState, useRef, useEffect } from 'react'

import './Form.css'

const Form = (title, handleClick) => {

    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Вход выполнен!</h1>
                    <br />
                </section>
            ) : (
                <div className="login-box">
                    <h2>Войти</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="user-box">
                            <input
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                            />
                            <label>Имя пользователя</label>
                        </div>
                        <div className="user-box">
                            <input
                                type="password"
                                id="password"
                                onChange={e => setPwd(e.target.value)}
                                value={pwd}
                                required
                            />
                            <label>Пароль</label>
                        </div>
                        <button className="enterButtonForm">
                            Войти
                        </button>
                    </form>
                </div>
            )}
        </>
    )
}
export default Form