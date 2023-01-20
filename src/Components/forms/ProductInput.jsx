import React from 'react'

import styles from './ProductInput.module.css'


function ProductInput({ type, name, icon, placeholder, handleOnChange, value, text }) {
  return(
    <div className={styles.productform_control}>
        <label>{text}</label>
        <br />
        <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value} 
        />
        <span> {icon} </span>
        <br />
        <br />
    </div>
  )
}

export default ProductInput