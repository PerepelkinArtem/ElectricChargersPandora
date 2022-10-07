import React from 'react'

import './StatusBar.css'
import StatusBarButton from './statusBarButton'

const StatusBar = () => {
    return (
        <div className='statusBar'>
            <span>Зарядная станция 107869544</span>
            <div className='statusBarStationInfo'></div>
            <div className='statusBarConnector'>
                <span>Номер коннектора: 1</span>
                <div className="statusBarConnectorInfo">
                    <span>Напряжение:</span>
                    <span>Тип разъема:</span>
                    <span>Статус:</span>
                </div>
                <div className='statusBarButtons'>
                    <StatusBarButton itemname={1} />
                    <StatusBarButton itemname={'Стоп'} />
                    <StatusBarButton itemname={'Разблокировать'} />
                </div>
            </div>
        </div >
    )
}

export default StatusBar