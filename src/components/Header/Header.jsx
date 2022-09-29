import React from 'react'

import './Header.css'

const Header = () => {

    return (
        <header>
            <div className="blueLine">
                <a href="tel:+78007001718" >8 (800) 700-17-18 (горячая линия техподдержки)</a>
                <div className="userArea">
                    <span>Perepelkin Artem</span>
                    <img with={25} height={25} className="userLogo" src="/img/user.svg" alt="UserLogo" />
                </div>
            </div>
            <div className="headerLogo">
                <img className="imgLogo" src="/img/logosticky-w.png" alt='LogoPandora' />
            </div>
        </header>
    )
}

export default Header