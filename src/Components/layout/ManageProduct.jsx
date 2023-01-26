import React from 'react'

import ProductBag from '../icons/ProductBag.png';
import AdmInfoHeader from './AdmInfoHeader.jsx';
import SubmitBtn2 from '../forms/SubmitBtn2.jsx';
import styles from './ManageProduct.module.css';
import ProductCard from './ProductCard.jsx';


function ManageProduct() {
  return(
    <div className={styles.manageproductbox}>
        <AdmInfoHeader image={ProductBag} text1={"BAG OF PRODUCTS"} text2={"PRODUCT MANAGE"} />
        <div className={styles.manageproductbtn}>
            <SubmitBtn2 text="CREATE NEW PRODUCT" />
        </div>
        <div className={styles.manageproductcard}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  )
}

export default ManageProduct