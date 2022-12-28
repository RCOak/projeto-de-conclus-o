import React from "react";
import {FaYoutube, FaInstagram, FaTwitch} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    return (
    <div>
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <img src='https://cdn.discordapp.com/attachments/596820253984555164/1057348548716408935/Dado-Vorpal-Marca.png' alt=''></img>
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
            <p className={styles.footercopyr}><span>Dado Vorpal</span> &copy; 2022</p>
        </div>
    </div>
    )
}

export default Footer;