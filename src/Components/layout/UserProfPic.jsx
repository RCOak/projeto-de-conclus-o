import React from 'react'

import styles from './userprofpic.module.css'
import BUPerfil from '../images/BUPerfil.png'

function UserProfPic() {
  return(
    <div className={styles.uppcircle}>
        <img src={BUPerfil} alt="profile picture" />
    </div>
  )
}

export default UserProfPic