import React from 'react';

import SubmitBtn2 from '../forms/SubmitBtn2.jsx';

import styles from './CartForm.module.css';


function CartForm() {
  return(
        <div className={styles.cartformbox}>
            <div className={styles.cartformtext}>
                <h1>Subtotal</h1>
                <br />
                <br />
                <h1>Shipping</h1>
                <br />
                <input type="checkbox" name="Flatrate" />
                Flat rate:
                <br />
                <input type="checkbox" name="Shipping" />
                Free Shipping:
                <br />
                <br />
                <br />
                <h1>Total</h1>
            </div>
            <div className={styles.cartformtext2}>
                <h1>$199</h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <p>$3</p>
                <br />
                <br />
                <h1>$202</h1>
            </div>
            <div>
                <div className={styles.cartlinha}>
                    <p> </p>
                </div>
                <div className={styles.cartlinha2}>
                    <p> </p>
                </div>
            </div>
            <div className={styles.cartformbtn}>
                <SubmitBtn2 text="Proceed Checkout" />
            </div>
        </div>
  )
}

export default CartForm