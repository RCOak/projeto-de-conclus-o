import React from 'react'

import styles from './TopHome.module.css'


function TopHome() {
  return(
    <div className={styles.tophome}>
        <div className={styles.mask}>
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
    </div>
  )
}

export default TopHome