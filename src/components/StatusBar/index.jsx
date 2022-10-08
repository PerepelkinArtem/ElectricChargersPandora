import React from 'react'

import './StatusBar.css'
import StatusBarButton from './statusBarButton'

const StatusBar = () => {
    return (
        <div className='statusBar'>
            <span>Зарядная станция 107869544</span>
            <div className='statusBarStationInfo'>
                <span>Статус: Available</span>
                <span>Время подключения: 03.10.2022 8:53:53</span>
            </div>
            <div className='statusBarConnector'>
                <div className='statusBarConnectorHeader'>
                    <div className='statusBarConnectorHeader__connector'>
                        <img with={15} height={15} className='userLogo' src='/img/connector.svg' alt='connector picture' />
                        <span>Номер коннектора: 1</span>
                    </div>
                    <img with={15} height={15} className='userLogo' src='/img/workingStatus.png' alt='workingStatis' />
                </div>
                <div className='statusBarConnectorInfo'>
                    <div className='statusBarConnectorInfo__dimension'>
                        <span>Напряжение:</span>
                        <span>Тип разъема:</span>
                    </div>
                    <div className='statusBarConnectorInfo__value'>
                        <span>DC</span>
                        <span>CCS Combo 2</span>
                    </div>
                </div>
                <div className='diagramm'>
                    
                </div>
                <div className='statusBarButtons'>
                    <StatusBarButton name={1} />
                    <StatusBarButton name={'Стоп'} />
                    <StatusBarButton name={'Разблокировать'} />
                </div>
            </div>
        </div >
    )
}

export default StatusBar