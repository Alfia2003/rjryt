import React from 'react'
import Logo from "../assets/imgs/logo.png";
function Navbar() {
  return (
    <>
    <nav className="container flex">
      <div className="nav-logo">
        <a href="#"><img src={Logo} alt="logo"/></a>
      </div>
      <div className="nav-links flex">
        <a href="#" className="active">Home</a>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
        <a href="#">Sign Up</a>
        <a href="#">Sign In</a>
      </div>
    </nav>
    </>
  )
}

export default Navbar