import React from 'react'

import './statusBarButton.css'

const StatusBarButton = ({buttonName}) => {
    return (
        <button className='mainButton'>
            {buttonName}
        </button>
    )
}

export default StatusBarButton