import React from 'react'

import styles from './Home.module.css'
import Station from '../../components/Station'

const Home = () => {
    return (
        <div className={styles.mainStation}>
            <Station />
            <Station />
            <Station />
        </div>
    )
}

export default Home