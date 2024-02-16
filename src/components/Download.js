import React from 'react'
import illustration from "../assets/imgs/trafalgar-illustration sec03 1.png";
function Download() {
  return (
    <section className="download-our-app container flex">
    <div className="download-our-app-cap">
      <h2>Download our 
        mobile apps</h2>
      <p>
        Our dedicated patient engagement app and 
        web portal allow you to access information instantaneously (no tedeous form, long calls, 
        or administrative hassle) and securely
      </p>
      <div className="btn-secondary">Download<span><i className="fa-solid fa-arrow-down-long"></i></span></div>
    </div>
    <div className="hero-img">
      <img src={illustration} className="img-fluid" alt="photo" />
    </div>

  </section>
  )
}

export default Download