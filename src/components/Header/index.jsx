import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'
import AuthContext from '../../context/AuthProvider'

const Header = () => {

    const { auth, setAuth } = useContext(AuthContext)
    
    return (
        <header>
            <div className="blueLine">
                <div className='pandoraLogo'>
                    <Link to='/stations'>
                        <img with={215} className="pandoraLogo" src="/img/PandoraLogo.svg" alt="PandoraLogo" />
                    </Link>
                </div>
                <div className='telnumber'>
                    <a href="tel:+78007001718">8 (800) 700-17-18 (горячая линия техподдержки)</a>
                </div>
                <div className="userArea">
                    <span>{auth.user ? `Привет, ${auth.user}` : 'Гость'}</span>
                    <Link to='/'>
                        <img with={25} height={25} className="userLogo" src="/img/user.svg" alt="UserLogo" />
                    </Link>
                    <Link to='/stations'>
                        <img with={25} height={25} className="stationLogo" src="/img/charging-station.png" alt="StationLogo" />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header