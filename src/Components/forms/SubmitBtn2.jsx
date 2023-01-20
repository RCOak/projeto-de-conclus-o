import React from 'react'

import styles from './SubmitBtn2.module.css'

function SubmitBtn2({ text }) {
  return(
    <div>
        <button className={styles.submitbutton2}>{text}</button>
    </div>
  )
}

export default SubmitBtn2