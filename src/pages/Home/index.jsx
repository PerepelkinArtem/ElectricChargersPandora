import React from 'react'

import styles from './Home.module.css'
import StatusBar from '../../components/StatusBar'
// import AuthContext from '../../context/AuthProvider'

const Home = (stations) => {
    console.log ('из Home stations:', stations)
    // Object.keys(stations).map(x => (console.log(x)))
    Object.entries(stations).map(x => (console.log(x)))

    return (
        <div className={styles.mainStation}>
            {Object.entries(stations).map(x =>(
                // <StatusBar 
                // title={x.}
                // />
                console.log(x[1].data)
                // <div>
                //     <h1>x.stations</h1>
                // </div>
            )) }
                {/* {Promise.all.stations.result.map((item, index) => (
                    <StatusBar
                        key={index}
                        // title={item.result.id}
                        // // price={item.price}
                        // imageUrl={item.imageUrl}
                        {...item}
                    />
                ))} */}
            <StatusBar />
            <StatusBar />
            <StatusBar />
        </div>
    )
}

export default Home