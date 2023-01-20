import React from 'react'

import styles from './LgInput.module.css'


function LgInput({ type, name, placeholder, handleOnChange, value, icon }) {
  return(
    <div className={styles.form_control}>
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

export default LgInput