import React from "react";

const Prices = () => {
  const [header] = React.useState({
    mainHeader: "CHOOSE A PLAN",
    subHeading: "Personalised IT Service & consulting for You",
    text:
      "We keep you informed from time to time whenever you are eligible for different discounts and offers. Visite our Website frequently to check and avail the best available offer.",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "Basic",
      price: 3000,
      msg1: "5GB Storage Space",
      msg2: "10GB Monthly Bandwidth",
      msg3: "My SQL Databases",
      msg4: "30 Email Account",
      msg5: "3 Free Domain Names",
    },
    {
      id: 2,
      heading: "Standard",
      price: 4500,
      msg1: "10GB Storage Space",
      msg2: "20GB Monthly Bandwidth",
      msg3: "My SQL Databases",
      msg4: "50 Email Account",
      msg5: "5 Free Domain Names",
    },
    {
      id: 3,
      heading: "Premium",
      price: 6000,
      msg1: "15GB Storage Space",
      msg2: "30GB Monthly Bandwidth",
      msg3: "My SQL Databases",
      msg4: "100 Email Account",
      msg5: "10 Free Domain Names",
    },
  ]);
  return (
    <div className="prices">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((prices) => (
            <div className="col-4" key={prices.id}>
              <div className="price">
                <div className="priceHeading">{prices.heading}</div>
                <div className="price__rs">
                    ₹
                  {prices.price}
                  
                </div>
                <ul>
                  <li>{prices.msg1}</li>
                  <li>{prices.msg2}</li>
                  <li>{prices.msg3}</li>
                  <li>{prices.msg4}</li>
                  <li>{prices.msg5}</li>
                </ul>
                <div className="price__btn">
                  <button className="btn btn-outline">
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
//for rupees symboll press ctrl+alt+4
export default Prices;