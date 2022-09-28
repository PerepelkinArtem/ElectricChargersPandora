import React from 'react'

import './Station.css'

const Station = () => {

    return <>
        <button className='TodoItem'>
            <span>СТАНЦИЯ №1</span>
            <div className='StatusStation'>
                <span>Индикация1</span>
                <span>Индикация2</span>
                <span>Индикация3</span>
            </div>
            <div className='StartStopButtons'>
                <div
                    className='btn completed'
                    onClick>
                    СТАРТ
                </div>
                {/* <div className={todo.completed ? 'done' : ''}>
                {todo.text}
            </div> */}
                <button className='btn unlock'
                    onClick>
                    ЗАБЛОКИРОВАТЬ
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