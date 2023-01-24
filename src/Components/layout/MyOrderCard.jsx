import React from "react";

import styles from "./MyOrderCard.module.css";
import dado3 from "../images/dado3.png"



function MyOrderCard() {
    return (
    <div className={styles.mocardbox}>
        <div>
            <div className={styles.octext1}>
                <h3><strong>ORDER PLACED</strong></h3>
                <p>JANUARY 10, 2023</p>
            </div>
            <div className={styles.octext2}>
                <h3><strong>TOTAL</strong></h3>
                <p>$199</p>
            </div>
            <div className={styles.octext3}>
                <h3><strong>SHIP TO</strong></h3>
                <p>Client Name</p>
            </div>
            <div className={styles.octext4}>
                <h3><strong>ORDER "n"</strong></h3>
                <p>Confirmed</p>
            </div>
        </div>
        <div className={styles.oclinha}>
          <p> </p>
        </div>
        <div>
            <div className={styles.ocimg}>
                <img src={dado3} alt="dado"/>
            </div>
            <div className={styles.octext5}>
                <p>Cod. 31591</p>
                <h2>Set of dices - White Dragon Collection</h2>
                <h3>$199</h3>
                <button>BUY IT AGAIN</button>
            </div>
        </div>
    </div>
    )
}

export default MyOrderCard;