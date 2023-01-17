import React from "react";
import { FaAlignJustify } from "react-icons/fa";
const Nav = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav className="navbar">
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
                <a href="/" > 
                Home
                </a>
              </li>
              <li>
                {/* <button>Services</button> */}
                <a href="/" > 
                Services
                </a>
              </li>
              <li>
                {/* <button>About</button> */}
                <a href="/" > 
                About
                </a>
              </li>
              <li>
                {/* <button>Skills</button> */}
                <a href="/" > 
                Skills
                </a>
              </li>
              <li>
                {/* <button>Portfolio</button> */}
                <a href="/" > 
                Portfolio
                </a>
              </li>
              <li>
                {/* <button>Blog</button> */}
                <a href="/" > 
                Blog
                </a>
              </li>
              <li>
                {/* <button>Contact</button> */}
                <a href="/" > 
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