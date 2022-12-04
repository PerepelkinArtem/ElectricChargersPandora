import React, {useEffect} from 'react'

import styles from './Home.module.css'
import StatusBar from '../../components/StatusBar'
// import AuthContext from '../../context/AuthProvider'

export default function Home(props) {

const stationsData = props.props.result
console.log(stationsData)
// console.log(stationsData.map()) undefined

  // useEffect(() => {

  //   let message = 'один из двух запросов не выполнился - хер на руль ищи ошибку в запросе'
  //   //console.log('из Home stations:', props)

  // if (props.props){
  //   console.log(Object.keys(props.props))
  //   if (props.props.result) {
  //     message = `идентификатор станции ${props.props.result[0].id}`
  //   }
  // }
  
  // console.log(message)

  // }, [])
    
    return (
        <div className={styles.mainStation}>
            {stationsData && stationsData.map((item, index) => (
                <StatusBar 
                key={index}
                title={item.id}
                />
            )) }
            <StatusBar />
            <StatusBar />
            <StatusBar />
        </div>
    )
}