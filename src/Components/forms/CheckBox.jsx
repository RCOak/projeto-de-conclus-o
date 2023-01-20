import React from 'react'

import styles from './CheckBox.module.css'

function CheckBox({ name, handleOnChange, checktext}) {
  return(
    <div className={styles.checkbox}>
        <input
            type="checkbox"
            name={name}
            onChange={handleOnChange}
        />
        <p>{checktext}</p>
    </div>
  )
}

export default CheckBox