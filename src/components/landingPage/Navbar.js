import React from 'react'
import Logo from "../../assets/imgs/logo.png";
function Navbar() {
  return (
    <>
    <nav className="rjr_container rjr_flex rjr_nav">
      <div className="rjr_nav-logo">
        <a className="rjr_a" href="#"><img src={Logo} alt="logo"/></a>
      </div>
      <div className="rjr_nav-links rjr_flex">
        <a href="#" className="rjr_a rjr_active">Home</a>
        <a className="rjr_a" href="#">About</a>
        <a className="rjr_a" href="#">Contact Us</a>
        <a className="rjr_a" href="#">Sign Up</a>
        <a className="rjr_a" href="#">Sign In</a>
      </div>
    </nav>
    </>
  )
}

export default Navbar