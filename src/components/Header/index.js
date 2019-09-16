import React from 'react'
import './style.css'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className="main-header">
	    <img src={Logo} alt="logo"/>
    </header>
  )
}

export default Header

