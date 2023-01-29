import React from 'react'
import {Link} from 'react-router-dom'

import { FaCaretRight } from "react-icons/fa";
import styles from './TopHome.module.css'


function TopHome() {
  return(
    <div>
      <Link to='/product'>
        <div className={styles.tophome}>
          <div className={styles.mask}>
          </div>
          <div className={styles.bannerhome}>
            <h3>
              Dragon of Multiverse
            </h3>
            <h1>
              Absolute Zero
            </h1>
            <h2>
              See More
            </h2>
          </div>
        </div>
      </Link>
      <div className={styles.thcontainer}>
        <Link to='/catalog'>
          <button className={styles.thcard1}>
            <p>Dices<FaCaretRight style={{ color:'#d3312b', position:'relative', top:'4px' }} /></p>
          </button>
        </Link>
        <Link to='/catalog'>
          <button className={styles.thcard2} style={{ margin:0 }}>
            <p>Accessories<FaCaretRight style={{ color:'#d3312b', position:'relative', top:'4px' }} /></p>
          </button>
        </Link>
        <Link to='/catalog'>
          <button className={styles.thcard3}>
            <p>Boxes and Bags<FaCaretRight style={{ color:'#d3312b', position:'relative', top:'4px' }} /></p>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default TopHome