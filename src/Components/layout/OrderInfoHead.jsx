import React from 'react'

import sword from '../icons/sword.png'
import styles from './OrderInfoHead.module.css'

function OrderInfoHeader() {
  return(
    <div>
        <div className={styles.swordfig}>
            <img src={sword} alt='sword' />
        </div>
        <div className={styles.oihtext}>
            <h1>CHARACTER SHEET</h1>
            <p>PROFILE AND CONTACT INFORMATION</p>
        </div>
        <div className={styles.oihlinha}>
          <p> </p>
        </div>
    </div>
  )
}

export default OrderInfoHeader