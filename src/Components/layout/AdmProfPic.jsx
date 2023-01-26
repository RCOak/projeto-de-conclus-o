import React from 'react'

import styles from './userprofpic.module.css'
import AdmPic from '../images/AdmPic.png'

function AdmProfPic() {
  return(
    <div className={styles.uppcircle}>
        <img src={AdmPic} alt="profile picture" />
    </div>
  )
}

export default AdmProfPic