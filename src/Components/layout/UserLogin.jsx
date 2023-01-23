import React from 'react'

import BanneUser from "./BanneUser.jsx"
import MenuUser from "./MenuUser.jsx"
import styles from './userlogin.module.css'


function UserLogin() {
  return(
    <div>
      <BanneUser />
      <MenuUser />
      <div className={styles.ulbox}>
        <div className={styles.formbox1}>
          componente 3
        </div>
        <div className='{styles.formbox2}'>
          componente 4
        </div>
      </div>
    </div>
  )
}

export default UserLogin