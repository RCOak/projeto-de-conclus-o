import React from "react";

import styles from './menucard.module.css'


function MenuCard({ cardimg, cardtitle }) {

    return (
    <div className={styles.menucard} style={{ background_image: `url(../images/${cardimg}.png)` }}>
        <div className={styles.menucardtext}>
            <p>{cardtitle}</p>
        </div>
    </div>
    )
}

export default MenuCard;