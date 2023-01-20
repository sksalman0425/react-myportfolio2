import React from "react";

import { FaAlignJustify } from "react-icons/fa";
//import { Link } from "react-router-dom";
const Nav = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav id='navbar' className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img src="/images/logo.png" alt="logo" />
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li>
                {/* <button>Home</button> */}
                <a href="#banner" > 
                Home
                </a>
              </li>
              <li>
                {/* <button>Services</button> */}
                <a href="#services" > 
                Services
                </a>
              </li>
              <li>
                {/* <button>About</button> */}
                <a href="#about" > 
                About
                </a>
              </li>
              <li>
                {/* <button>Contact</button> */}
                <a href="#contact" > 
                Contact
                </a>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;