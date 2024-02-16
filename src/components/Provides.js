import React from 'react'
import illustration from "../assets/imgs/trafalgar-illustration sec02 1.png";
function Provides() {
  return (
    <section className="healthcare-providers container flex">
    <div className="hero-img">
      <img src={illustration} alt="photo"/>
    </div>
    <div className="healthcare-providers-cap">
      <h2>Leading healthcare providers</h2>
      <p>
        Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
        in the solutions we deliver
      </p>
      <div className="btn-secondary">Learn more</div>
    </div>
  </section>
  )
}

export default Provides