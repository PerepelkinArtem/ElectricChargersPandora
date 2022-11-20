import React from 'react'

import '../StatusBar.css'
import StatusBarButton from '../statusBarButton'
import StatusBarDiagramm from './statusBarDiagramm'

const StatusBarConnector = ({ connectorNumber, workingStatus }) => {
    return (
        <div className='statusBarConnector'>
            <div className='statusBarConnectorHeader'>
                <div className='statusBarConnectorHeader__connector'>
                    <img with={15} height={15} className='userLogo' src='/img/connector.svg' alt='connector' />
                    <span>Номер коннектора: {connectorNumber}</span>
                </div>
                <img with={15} height={15} className='userLogo' src={workingStatus} alt='workingStatus' />
            </div>
            <div className='statusBarConnectorWrapper'>
                <div className='statusBarConnectorInfo'>
                    <div className='statusBarConnectorInfo__dimension'>
                        <span>НАПРЯЖ</span>
                        <span>РАЗЪЕМ</span>
                        <span>СТАТУС</span>
                    </div>
                    <div className='statusBarConnectorInfo__value'>
                        <span>DC</span>
                        <span>CCS Combo 2</span>
                        <span>Availablie</span>
                    </div>
                </div>
                <div className='vertical-line'></div>
                <div className='statusBarDiagramm'>
                    <StatusBarDiagramm value={'220v'} />
                    <StatusBarDiagramm value={'40%'} />
                    <StatusBarDiagramm value={'140kW'} />
                </div>
            </div>
            <div className='transactionStatus'>
                <span>Последняя транзакция:</span>
                <span>ID <b>Available</b>Старт <b>0</b>  Стоп <b>100</b>  Причина <b>Powerloss</b></span>
            </div>
            <div className='statusBarButtons'>
                <StatusBarButton buttonName={'Старт'} />
                <StatusBarButton buttonName={'Разблокировать'} />
                <StatusBarButton buttonName={'Стоп'} />
            </div>
            <div className='line'></div>
        </div>
    )
}

export default StatusBarConnector