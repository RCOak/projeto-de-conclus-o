import React from "react";

import styles from "./PageProducts.module.css"
import DiceModel from "../images/DiceModel.png"
import SubmitBtn2 from "../forms/SubmitBtn2";

function PageProducts() {
    return (
    <div className={styles.productpagebox}>
        <div className={styles.productpageimage}>
            <img src={DiceModel} alt="DiceModel" />
        </div>
        <div className={styles.productpagetext}>
            <h3>Collection's Title</h3>
            <h1>Product's Name</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <h2>$199</h2>
            <SubmitBtn2 text="ADD TO THE CART" />
        </div>
    </div>
    )
}

export default PageProducts;

