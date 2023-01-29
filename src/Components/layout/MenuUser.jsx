import React from "react";
import { Link } from "react-router-dom";

import styles from './menuuser.module.css'



function MenuUser() {
    return (
    <div className={styles.menuuserbox}>
        <Link to='/loginuser'>
        <div className={styles.mucard1}>
        </div>
        </Link>
        <Link to='/loginorder'>
        <div className={styles.mucard2}>
        </div>
        </Link>
        <Link to='/loginwish'>
        <div className={styles.mucard3}>
        </div>
        </Link>
    </div>
    )
}

export default MenuUser;