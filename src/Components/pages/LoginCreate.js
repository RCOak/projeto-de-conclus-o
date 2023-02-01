import React from "react";
import { useNavigate } from 'react-router-dom'

import CreateLogin from "../layout/CreateLogin.jsx"
import CreateLgForm from "../project/CreateLgForm.jsx";
import './LoginCreate.css'


function LoginCreate() {

    const history = useNavigate()

    function createUser(user) {

        fetch('https://3001-rcoak-projetodeconclus-shrbdhq0zw6.ws-eu84.gitpod.io/register', {
            method: 'POST',
            mode: "cors",
            headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            },
            body: JSON.stringify(user)
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            history('/loginconfirm')
        })
        .catch((err) => console.log(err))
    }

    return (
    <div>
        <CreateLogin hSubmit={createUser} />
    </div>
    )
}

export default LoginCreate;