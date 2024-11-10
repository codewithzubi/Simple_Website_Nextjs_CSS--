import React from 'react'
import "../style/Nav.css"
const Nav = () => {
  return (
    <div>
    <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-logo" href="/">
          WebDev
        </a>
        <div className="navbar-links">
          <a className="navbar-link" href="/">
            Home
          </a>
          <a className="navbar-link" href="/about">
            About
          </a>
          <a className="navbar-link" href="/services">
            Services
          </a>
          <a className="navbar-link" href="/contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  </div>
  
  )
}

export default Nav
