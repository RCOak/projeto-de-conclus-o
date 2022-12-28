import {Link} from 'react-router-dom'
import React from 'react'
import Container from './Container.js'

import styles from './Navbar.module.css'
import { BsFillPersonFill, BsBag, BsList, BsFillGeoAltFill, BsFillTelephoneFill, BsEnvelopeFill, BsSearch } from "react-icons/bs";

function Navbar() {
  return(
        <div>
          <div className={styles.unavbar}>
                <ul className={styles.list}>
                  <li className={styles.item}>
                  <span className={styles.icons}><BsFillGeoAltFill /></span><p>endereço</p>
                  </li>
                  <li className={styles.item}>
                  <span className={styles.icons}><BsFillTelephoneFill /></span><p>telefone</p>
                  </li>
                  <li className={styles.item}>
                  <span className={styles.icons}><BsEnvelopeFill /></span><p>email</p>
                  </li>
                  <li className={styles.itemb}>
                  <p><BsSearch /></p>
                  </li>
                </ul>           
          </div>
          <nav className={styles.navbar}>
            <Container>
              <div className={styles.logo}>
                <p>
                  <Link to='/'><img src='https://cdn.discordapp.com/attachments/596820253984555164/1057348548716408935/Dado-Vorpal-Marca.png' alt=''></img></Link>
                </p>
              </div>
              <div className={styles.menuicons}>
                <p className={styles.item}>
                  <Link to='/login'><p className={styles.ilogin}><BsFillPersonFill /></p></Link>
                </p>
                <p className={styles.item}>
                  <Link to='/Cart'><p className={styles.cart}><BsBag /></p></Link>
                </p>
                <p className={styles.item}>
                  <p className={styles.menu}><BsList /></p>
                </p>           
              </div>
            </Container>          
          </nav>
        </div>
  )
}

export default Navbar