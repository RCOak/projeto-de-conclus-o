import React from 'react'

import './UserInfoForm2.css'
import UserInput from '../forms/UserInput.jsx'
import SubmitBtn from '../forms/SubmitBtn.jsx';
import UserInput2 from '../forms/UserInput2';
import UserInput3 from '../forms/UserInput3';

function UserInfoForm2({ btnText }) {
  return(
    <div>
            <form className="uiformbox">
                <div className="userinfform">
                    <div className="userinfform1">
                        <UserInput type="text" label='Full Name' name='fullnameuser' placeholder="User's Full Name"/>
                        <UserInput type="text" label='Email' name='usermail' placeholder="User's e-mail"/>
                    </div>
                    <div className="userinfform2">
                        <UserInput type="text" label='Address' name='useraddress' placeholder="User's Address" />
                        <UserInput type="text" label='Phone' name='userphone' placeholder="User's phone" />
                    </div>
                    <div className='userinfform3'>
                        <UserInput2 type="text" label='City' name='usercity' placeholder="User's City" />
                        <UserInput2 type="text" label='Zip Code' name='userzipcode' placeholder="User's Zip Code" />
                        <UserInput2 type="text" label='State' name='userstate' placeholder="User's State" />
                    </div>
                    <div className='userinfform4'>
                        <UserInput3 type="text" label='Country' name='usercountry' placeholder="User's Country" />
                    </div>
                </div>
                <div className='userinfbtn'>
                    <SubmitBtn text={btnText}/>
                </div>
            </form>
    </div>
  )
}

export default UserInfoForm2