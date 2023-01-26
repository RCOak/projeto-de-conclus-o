import React from 'react'

import OrderAdm from '../icons/OrderAdm.svg';
import AdmInfoHeader from './AdmInfoHeader.jsx';
import styles from './ManageProduct.module.css';
import AdmOrderCard from './AdmOrderCard.jsx';


function ManageOrders() {
  return(
    <div className={styles.manageproductbox}>
        <AdmInfoHeader image={OrderAdm} text1={"SOLD MAGIC ITEMS"} text2={"RECENT ORDERS"} />
        <div className={styles.manageproductcard}>
            <AdmOrderCard />
            <AdmOrderCard />
            <AdmOrderCard />
        </div>
    </div>
  )
}

export default ManageOrders