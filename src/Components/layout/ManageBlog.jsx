import React from 'react'

import Admscroll from '../icons/Admscroll.png'
import AdmInfoHeader from './AdmInfoHeader.jsx';
import SubmitBtn2 from '../forms/SubmitBtn2.jsx';
import CardBlog2 from '../layout/CardBlog2.jsx';
import styles from './ManageBlog.module.css';


function ManageBlog() {
  return(
    <div className={styles.manageblogbox}>
        <AdmInfoHeader image={Admscroll} text1={"SCROLLS OF INSPIRATION"} text2={"MANAGE BLOG"} />
        <div className={styles.manageblogbtn}>
            <SubmitBtn2 text="Create Blog Post" />
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