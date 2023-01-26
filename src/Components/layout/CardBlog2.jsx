import React from 'react'

import styles from './CardBlog2.module.css'
import heroes_feast_featured from '../images/heroes_feast_featured.jpg'
import SubmitBtn from '../forms/SubmitBtn.jsx'

function CardBlog2() {
  return(
    <div className={styles.cardblog2}>
        <div className={styles.cb2img}>
            <img src={heroes_feast_featured} alt='heroes feast'></img>
        </div>
        <div className={styles.cb2text}>
            <h3>Take a Bite at the Feast of Heroes</h3>
            <p style={{fontSize: "small"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p style={{fontSize: "x-small"}}>by Davyd Barker - Nov 13, 2022</p>
            <div className={styles.cb2btn}>
            <SubmitBtn text='Delete' />
            </div>
        </div>
    </div>
  )
}

export default CardBlog2