import React from 'react'
import {Link} from 'react-router-dom'

import styles from './MidHome.module.css'
import Card from './Card.jsx'
import Btnhome from '../forms/Btnhome.jsx'

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
          <Link to='/catalog'><Btnhome text="SEE MORE" /></Link>
        </div>
    </div>
  )
}

export default MidHome