import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {

    return (
        <header>
            <div className="blueLine">
                <a href="tel:+78007001718" >8 (800) 700-17-18 (горячая линия техподдержки)</a>
                <div className="userArea">
                    <span>Perepelkin Artem</span>
                    <Link to='/login'>
                        <img with={25} height={25} className="userLogo" src="/img/user.svg" alt="UserLogo" />
                    </Link>
                    <Link to='/'>
                        <img with={25} height={25} className="stationLogo" src="/img/charging-station-white.png" alt="StationLogo" />
                    </Link>
                </div>
            </div>
            <Link to='/'>
                <div className="headerLogo">
                    <img className="imgLogo" src="/img/logosticky-w.png" alt='LogoPandora' />
                </div>
            </Link>
        </header>
    )
}

export default Header