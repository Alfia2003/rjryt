import React from 'react'
import Element from "../assets/imgs/element.png";
import illustration from "../assets/imgs/trafalgar-header illustration 1.png";
function Hero() {
  return (
    <section className="hero container flex">
      <img src={Element} className="circle-pattern" alt="pattern"/>
      <div className="hero-cap">
        <h1>Virtual healthcare 
            for you</h1>
        <p>
            Trafalgar provides progressive, and affordable 
            healthcare, accessible on mobile and online 
            for everyone
        </p>
        <button className="btn-primary">Consult today</button>
      </div>
      <div className="hero-img">
        <img src={illustration} alt="hero-photo"/>
      </div>
    </section>
  )
}

export default Hero