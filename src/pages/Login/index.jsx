import React, {useState} from 'react'
import axios from 'axios'

import './Login.css'

const Login = () => {

// const baseUrl = 'http://web1.pandora.develop:5003/api/login';

// axios.post('http://web1.pandora.develop:5003/api/login', {
//     firstName: 'a.perepelkin',
//     lastName: '3f86ou'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });



// // working code for post!!!!!!!!!!!!!!!!!!!!
const body = {
    "login": "a.perepelkin",
    "password": "3f86ou"
  }

axios({
    method: 'post',
    url: 'http://web1.pandora.develop:5003/api/login',
    data: body
})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});


// // working code for get
//   axios.get('https://622072c8ce99a7de1959cf52.mockapi.io/items')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // (async () => {
    //     const response = await fetch('http://web1.pandora.develop:5003/api/login', {
    //         method: 'POST',
    //         headers: {
    //             authorization: '1qazxsw2',
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ name: 'Андрей' })
    //     });

    //     if (!response.ok) {
    //         console.error('Запрос не удался');
    //         return;
    //     }

    //     const data = await response.json();
    //     console.log(data);
    // })();

    return (
        <div className="login-box">
            <h2>Аутентификация</h2>
            <form>
                <div className="user-box">
                    <input type="text" name="" required="" onChange={event => setPassword(event.target.value)} />
                        <label>Имя пользователя</label>
                </div>
                <div className="user-box">
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