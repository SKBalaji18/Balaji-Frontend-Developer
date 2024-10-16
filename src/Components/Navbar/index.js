// src/Navbar.js
import React, { useState } from 'react';
import './index.css'; // Import the CSS file for styling

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">EthAi</div>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#sectionHome">Home</a></li>
                <li><a href="#sectionFeatures">Features</a></li>
                <li><a href="#sectionAbout">About</a></li>
                <li><a href="#sectionToken">Tokenomics</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
