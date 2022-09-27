import React from 'react'

import './Header.css'

const Header = () => {

    return (
        <header>
            <div className="blueLine">
            <a href="tel:+78007001718" >8 (800) 700-17-18 (горячая линия техподдержки)</a>
            </div>
            <div className="headerLogo">
                <img src="/img/logosticky-w.png" alt='LogoPandora' />
            </div>
        </header>
    )
}

export default Header