import React from 'react'
import Vector from "../assets/imgs/Vector.png";
import Element from "../assets/imgs/element.png";
import Frame1 from "../assets/imgs/Frame.png";
import Frame2 from "../assets/imgs/Frame (1).png";
import Frame3 from "../assets/imgs/Frame (2).png";
import Frame4 from "../assets/imgs/Frame (3).png";
import Frame5 from "../assets/imgs/Frame (4).png";
import Frame6 from "../assets/imgs/Frame (5).png";
function Services() {
  return (
    <section className="our-services container">
    <img className="services-vector" src={Vector} alt="vector"/>
    <img className="services-pattern" src={Element} alt="pattern"/>    
    <h2>Our Services</h2>
    <p className="section-desc">We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
    <div className="cards-wrapper container flex">
      
      <div className="card-wrapper">
        <div className="card-img"><img src={Frame1} alt="service"/></div>
        <h3>Search doctor</h3>
        <p>Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
    </div>
    <div className="card-wrapper">
        <div className="card-img"><img src={Frame2} alt="service"/></div>
        <h3>Online pharmacy</h3>
        <p>Buy  your medicines with our mobile application with a simple delivery system</p>
    </div>
    <div className="card-wrapper">
        <div className="card-img"><img src={Frame3} alt="service"/></div>
        <h3>Consultation</h3>
        <p>Free consultation with our trusted doctors and get the best recomendations</p>
    </div>
    <div className="card-wrapper">
        <div className="card-img"><img src={Frame4} alt="service"/></div>
        <h3>Details info</h3>
        <p>Free consultation with our trusted doctors and get the best recomendations</p>
    </div>
    <div className="card-wrapper">
        <div className="card-img"><img src={Frame5} alt="service"/></div>
        <h3>Emergency care</h3>
        <p>You can get 24/7 urgent care for yourself or your children and your
            lovely family</p>
    </div>
    <div className="card-wrapper">
        <div className="card-img"><img src={Frame6} alt="service"/></div>
        <h3>Tracking</h3>
        <p>Track and save your medical history and health data</p>
    </div>
    </div>
    <div className="btn-secondary btn-center">Learn more</div>
  </section>
  )
}

export default Services