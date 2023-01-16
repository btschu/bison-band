import React, { useState, useEffect } from "react";

import logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeNavbarBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeNavbarBackground();
    window.addEventListener("scroll", changeNavbarBackground);
  });

  return (
    <div
      className={
        navbar ? "navbar navbar-scrolled sticky-top" : "navbar sticky-top"
      }
    >
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#hero">
            <img src={logo} alt="band logo" />
          </a>
        </div>
        <div className="navbar-links">
          <p>
            <a href="#hero">Home</a>
          </p>
          <p>
            <a href="#upcoming-events">Upcoming Events</a>
          </p>
          {/* <p><a href="#about">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p> */}
        </div>
      </div>

      <div className="navbar-menu">
        <button
          onClick={() => setOpen(!isOpen)}
          className={`hamburger-button ${isOpen ? "open" : "close"}`}
        />
        <div className={`panel ${isOpen ? "open" : "close"}`}>
          <ul>
            <li>
              <a href="#hero" onClick={() => setOpen(!isOpen)}>Home</a>
            </li>
            <li>
              <a href="#upcoming-events" onClick={() => setOpen(!isOpen)}>Upcoming Events</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
