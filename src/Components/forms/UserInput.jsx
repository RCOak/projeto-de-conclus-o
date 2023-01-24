import React from 'react'

import styles from './UserInput.module.css'


function UserInput({ type, name, placeholder, handleOnChange, value, label }) {
  return(
    <div className={styles.userinput}>
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

export default UserInput