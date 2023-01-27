import React from "react";

import styles from "./CartCard.module.css";
import dado3 from "../images/dado3.png"
import SubmitBtn from "../forms/SubmitBtn.jsx";
import { FaPen, FaTrashAlt } from "react-icons/fa";



function CartCard() {
    return (
    <div className={styles.cartcardbox}>
        <div>
            <div className={styles.cartcardimg}>
                <img src={dado3} alt="dado"/>
            </div>
            <div className={styles.cartcardtext1}>
                <p>Cod. 31591</p>
                <h1>Set of dices - White Dragon Collection</h1>
                <div className={styles.cartcardtext2}>
                <h2><strong>Price:</strong></h2>
                <h3>$199</h3>
                </div>
                <div className={styles.cartcardtext3}>
                <h2><strong>Stock:</strong></h2>
                <h3>5</h3>
                </div>
                <div className={styles.cartcardbtns}>
                    <SubmitBtn text="HIDE PRODUCT" />
                    <div className={styles.cartcardbtnsicon}>
                        <FaPen />
                    </div>
                    <div className={styles.cartcardbtnsicon2}>
                        <FaTrashAlt />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CartCard;