import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Event Planner</Link>
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                 <Link to="/Login">Login</Link>
                 <Link to="/Register">Register</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
