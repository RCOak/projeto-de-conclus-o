import React from 'react'

import styles from './banneuser.module.css'
import ChangePPForm from '../project/ChangePPForm.jsx'
function BanneUser() {
  return(
      <div className={styles.bubox}>
        <div className={styles.mask}>
        </div>
        <div className={styles.bucontent}>
            <ChangePPForm />
        </div>
      </div>
  )
}

export default BanneUser