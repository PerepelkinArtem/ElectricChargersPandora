import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import './statusBarDiagramm.css'

function StatusBarDiagramm({value}) {
    const percentage = 40;
    return (
        <div className='statusBarDiagramm'>
        <CircularProgressbar
            value={percentage}
            // text={`${percentage}%`}
            text={value}
            styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',
                // Text size
                textSize: '24px',
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 2.5,
                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',
                // Colors
                pathColor: `rgba(22, 108, 228, 1), ${percentage / 100})`,
                textColor: '#333333',
                trailColor: 'rgba(84, 86, 110, 0.1)',
                backgroundColor: '#3e98c7',
            })}
        />
        </div>
    )
}

export default StatusBarDiagramm