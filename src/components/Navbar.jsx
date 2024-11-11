// src/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div class="logo_container">
                <a href="#">Shubham</a>
            </div>
            <nav class="nav_bar">
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
                <a href="#">Pages</a>
                <a href="#">Blog</a>
                <a href="#">Contacts <sup>New</sup></a>
            </nav>
        </ header>
    );
}

export default Navbar;
