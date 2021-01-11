import React from "react"
import LoginButton from "../components/loginButton"
import TextInput from "../components/textInput"
import "./SignIn.css";
function SignIn() {
    return (
        <div className="signin-container">
            <div className="signin-box gradient">
                <p className="welcome">Seja bem-vindo</p>
                <label htmlFor="">E-mail</label>
                <TextInput type="text" />
                <label htmlFor="">Senha</label>
                <TextInput type="password" />
                <LoginButton>ENTRAR</LoginButton>
            </div>
        </div>
    )
}

export { SignIn }