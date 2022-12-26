import {Link} from 'react-router-dom'
import React from 'react'
import Container from './Container.js'

import styles from './Navbar.module.css'

function Navbar() {
  return(
        <nav className={styles.navbar}>
          <Container>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link to='/'>Home</Link>
              </li>
              <li className={styles.item}>
                <Link to='/login'>Login</Link>
              </li>
            </ul>           
          </Container>          
        </nav>
  )
}

export default Navbar