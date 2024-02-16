import React from 'react'
import Element from "../assets/imgs/element.png";
import Ellipse from "../assets/imgs/Ellipse 8.png";
import T from "../assets/imgs/T.png";
import Trafalgar from "../assets/imgs/Trafalgar.png";
function Footer() {
  return (
    <section className="footer">
    <img className="footer-pattern-bottom" src={Element} alt="pattern"/>
    <div className="footer-wrapper flex">
      <div className="footer-info-wrapper">
        <span className="logo">
          <img className="logo-circle" src={Ellipse} alt="trafalgar-logo"/>
          <img className="logo-letter" src={T} alt="trafalgar-logo"/>
          <img className="logo-text" src={Trafalgar} alt="trafalgar-logo"/>
        </span>
        <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
          for everyone</p>
        <div className="copy-rights">
          <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
        </div>
      </div>
      <div className="footer-nav-wrapper flex">
        <div className="footer-navs">
          <a href="#" className="footer-nav-title">Company</a>
          <a href="#">About</a>
          <a href="#">Testimonials</a>
          <a href="#">Find a doctor</a>
          <a href="#">Apps</a>
        </div>
        <div className="footer-navs">
          <a href="#" className="footer-nav-title">Region</a>
          <a href="#">Indonesia</a>
          <a href="#">Singapore</a>
          <a href="#">Hongkong</a>
          <a href="#">Canada</a>
        </div>
        <div className="footer-navs">
          <a href="#" className="footer-nav-title">Help</a>
          <a href="#">Help center</a>
          <a href="#">Contact support</a>
          <a href="#">Instructions</a>
          <a href="#">How it works</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Footer