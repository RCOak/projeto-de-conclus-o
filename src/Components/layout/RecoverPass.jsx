import React from 'react'
import {Link} from 'react-router-dom'

import styles from './RecoverPass.module.css'
import LogoFooter from '../images/LogoFooter.png'
import PassRecoverForm from '../project/PassRecoverForm.jsx'


function ConfirmLogin({ btnText }) {
  return(
    <div className={styles.loginbody}>
        <div className={styles.loginmask}>
        </div>
        <div className={styles.clbox}>
            <div className={styles.cllogo}>
              <img src={LogoFooter} alt='logo' />
            </div>  
            <div className={styles.cltext}>
              <h1>Forgot your password?</h1>
              <p>We'll send you an email with access to change your password</p>
            </div>
            <PassRecoverForm btnText="SEND" />
        </div>
    </div>
  )
}

export default ConfirmLogin