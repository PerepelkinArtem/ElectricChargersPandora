import React from 'react'

import './StatusBar.css'
import StatusBarButton from './statusBarButton'
import StatusBarDiagramm from './statusBarConnector/statusBarDiagramm'
import StatusBarConnector from './statusBarConnector'

const StatusBar = () => {
    return (
        <div className='statusBar'>
            <span className='statusBar__header'>Зарядная станция 107869544</span>
            <div className='statusBarStationInfo'>
                <span>Статус: Available</span>
                <span>Время подключения: 03.10.2022 8:53:53</span>
                <div className='statusBarButtons'>
                    <StatusBarButton buttonName={'Включить'} />
                    <StatusBarButton buttonName={'HardReset'} />
                    <StatusBarButton buttonName={'SoftReset'} />
                </div>
            </div>
            <StatusBarConnector />
            <StatusBarConnector />
        </div >
    )
}

export default StatusBar