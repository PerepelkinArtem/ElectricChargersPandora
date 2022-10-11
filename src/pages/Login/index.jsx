import React from 'react'
// import axios from 'axios'

import './Login.css'

// const loginAPI = 'http://web1.pandora.develop:5003/api/login'
// const getStationsAPI = 'http://web1.pandora.develop:5003/api/v1/getstations'

const Login = () => {

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    // useEffect(() => {
    //     async function logIn() {
    //         const response = await axios.post({
    //             method: 'post',
    //             url: loginAPI,
    //             data: {
    //                 "login": "a.perepelkin",
    //                 "password": "3f86ou"
    //             }
    //         });
    // //setTitle(response.data.title);
    //         console.log(response);
    //     }
    //     logIn();
    // },[])

// // Не работает:
//     async function logInAndGetStations() {
//         try {
//             const logIn = await axios.post({
//                 method: 'post',
//                 url: 'http://web1.pandora.develop:5003/api/login',
//                 data: {
//                     "login": "a.perepelkin",
//                     "password": "3f86ou"
//                 }
//             });
//             const getStation = await axios.get(getStationsAPI);
//             console.log('login', logIn);
//             console.log('getStation', getStation);

//         } catch (e) {
//             console.log(e);
//         } finally {
//             console.log('finally');
//         }

// }
// logInAndGetStations();

    // working code for post!!!!!!!!!!!!!!!!!!!!
    // const body = {
    //     "login": "a.perepelkin",
    //     "password": "3f86ou"
    // }
    // const body = {
    //     "login": username,
    //     "password": password
    // }

    // // ------------
    //     async function logIn() {
    //         const res = await axios({
    //             method: 'post',
    //             url: 'http://web1.pandora.develop:5003/api/login',
    //             data: {
    //                 "login": "a.perepelkin",
    //                 "password": "3f86ou"
    //             }
    //         })
    //         return res;
    // //         -------------
    //             // .then(function (response) {
    //             //     console.log(response);

    //             // })
    //             // .catch(function (error) {
    //             //     console.log(error);
    //             // });
// -----  
// }
// -----
    //     async function getStation() {
    //         const res = await axios.get('http://web1.pandora.develop:5003/api/v1/getstations')
    //         return res;
    //         // .then(function (response) {
    //         //     console.log(response);
    //         // })
    //         // .catch(function (error) {
    //         //     console.log(error);
    //         // });
    //     }

    // //     ------------
    //     async function go() {
    //         let loginAccess = await logIn();
    //         console.log(loginAccess);
    //         let stationAccess = await getStation();
    //         console.log(stationAccess);
    //     }

    // go()

    // ------------

    // async function f1() {
    //     const res = await fetch(loginAPI);
    //     return res();
    //     // .then(data => {
    //     //     return data.text()
    //     // })
    //     // .then(data => {
    //     //     console.log(data);
    //     // });
    // }

    // async function f2() {
    //     const res = await fetch(getStationsAPI)
    //     return res();
    // }

    //  async function example() {
    //     let a = await f1();
    //     console.log(a);
    //     let b = await f2();
    //     console.log(b);
    // }

    // example();


    // working code for get
    // axios.get('https://622072c8ce99a7de1959cf52.mockapi.io/items')
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });

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
                    <input type="text" name="" required="" onChange={event => (event.target.value)} />
                    {/* <input type="text" name="" required="" onChange={event => setUsername(event.target.value)} /> */}
                    <label>Имя пользователя</label>
                </div>
                <div className="user-box">
                    <input type="password" name="" required="" onChange={event =>(event.target.value)} />
                    {/* <input type="password" name="" required="" onChange={event => setPassword(event.target.value)} /> */}
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