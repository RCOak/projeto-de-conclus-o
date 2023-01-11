import React from 'react'

import styles from './MidHome.module.css'
import Card from './Card.jsx'

function MidHome() {
  return(
    <div className={styles.midhome}>
        <div className={styles.mhtext}>
            <h1>Last Releases</h1>
        </div>
        <div className={styles.mhlinha}>
          <p> </p>
        </div>
        <div className={styles.mhcontainer}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <div className={styles.mhcontainer}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <div className={styles.mhbtn}>
          <button>SEE MORE</button>
        </div>
    </div>
  )
}

export default MidHome