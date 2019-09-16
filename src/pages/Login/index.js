import React from 'react'
import './styles.css'
import Logo from '../../assets/logo.png'

export default function Login(){
    return(
        <div className="login-container">
            <form className="login-form">
                <img src={Logo} alt="Ninjagram"/>
                <input placeholder="Usuário ou  endereço de email" />
                <input placeholder="Senha" />
                <button type="submit">Entrar</button>
                <p>Novo por aqui? Criar conta.</p>
            </form>
        </div>
    )
}