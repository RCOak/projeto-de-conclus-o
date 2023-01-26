import React from 'react'

import styles from './TopHome.module.css'


function TopHome() {
  return(
    <div>
      <div className={styles.tophome}>
          <div className={styles.mask}>
          </div>
          <a href=''>
              <h3>
                Dragon of Multiverse
              </h3>
              <h1>
                Absolute Zero
              </h1>
              <h2>
                See More
              </h2>
            </a>
      </div>
      <div className={styles.thcontainer}>
        <div className={styles.thcard1}>
          <p>Dices</p>
        </div>
        <div className={styles.thcard2}>
          <p>Accessories</p>
        </div>
        <div className={styles.thcard3}>
          <p>Boxes and Bags</p>
        </div>
      </div>
    </div>
  )
}

export default TopHome