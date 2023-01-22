import React from 'react'

import styles from './ChangePPForm.module.css'
import UserProfPic from '../layout/UserProfPic.jsx'
import ChangeProfPicBtn from '../forms/ChangeProfPicBtn.jsx'

function ChangePPForm() {
  return(
        <div className={styles.cppfbox}>
            <UserProfPic />
            <div className={styles.cppbset}>
            <ChangeProfPicBtn />
            </div>
            <div className={styles.butext}>
              <h2>WELCOME BACK</h2>
              <h1>ADVENTURER</h1>
            </div>
        </div>
  )
}

export default ChangePPForm