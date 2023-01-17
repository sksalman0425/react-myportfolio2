import React from "react";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaFileVideo,
  FaSearchDollar,
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
    
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text:
        "A Web Development service provides you design and development of websites. We ensure that websites meet client expectations by ensuring they look good, run smoothly.",
      
    },
    {
      id: 2,
      icon: <FaCamera className="commonIcons" />,
      heading: "Photography",
      text:
        "Professional photography services work with clients to provide photographs for a variety of purposes including advertising, training, documentation, and employee communication.",
     
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Web Desing",
      text:
        "A web design service provides you with a customized website design that's perfect for your business or personal website",
       
    },
    {
      id: 4,
      icon: <FaApple className="commonIcons" />,
      heading: "Mobile App Devlopment",
      text:
        "In Mobile app development services we aimed at building iOS and Android applications that effectively complement or substitute websites",
        
    },
    {
      id: 5,
      icon: <FaFileVideo className="commonIcons" />,
      heading: "Video Editing",
      text:
        "Professional video services work with clients to provide videos for a variety of purposes including advertising, training, documentation, and employee communication.",
      
    },
    {
      id: 6,
      icon: <FaSearchDollar className="commonIcons" />,
      heading: "SEO Expert",
      text:
        " Our SEO(Search Engine Optimization) Expert work with clients to optimize client website's technical configuration, content relevance and link popularity so its pages can become easily findable, more relevant, popular towards user search experience and page’s ranking on google search.",
        
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;