import React from "react";

import CartCard from "./CartCard.jsx";
import CartForm from "../project/CartForm.jsx";

import styles from "./CartPage.module.css";


function CartPage() {
    return (
    <div className={styles.cartbody}>
        <div className={styles.cartbodytext1}>
            <h1>Cart 0</h1>
            <button>CONTINUE SHOPPING</button>
            <CartCard />
            <CartCard />
            <CartCard />
        </div>
        <div className={styles.cartbody2}>
            <CartForm />
        </div>
    </div>
    )
}

export default CartPage;