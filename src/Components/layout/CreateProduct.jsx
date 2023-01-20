import React from 'react'

import styles from './CreateProduct.module.css'
import CreateProductForm from '../project/CreateProductForm.jsx'

function CreateProduct() {
  return(
    <div className={styles.loginbody}>
        <div className={styles.loginmask}>
        </div>
        <div className={styles.cnpbox}>
            <h1>
              Create a new product
            </h1>
          <CreateProductForm btnText="Submit" />
        </div>
    </div>
  )
}

export default CreateProduct