import React from 'react'

import styles from './CatalogForm.module.css'
import CheckBox from '../forms/CheckBox.jsx'
import SubmitBtn from '../forms/SubmitBtn.jsx'
import RangeInput from '../forms/RangeInput.jsx'

function CatalogForm() {
  return(
    <form className={styles.catalogformpage}>
        <h1>PRICE</h1>
        <RangeInput />
        <h1>CATEGORIES</h1>
        <div className={styles.catalogcheck}>
          <CheckBox checktext="Jumbo" name="Jumbo"/>
          <CheckBox checktext="Set of Dice" name="Set of Dice"/>
          <CheckBox checktext="Resin Dices" name="Resin Dices"/>
          <CheckBox checktext="Dice Box" name="Dice Box"/>
          <CheckBox checktext="Leather Bags" name="Leather Bags"/>
        </div>
          <SubmitBtn text="Confirm"/>
    </form>
  )
}

export default CatalogForm