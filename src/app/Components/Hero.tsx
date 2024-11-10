import React from "react";
import { FaCode, FaPaintBrush, FaMobile } from "react-icons/fa";
import "../style/Hero.css"
const Hero = () => {
  return (
    <div className="home-page">
  <div className="home-content">
    <div className="container">
      <div className="text-section">
        <h2 className="home-title ">Welcome to Our Website✨</h2>
        <p className="home-description">
        As a passionate Web Developer, I specialize in building custom, user-friendly websites that not only look stunning but also perform flawlessly. Whether you're looking to launch a new site, revamp your existing one, or create an app, I can bring your vision to life with cutting-edge technologies.
        </p>
      </div>
      <div className="button-section space-x-3">
        <button type="button" className="home-button">Learn More..</button>
        <button type="button" className="home-button">Contact Me</button>
      </div>
    </div>
  </div>
</div>

  );
};

export default Hero;
