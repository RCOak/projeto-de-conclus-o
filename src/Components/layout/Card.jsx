import React from "react";
import styles from "./Card.module.css"

import { BsBag } from "react-icons/bs";

function Card() {
    return (
    <div className={styles.item_container}>
        <div className={styles.topcard}>
            <img src="https://cdn.discordapp.com/attachments/596820253984555164/1057348349621174432/Dispel_June2022_Product_37.png" alt=""></img>
        </div>
        <div className={styles.botcard}>
            <p>Cod. 684126184</p>
            <h2>Nome produto</h2>
            <h4>Price</h4>
            <h3 className={styles.price}>$ 5.00</h3>
            <button className={styles.item_cart_btn}><BsBag /></button>
        </div>
    </div>
    )
}

export default Card;