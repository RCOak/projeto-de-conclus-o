import React from "react";
import {FaYoutube, FaInstagram, FaTwitch} from 'react-icons/fa'

import styles from './Footer.module.css'
import LogoFooter from '../images/LogoFooter.png'

function Footer() {
    return (
    <div>
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <img src={LogoFooter} alt=''></img>
            </div>
            <ul className={styles.social_list}>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaYoutube />
                </li>
                <li>
                    <FaTwitch />
                </li>
            </ul>
        </footer>
        <div className={styles.copy_right}>
            <p><span>Dado Vorpal</span> &copy; 2022</p>
        </div>
    </div>
    )
}

export default Footer;