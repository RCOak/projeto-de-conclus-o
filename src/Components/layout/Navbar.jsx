import {Link} from 'react-router-dom'
import React from 'react'
import Container from './Container.js'

import styles from './Navbar.module.css'
import LogoDV from '../images/LogoDV.png'
import MenuDado from '../icons/MenuDado.svg'

import { BsFillPersonFill, BsBag, BsFillGeoAltFill, BsFillTelephoneFill, BsEnvelopeFill, BsSearch } from "react-icons/bs";

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
                </ul>           
          </div>
          <nav className={styles.navbar}>
            <Container>
              <div className={styles.logo}>
                <p>
                  <Link to='/'><img src={LogoDV} alt=''></img></Link>
                </p>
              </div>
              <div className={styles.menuicons}>
                <p className={styles.item}>
                  <Link to='/login'><p className={styles.ilogin}><BsFillPersonFill /></p></Link>
                </p>
                <p className={styles.item}>
                  <Link to='/Cart'><p className={styles.cart}><BsBag /></p></Link>
                </p>
                <div className={styles.itemmenu}>
                  <img className={styles.menu} src={MenuDado} alt='' />
                  <div className={styles.itemmenu_content}>
                    <Link to='/catalog'>DICES</Link>
                    <br></br>
                    <br></br>
                    <Link to='/catalog'>ACCESSORIES</Link>
                    <br></br>
                    <br></br>
                    <Link to='/catalog'>BOXES AND BAGS</Link>
                    <br></br>
                    <br></br>
                    <Link to='/'>ADVENTURER'S JOURNAL</Link>
                  </div>
                </div>           
              </div>
            </Container>          
          </nav>
        </div>
  )
}

export default Navbar