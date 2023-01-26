import React from 'react'

import styles from './banneradm.module.css';
import ChangeAPForm from '../project/ChangeAPForm.jsx';
function BannerAdm() {
  return(
      <div className={styles.babox}>
        <div className={styles.mask}>
        </div>
        <div className={styles.bacontent}>
            <ChangeAPForm />
        </div>
      </div>
  )
}

export default BannerAdm