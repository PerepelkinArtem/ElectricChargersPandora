import React from 'react'

import styles from './Home.module.css'
import StatusBar from '../../components/StatusBar'

const Home = () => {
    return (
        <div className={styles.mainStation}>
            <StatusBar />
            <StatusBar />
            <StatusBar />
        </div>
    )
}

export default Home