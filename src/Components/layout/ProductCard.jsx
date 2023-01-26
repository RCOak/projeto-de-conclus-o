import React from "react";

import styles from "./OrderCard.module.css";
import dado3 from "../images/dado3.png"
import SubmitBtn from "../forms/SubmitBtn.jsx";
import { FaPen, FaTrashAlt } from "react-icons/fa";



function ProductCard() {
    return (
    <div className={styles.aocardbox}>
        <div>
            <div className={styles.aocimg}>
                <img src={dado3} alt="dado"/>
            </div>
            <div className={styles.aoctext}>
                <p>Cod. 31591</p>
                <h1>Set of dices - White Dragon Collection</h1>
                <div className={styles.aoctext2}>
                <h2><strong>Price:</strong></h2>
                <h3>$199</h3>
                </div>
                <div className={styles.aoctext3}>
                <h2><strong>Stock:</strong></h2>
                <h3>5</h3>
                </div>
                <div className={styles.aocbtns}>
                    <SubmitBtn text="HIDE PRODUCT" />
                    <div className={styles.aocbtnsicon}>
                        <FaPen />
                    </div>
                    <div className={styles.aocbtnsicon2}>
                        <FaTrashAlt />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProductCard;