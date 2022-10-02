import React, {useState} from 'react'

import './Login.css'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div class="login-box">
            <h2>Авторизация</h2>
            <form>
                <div class="user-box">
                    <input type="text" name="" required="" onChange={event => setPassword(event.target.value)} />
                        <label>Имя пользователя</label>
                </div>
                <div class="user-box">
                    <input type="password" name="" required="" onChange={event => setUsername(event.target.value)} />
                        <label>Пароль</label>
                </div>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Войти
                </a>
            </form>
        </div>
    )
}

export default Login