import React from 'react'

import styles from './CardBlog.module.css'
import heroes_feast_featured from '../images/heroes_feast_featured.jpg'

function CardBlog() {
  return(
    <div className={styles.cardblog}>
        <div className={styles.cbimg}>
            <img src={heroes_feast_featured} alt='heroes feast'></img>
        </div>
        <div className={styles.cbtext}>
            <h3>Take a Bite at the Feast of Heroes</h3>
            <p style={{fontSize: "small"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p style={{fontSize: "x-small"}}>by Davyd Barker - Nov 13, 2022</p>
        </div>
    </div>
  )
}

export default CardBlog