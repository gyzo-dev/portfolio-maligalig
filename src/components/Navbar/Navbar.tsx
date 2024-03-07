import React, { useState, useRef } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      <div className="title-container">
        <Link to="/" className="title">MARK ANGELO</Link>
        <div className="menu" onClick={() => {
          setMenuOpen(!menuOpen);
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  )
}

export default Navbar