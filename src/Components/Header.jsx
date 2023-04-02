import React from "react";
import logo from '../Assets/Logo/logo.png';
import './Header.css'

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" 
         />
        <h1>Sunil keep</h1>
      </div>
    </>
  )
}
export default Header;