import React from 'react'

import styles from './UserInput3.module.css'


function UserInput3({ type, name, placeholder, handleOnChange, value, label }) {
  return(
    <div className={styles.userinput3}>
        <label>{label}</label>
        <br />
        <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value} 
        />
    </div>
  )
}

export default UserInput3