import React from 'react'

import styles from './UserInput2.module.css'


function UserInput2({ type, name, placeholder, handleOnChange, value, label }) {
  return(
    <div className={styles.userinput2}>
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

export default UserInput2