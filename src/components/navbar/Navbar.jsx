import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import logo from '../../assets/logo.png'
import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt='band logo' />
        </div>
        <div className="navbar-links">
          <p><a href="#home">Home</a></p>
          <p><a href="#upcoming-events">Upcoming Events</a></p>
          {/* <p><a href="#about">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p> */}
        </div>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#ffffff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#ffffff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu-container scale-up-center">
          <div className="navbar-menu-container-links">
          <p><a href="#home">Home</a></p>
          <p><a href="#upcoming-events">Upcoming Events</a></p>
          {/* <p><a href="#about">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p> */}
          </div>
        </div>
        )}
      </div>
    </div>
    )
}

export default Navbar;