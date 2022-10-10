import React from 'react'

import styles from './Home.module.css'
import Station from '../../components/Station'
import StatusBar from '../../components/StatusBar'

const Home = () => {
    return (
        <div className={styles.mainStation}>
            <Station />
            <StatusBar />
        </div>
    )
}

export default Home