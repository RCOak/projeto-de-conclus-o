import React from 'react'
import {Link} from 'react-router-dom'

import styles from './PassRecoverForm.module.css'
import { BsFillPersonFill } from "react-icons/bs";
import LgInput from '../forms/LgInput.jsx'
import SubmitBtn from '../forms/SubmitBtn.jsx';

function PassRecoverForm({ btnText }) {
  return(
    <div>
            <form className={styles.prform}>
                <LgInput type="text" name='loginUser' placeholder='Enter Username or e-mail' icon={<BsFillPersonFill />} />
                <div className={styles.btns}>
                    <button className={styles.dhabtn}>
                    <Link to='/login'>BACK</Link>
                    </button>
                    <SubmitBtn text={btnText} />
                </div>
            </form>
    </div>
  )
}

export default PassRecoverForm