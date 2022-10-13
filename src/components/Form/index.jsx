import React, { useState } from 'react'

import './Form.css'

const Form = (title, handleClick) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div className="login-box">
            <h2>Аутентификация</h2>
            <form>
                <div className="user-box">
                    <input
                        type="email"
                        value={email}
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)} />
                    <label>E-mail</label>
                </div>
                <div className="user-box">
                    <input
                        type="password"
                        value={pass}
                        placeholder="password"
                        onChange={e => setPass(e.target.value)} />
                    <label>Пароль</label>
                </div>
                <button
                    className="enterButtonForm"
                    onClick={() => handleClick(email, pass)}
                >
                    {/* {title} */}
                    Войти
                </button>
            </form>
        </div>
    )
}
export default Form