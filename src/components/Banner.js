import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  //FaPlay,
} from "react-icons/fa";
//import { Link } from "react-router-dom";
import RESUME from './RESUME.pdf';//for files other than .js, you have to provide it's extension 
import About from "./About";
import Contact from "./Contact";
import Nav from "./Nav";
import Services from "./Services";
const Banner = () => {
  const [state] = React.useState({
    title: "Hello Everyone, ",
            
    text:
      "I am Shaikh Salman, A Professional Software developer with long time experience in FrontEnd web Development.",
    image: "/images/man-01.png",
  });
  return (
    <>
    <Nav/>
    <header id='banner' className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <FaFacebookF className="headerIcon" />
                  </li>
                  <li>
                    <FaTwitter className="headerIcon" />
                  </li>
                  <li>
                    <FaPinterest className="headerIcon" />
                  </li>
                  <li>
                    <FaInstagram className="headerIcon" />
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  {/* <button className="btn btn-outline"> My Portfolio</button> */}
                  <a href={RESUME} target="_blank" className="btn btn-outline">
                    Download CV
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  {/* <button className="btn btn-smart"> <FaPlay className="play" /> </button> */}
                  {/* <a href="/" className="btn btn-smart"> 
                    <FaPlay className="play" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
    <About/>
    <Services/>
    <Contact/>
    </>
  );
};

export default Banner;