import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "Hi, I have completed M.E (Master of Engineering) from MIT college of Engineering, Kothrude, Pune. After That i have completed PG-DAC (Post-Graduate Diploma in Advance Computing) from CDAC Pune. My interests are in Web Development and I love to create beautiful and performant products with delightful user experiences...",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Shaikh Salman" },
    { id: 2, title: "Email:", text: "sk.salman61@gmail.com" },
    { id: 3, title: "Phone:", text: "+91 8055641054" },
    { id: 4, title: "Linkedin", text: "https://www.linkedin.com/in/sksalman61" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/man-01.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
              As a web developer we Write well designed, testable, efficient code by using best software development practices. 
              </div>
              <div className="about__info-p2">
              we Create website's and their layout/user interfaces by using standard HTML, CSS, Bootsrap, Javascript, React JS, React Hooks, Redux.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;