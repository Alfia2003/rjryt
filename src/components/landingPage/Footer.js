import React from 'react'
import Element from "../../assets/imgs/element.png";
import Ellipse from "../../assets/imgs/Ellipse 8.png";
import T from "../../assets/imgs/T.png";
import Trafalgar from "../../assets/imgs/Trafalgar.png";
function Footer() {
  return (
    <section className="rjr_footer rjr_section">
    <img className="footer-pattern-bottom" src={Element} alt="pattern"/>
    <div className="footer-wrapper rjr_flex">
      <div className="footer-info-wrapper">
        <span className="logo">
          <img className="logo-circle" src={Ellipse} alt="trafalgar-logo"/>
          <img className="logo-letter" src={T} alt="trafalgar-logo"/>
          <img className="logo-text" src={Trafalgar} alt="trafalgar-logo"/>
        </span>
        <p className='rjr_p'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
          for everyone</p>
        <div className="copy-rights">
        <p className='rjr_p'>©Trafalgar PTY LTD 2020. All rights reserved</p>
        </div>
      </div>
      <div className="footer-nav-wrapper rjr_flex">
        <div className="footer-navs">
          <a href="#" className="rjr_a footer-nav-title">Company</a>
          <a className="rjr_a" href="#">About</a>
          <a className="rjr_a" href="#">Testimonials</a>
          <a className="rjr_a" href="#">Find a doctor</a>
          <a className="rjr_a" href="#">Apps</a>
        </div>
        <div className="footer-navs">
          <a href="#" className="rjr_a footer-nav-title">Region</a>
          <a className="rjr_a" href="#">Indonesia</a>
          <a className="rjr_a" href="#">Singapore</a>
          <a className="rjr_a" href="#">Hongkong</a>
          <a className="rjr_a" href="#">Canada</a>
        </div>
        <div className="footer-navs">
          <a href="#" className="rjr_a footer-nav-title">Help</a>
          <a className="rjr_a" href="#">Help center</a>
          <a className="rjr_a" href="#">Contact support</a>
          <a className="rjr_a" href="#">Instructions</a>
          <a className="rjr_a" href="#">How it works</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Footer