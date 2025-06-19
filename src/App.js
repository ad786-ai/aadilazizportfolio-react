import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { FaHome, FaUser, FaBriefcase, FaCogs, FaProjectDiagram, FaFileAlt, FaEnvelope, FaLinkedin, FaInstagram, FaDownload, FaGlobe, FaLaptopCode, FaPalette, FaSearch, FaRobot, FaExternalLinkAlt, FaGraduationCap, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="app">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <a href="#hero" className="nav-link" title="Home"><FaHome /></a>
        <a href="#about" className="nav-link" title="About"><FaUser /></a>
        <a href="#services" className="nav-link" title="Services"><FaBriefcase /></a>
        <a href="#skills" className="nav-link" title="Skills"><FaCogs /></a>
        <a href="#projects" className="nav-link" title="Projects"><FaProjectDiagram /></a>
        <a href="#resume" className="nav-link" title="Resume"><FaFileAlt /></a>
        <a href="#contact" className="nav-link" title="Contact"><FaEnvelope /></a>
      </aside>

      {/* Hero Section */}
      <section id="hero" className="section hero-section" data-aos="fade-up">
        <div className="content">
          <div className="text">
            <h1>Hi, I'm <span>Aadil Aziz</span></h1>
            <p>WordPress / E-Commerce Developer & Digital Marketer</p>
            <div className="social-links">
              <a href="mailto:aadilaziz59684@gmail.com"><FaEnvelope /></a>
              <a href="https://shorturl.at/UvACg" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://shorturl.at/PJTzV" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://github.com/aadilaziz/aadilazizportfolio/raw/main/AadilAziz-CV.pdf" download><FaDownload title="Download CV" /></a>
            </div>
            <div className="language-toggle mt-3">
              <button className="lang-btn"><FaGlobe /> EN | हिन्दी</button>
            </div>
          </div>
          <div className="photo">
            <img src="/img/aadil.jpg" alt="Aadil Aziz" />
          </div>
        </div>
      </section>

      {/* Additional sections would go here... */}
    </div>
  );
};

export default App;
