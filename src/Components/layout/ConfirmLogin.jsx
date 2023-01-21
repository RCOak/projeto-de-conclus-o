import React from 'react'
import {Link} from 'react-router-dom'

import styles from './ConfirmLogin.module.css'
import LogoFooter from '../images/LogoFooter.png'


function ConfirmLogin() {
  return(
    <div className={styles.loginbody}>
        <div className={styles.loginmask}>
        </div>
        <div className={styles.clbox}>
            <div className={styles.cllogo}>
              <img src={LogoFooter} alt='logo' />
            </div>  
            <div className={styles.cltext}>
              <h1>You're almost there!</h1>
              <p>Now we just need to verify your email. A code was sent to <strong>'yourmail@you.com click the link to confirm your account.</strong></p>
            </div>
            <button><Link to='/'>RETURN TO HOME PAGE</Link></button>
        </div>
    </div>
  )
}

export default ConfirmLogin