import React from 'react'

import './Station.css'

const Station = () => {

    return <>
        <button className='station'>
            <span>СТАНЦИЯ №1</span>
            <div className='StatusStation'>
                <span>Индикация1</span>
                <span>Индикация2</span>
                <span>Индикация3</span>
            </div>
            <div className='StartStopButtons'>
                <button
                    className='btn completed'
                    onClick>
                    СТАРТ
                </button>
                <button className='btn unlock'
                    onClick>
                    РАЗБЛОКИРОВАТЬ
                </button>
                <button className='btn remove'
                    onClick>
                    СТОП
                </button>
            </div>
            <div className=''>

            </div>
        </button>
    </>
}

export default Station