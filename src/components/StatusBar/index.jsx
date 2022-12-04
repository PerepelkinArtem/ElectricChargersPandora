import React from 'react'

import './StatusBar.css'
import StatusBarButton from './statusBarButton'
import StatusBarConnector from './statusBarConnector'

const StatusBar = ({ title, connectorsID }) => {

    return (
        <div className='statusBar'>
            <span className='statusBar__header'>Зарядная станция {title}</span>
            <div className='statusBarStationInfo'>
                <span>Статус: Available</span>
                <span>Время подключения: 03.10.2022 8:53:53</span>
                <div className='statusBarButtons'>
                    <StatusBarButton buttonName={'Включить'} />
                    <StatusBarButton buttonName={'HardReset'} />
                    <StatusBarButton buttonName={'SoftReset'} />
                </div>
            </div>
            {connectorsID && connectorsID.map((item, index) => (
                <StatusBarConnector
                    key={index}
                    connectorNumber={item.number}
                    voltage_type={item.voltage_type.name}
                />
            ))}
            <StatusBarConnector connectorNumber={1} workingStatus={'/img/workingStatus.svg'} />
            <StatusBarConnector connectorNumber={2} workingStatus={'/img/unworkingStatus.svg'} />
        </div >
    )
}

export default StatusBar