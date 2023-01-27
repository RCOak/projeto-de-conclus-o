import React from 'react'

import styles from './Catalog.module.css'
import Card from './Card.jsx'

function Catalog() {
  return(
    <div className={styles.midhome}>
        <div className={styles.mhcontainer}>
            <Card />
            <Card />
            <Card />
        </div>
        <div className={styles.mhcontainer}>
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

export default Catalog