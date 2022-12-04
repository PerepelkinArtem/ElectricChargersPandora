import React, {useEffect} from 'react'

import styles from './Home.module.css'
import StatusBar from '../../components/StatusBar'
// import AuthContext from '../../context/AuthProvider'

export default function Home(props) {

const stationsData = props.props.result
console.log(stationsData)
    
    return (
        <div className={styles.mainStation}>
            {stationsData && stationsData.map((item, index) => (
                <StatusBar 
                key={index}
                title={item.id}
                connectorsID={item.connectors}
                />
            )) }
        </div>
    )
}