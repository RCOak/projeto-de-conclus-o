import React from 'react'

import BanneUser from "./BanneUser.jsx"
import MenuUser from "./MenuUser.jsx"
import MyOrderCard from './MyOrderCard.jsx'
import OrderInfoHeader from './OrderInfoHead.jsx'
import styles from './orderlogin.module.css'


function OrderLogin() {
  return(
    <div>
      <BanneUser />
      <MenuUser />
      <div className={styles.olbox}>
        <div className={styles.orderbox}>
            <OrderInfoHeader />
            <MyOrderCard />
            <br />
            <MyOrderCard />
        </div>
      </div>
    </div>
  )
}

export default OrderLogin