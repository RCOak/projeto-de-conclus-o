import React from 'react'
import { Link } from 'react-router-dom';

import Admscroll from '../icons/Admscroll.png'
import AdmInfoHeader from './AdmInfoHeader.jsx';
import CardBlog2 from '../layout/CardBlog2.jsx';
import styles from './ManageBlog.module.css';


function ManageBlog() {
  return(
    <div className={styles.manageblogbox}>
        <AdmInfoHeader image={Admscroll} text1={"SCROLLS OF INSPIRATION"} text2={"MANAGE BLOG"} />
        <div className={styles.manageblogbtn}>
          <Link to='/nwblog'>
            <button className={styles.createblogbtn}>Create Blog Post</button>
          </Link>
        </div>
        <div className={styles.manageblogcard}>
            <CardBlog2 />
            <CardBlog2 />
            <CardBlog2 />
        </div>
    </div>
  )
}

export default ManageBlog