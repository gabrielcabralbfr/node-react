import React, { useState } from "react"
import { useHistory } from 'react-router-dom';

import LoginButton from "../components/loginButton"
import TextInput from "../components/textInput"
import "./SignIn.css";

function SignIn() {
    const doSignIn = async () => {

        const requestOptions = {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        }

        try {
            const response: any = await (await fetch('http://localhost:3333/auth', requestOptions)).json()
            const token = response.token
            if (!token) return null
            return history.push('/home')
        } catch (error) {
            console.log(error);
            return null
        }

    }
    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const history = useHistory()

    return (
        <div className="signin-container">
            <div className="signin-box gradient">
                <p className="welcome">Seja bem-vindo</p>
                <label htmlFor="">E-mail</label>
                <TextInput
                    onChange={(event) => setCredentials({ ...credentials, email: event.target.value })}
                    type="text" />
                <label htmlFor="">Senha</label>
                <TextInput type="password"
                    onChange={(event) => setCredentials({ ...credentials, password: event.target.value })}

                />
                <LoginButton onClick={doSignIn}>ENTRAR</LoginButton>
            </div>
        </div>
    )
}

export { SignIn }