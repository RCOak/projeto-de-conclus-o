import React from 'react'

import styles from './ProductDescription.module.css'


function ProductDescription({ type, name, placeholder, handleOnChange, value, icon, text }) {
       
    return(
          <div className={styles.descriptionform_control}>
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
          </div>
        )
      }
      


export default ProductDescription
