import React from "react";

import styles from "./CNBlog.module.css"

function NewBlog() {
    return (
    <div className={styles.loginbody}>
        <div className={styles.loginmask}>
        </div>
        <div className={styles.cnblogbox}>
            <div className={styles.cnblogtext}>
              <h1>Let's make your account</h1>
              <p>Enter your data and confirm your data and roll your attributes!</p>
            </div>
        </div>
    </div>
    )
}

export default NewBlog;