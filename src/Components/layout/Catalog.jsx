import React from 'react'

import styles from './Catalog.module.css'
import Card from './Card.jsx'
import CatalogForm from '../project/CatalogForm.jsx'

function Catalog() {
  return(
    <div className={styles.catalogpage}>
      <div className={styles.catalogmenu}>
        <h1>Filter</h1>
        <div className={styles.cataloglinha}>
          <p> </p>
        </div>
        <CatalogForm />
      </div>
      <div className={styles.catalogcontainer}>
        <Card />
        <Card />
        <Card />
      </div>
      <div className={styles.catalogcontainer2}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Catalog