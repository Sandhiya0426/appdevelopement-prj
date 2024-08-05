import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar({ cartCount }) { // Accept cartCount as a prop
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Event Company</Link>
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/listofcompanies">List of Companies</Link>
                <Link to="/cart" className="cart-icon">
                    <FaShoppingCart size={24} />
                    {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
