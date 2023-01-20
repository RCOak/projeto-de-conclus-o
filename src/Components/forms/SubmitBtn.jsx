import React from 'react'

import styles from './SubmitBtn.module.css'

function SubmitBtn({ text }) {
  return(
    <div>
        <button className={styles.submitbutton}>{text}</button>
    </div>
  )
}

export default SubmitBtn