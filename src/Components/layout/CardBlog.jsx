import React from 'react'

import styles from './CardBlog.module.css'


function CardBlog() {
  return(
    <div className={styles.cardblog}>
        <div>
            <img src='../images/heroes-feast-featured.jpg' alt='heroes feast'></img>
        </div>
        <div>
            <h3>Take a Bite at the Feast of Heroes</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>by Davyd Barker - Nov 13, 2022</p>
        </div>
    </div>
  )
}

export default CardBlog