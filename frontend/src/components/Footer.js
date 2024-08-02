// Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">V3-Events</h1>
          <p>
          We specialize in creating unforgettable experiences for every occasion. Whether it’s weddings, corporate events, or birthday celebrations, connect with us to bring your event vision to life. Reach out via social media or contact us directly for personalized event planning services.
          </p>
          <div className="contact">
            <FaEnvelope /> &nbsp; v3events@gmail.com
          </div>
          <div className="contact">
            <FaPhone /> &nbsp; +123 456 7890
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <br />
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h2>Follow Us</h2>
          <br />
          <div className="social-icons">
            <a href="https://facebook.com"><FaFacebookF /></a>
            <a href="https://twitter.com"><FaTwitter /></a>
            <a href="https://instagram.com"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 YourCompany | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
