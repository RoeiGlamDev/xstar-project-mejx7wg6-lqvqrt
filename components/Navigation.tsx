import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Assuming a CSS file for styles

const Navigation: React.FC = () => {
    return (
        <nav className="navigation">
            <div className="logo">
                <Link to="/">FashionTV</Link>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;