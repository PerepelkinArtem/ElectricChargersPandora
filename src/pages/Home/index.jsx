import React from 'react'

import styles from './Home.module.css'
import StatusBar from '../../components/StatusBar'
// import AuthContext from '../../context/AuthProvider'

const Home = () => {

    // const { auth, setAuth } = useContext(AuthContext)

    return (
        <div className={styles.mainStation}>
            <StatusBar />
            <StatusBar />
            <StatusBar />
            {/* <div>
                {auth.map((item, index) => (
                    <Card
                        key={index}
                        // title={item.title}
                        // price={item.price}
                        // imageUrl={item.imageUrl}
                        favorited={true}
                        onFavorite={onAddToFavories}
                        {...item}
                    />
                ))}
            </div> */}
        </div>
    )
}

export default Home