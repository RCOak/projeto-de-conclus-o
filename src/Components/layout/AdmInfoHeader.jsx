import React from 'react'


import styles from './AdmInfoHeader.module.css'

function AdmInfoHeader({ image, text1, text2 }) {
  return(
    <div>
        <div className={styles.scrollfig}>
            <img src={image} alt='Icon' />
        </div>
        <div className={styles.aihtext}>
            <h1>{text1}</h1>
            <p>{text2}</p>
        </div>
        <div className={styles.aihlinha}>
          <p> </p>
        </div>
    </div>
  )
}

export default AdmInfoHeader