import React from 'react'

import BanneUser from "./BanneUser.jsx"
import MenuUser from "./MenuUser.jsx"
import styles from './userlogin.module.css'
import UserInfoForm from '../project/UserInfoForm.jsx'
import UserInfoHeader from '../layout/UserInfoHeader.jsx'
import UserInfoHeader2 from './UserInfoHeader2.jsx'
import UserInfoForm2 from '../project/UserInfoForm2.jsx'

function UserLogin({ btnText }) {
  return(
    <div>
      <BanneUser />
      <MenuUser />
      <div className={styles.ulbox}>
        <div className={styles.formbox1}>
          <UserInfoHeader />
          <UserInfoForm btnText="SAVE" />
        </div>
        <div className={styles.formbox2}>
          <UserInfoHeader2 />
          <UserInfoForm2 btnText="SAVE" />
        </div>
      </div>
    </div>
  )
}

export default UserLogin