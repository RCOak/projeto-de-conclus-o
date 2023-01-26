import React from 'react'

import styles from './ChangeAPForm.module.css'
import AdmProfPic from '../layout/AdmProfPic.jsx'
import ChangeAdmPicBtn from '../forms/ChangeAdmPicBtn.jsx'

function ChangeAPForm() {
  return(
        <div className={styles.capfbox}>
            <AdmProfPic />
            <div className={styles.capbset}>
            <ChangeAdmPicBtn />
            </div>
            <div className={styles.batext}>
              <h3>WELCOME BACK</h3>
              <h1>STORE</h1><h2>MASTER</h2>
            </div>
        </div>
  )
}

export default ChangeAPForm