import React from 'react'

import styles from './NoMatchRoute.module.css'

const NoMatchRoute = () => {
    return (
        <div className={styles.nomatchrouteMain}>
            <img src='../../img/nomatchroute.svg' alt='ничего не найдено картинка'/>
            <h2>
                <span>Ничего не найдено</span>
            </h2>
            <p>Страница отсутсвует</p>
        </div>
    )
}

export default NoMatchRoute