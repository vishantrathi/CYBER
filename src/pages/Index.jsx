import React, { useEffect } from 'react';
import '../styles/style.css';
 

const Index = () => {
  useEffect(() => {
    const button = document.getElementById('hamburger');
    const menu = document.getElementById('nav-menu');
    if (button && menu) {
      const toggleMenu = () => menu.classList.toggle('open');
      button.addEventListener('click', toggleMenu);
      return () => button.removeEventListener('click', toggleMenu);
    }
  }, []);

  return (
    <>
      <header>
        <div className="container header-flex">
          <div className="logo-area">
            <div className="logo-area-row">
              <img src="/Image/logo.png" alt="Enreach Solution Logo" className="logo" />
              <span className="brand-title">ENREACH SOLUTION</span>
            </div>
          </div>
          <nav>
            <button id="hamburger" className="hamburger" aria-label="Open navigation">
              <span></span><span></span><span></span>
            </button>
            <ul className="nav-links" id="nav-menu">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#why-choose-us">Why Choose Us</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="login.html">Admin LogIn</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="video-container">
          <video autoPlay muted loop playsInline>
            <source src="/Image/854322-hd_1280_720_25fps.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container hero-flex hero-overlay">
          <div className="hero-content">
            <h2>Uncover the Truth with Expert Digital Forensics</h2>
            <p>We specialize in digital forensics and cyber fraud investigation.</p>
            <a href="#contact" className="btn">Free Consultation</a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container about-flex">
          <div className="about-card">
            <h2>About Us</h2>
            <p><b>ENREACH SOLUTION</b> provides expert digital forensics and fraud investigation services. Our certified team uses advanced technology to uncover evidence in cybercrime, intellectual property theft, and financial fraud cases.</p>
            <p>We deliver reliable, discreet, and timely results, ensuring accuracy and professionalism for every client.</p>
          </div>
          <div className="about-photo">
            <img src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&w=600&q=80" alt="Team Meeting" />
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {["Audio Video Analysis", "Cloud Forensics", "Computer / MAC Forensic", "Cyber Fraud Investigation", "Database Forensics", "Digital Forensic", "Disk Forensic", "Email Forensics", "Email Fraud Investigation", "Malware Forensics", "Memory Forensics", "Mobile Forensic", "Network Forensics", "Social Media Analysis", "Wireless Forensics"].map((title, i) => (
              <div key={i} className="service-card">
                <h3>{title}</h3>
                <p>Sample text for {title}. Replace with actual content.</p>
                <a className="view-more">View More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="why-choose-us">
        <div className="container why-choose-us-content">
          <h2>Why Choose Us</h2>
          <ul>
            <li>Expertise in handling complex cyber incidents</li>
            <li>Certified and experienced professionals</li>
            <li>Proven track record of successful investigations</li>
            <li>Comprehensive services from data recovery to legal support</li>
            <li>Confidentiality and timely delivery guaranteed</li>
          </ul>
        </div>
      </section>

      <section id="team" className="team-section">
        <div className="container">
          <h2>Our Team</h2>
          <div className="team-grid">
            {["Shubham Saini", "Gourav Kumar", "Piyush Rawat", "Varun Saini", "Vishant Rathi"].map((name, i) => (
              <div key={i} className="team-card">
                <img src={`/Image/team${i+1}.jpg`} alt={`Team Member ${i+1}`} className="team-photo" />
                <h3>{name}</h3>
                <p>Sr. Digital Forensic Examiner</p>
                <a href="#" className="team-linkedin" title="LinkedIn" target="_blank">in</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>If you are facing a cyber incident, our team is ready to help you.</p>
          <a href="mailto:contact.enreachsolution@gmail.com" className="btn">Email Us</a>
        </div>
      </section>

      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-col logo-about">
            <img src="/Image/logo.png" alt="Enreach Solution Logo" className="footer-logo" />
            <p className="footer-about">ENREACH SOLUTION specializes in digital forensics and fraud investigations.</p>
          </div>
          <div className="footer-col contact-info">
            <h3>Contact Info</h3>
            <ul>
              <li><span className="footer-icon">📍</span> Registered Office: Astralis Supernova Sector-94, Noida</li>
              <li><span className="footer-icon">📞</span> +91 8218848146</li>
              <li><span className="footer-icon">✉️</span> contact.enreachsolution@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2025 ENREACH SOLUTION CYBER FORENSIC SOLUTIONS. All Rights Reserved.
          <div>Developed by <a href="https://vishantrathi.github.io/QuberaSystems/">QuberaSystems</a></div>
        </div>
      </footer>
    </>
  );
};

export default Index;