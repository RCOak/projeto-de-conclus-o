import React from 'react'

import styles from './BotHome.module.css'
import CardBlog from './CardBlog.jsx'

function BotHome() {
  return(
    <div className={styles.bothome}>
        <div className={styles.bhtext}>
            <h1>Channel Releases</h1>
        </div>
        <div className={styles.bhlinha1}>
          <p> </p>
        </div>
        <div className={styles.bhvideo}>
        <iframe width="800" height="445" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div>
            <CardBlog />
            <CardBlog />
            <CardBlog />
            <CardBlog />
        </div>
        <div className={styles.bhbtn}>
          <button>SEE MORE</button>
        </div>
        <div className={styles.bhlinha}>
          <p> </p>
        </div>
    </div>
  )
}

export default BotHome