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
            We provide the best solutions for your fitness and health goals. Connect with us on our social media platforms or reach out to us directly via email or phone.
          </p>
          <div className="contact">
            <FaEnvelope /> &nbsp; email@yourcompany.com
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
