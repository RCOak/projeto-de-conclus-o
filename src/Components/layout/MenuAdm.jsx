import React from "react";
import { Link } from "react-router-dom";

import styles from './menuadm.module.css'



function MenuAdm() {
    return (
    <div className={styles.menuadmbox}>
        <Link to='/loginadm'>
            <div className={styles.macard1}>
            </div>
        </Link>
        <Link to='/productsadm'>
            <div className={styles.macard2}>
            </div>
        </Link>
        <Link to='/ordersadm'>
            <div className={styles.macard3}>
            </div>
        </Link>
    </div>
    )
}

export default MenuAdm;