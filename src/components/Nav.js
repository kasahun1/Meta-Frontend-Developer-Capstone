import React, { useState } from "react"
import Logo from "../images/Logo .svg"

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setMenuOpen(!menuOpen);
  }

    return (
        <nav className={`navbar ${menuOpen ? "open": ""}`}>
            <a href="/">
                <img src={Logo} alt="logo"/>
            </a>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`nav-links ${menuOpen ? "visible": ""}`}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/main">Menu</a>
                </li>
                <li>
                    <a href="/booking">Reservation</a>
                </li>
                <li>
                    <a href="/booking">Order Online</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>
            </ul>
        </nav>

    )
}

export default Nav
