import React from 'react'

import swordsman from '../icons/swordsman.svg'
import styles from './UserInfoHeader.module.css'

function UserInfoHeader() {
  return(
    <div>
        <div className={styles.swordsmanfig}>
            <img src={swordsman} alt='swordsman' />
        </div>
        <div className={styles.uihtext}>
            <h1>CHARACTER SHEET</h1>
            <p>PROFILE AND CONTACT INFORMATION</p>
        </div>
        <div className={styles.uihlinha}>
          <p> </p>
        </div>
        <div className={styles.uihlinha2}>
          <p> </p>
        </div>
    </div>
  )
}

export default UserInfoHeader