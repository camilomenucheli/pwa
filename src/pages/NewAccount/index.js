import React from 'react'
import './styles.css'

export default function Login(){
    return(
        <div className="login-container">
            <img src="../assets/logo.png" alt="Ninjagram"/>
            <form className="login-form">
                <input placeholder="Digite seu nome de usuário ou email" />
                <input placeholder="Digite sua senha" />
                <button type="submit">Criar</button>
            </form>
        </div>
    )
}