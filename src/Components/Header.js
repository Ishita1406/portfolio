import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Lorem Ipsum</h1>
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
