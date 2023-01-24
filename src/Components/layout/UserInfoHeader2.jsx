import React from 'react'

import oldmap from '../icons/oldmap.svg'
import styles from './UserInfoHeader2.module.css'

function UserInfoHeader2() {
  return(
    <div>
        <div className={styles.swordsmanfig}>
            <img src={oldmap} alt='oldmap' />
        </div>
        <div className={styles.uihtext2}>
            <h1>STRONGHOLD DETAILS</h1>
            <p>ADDRESS AND SHIPPING INFORMATION</p>
        </div>
        <div className={styles.uihlinha3}>
          <p> </p>
        </div>
    </div>
  )
}

export default UserInfoHeader2