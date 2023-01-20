import axios from "axios";
import React, { useEffect, useState } from "react";
//import { ReactDOM } from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  //FaPlay,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();
  const onchangeNameHandler = (e) => {
    setName(e.target.value);
    e.target.value="";
  };
  const onchangeEmailHandler = (e) => {
    setEmail(e.target.value);

  };
  const onchangePhoneHandler = (e) => {
    setPhone(e.target.value);
   
  };
  const onchangeMessageHandler = (e) => {
    setMessage(e.target.value);    
  };
  const doc = {
    name: name,
    email: email,
    number: phone,
    message: message,
  };
  const json = JSON.stringify(doc);
  const notify = () => toast("successfully submitted!");

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", json, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    //let value ='';
    notify();
  };
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="contactSection">
          <h1 className="heading text-center">Get in Touch</h1>
          <p className="contact-p text-center">We are Available</p>
          <div className="commonBorder"></div>
          <div className="row">
            <div className="col-6 text-center">
              <img src="/images/man-01.png" className="image" alt="" />
            </div>

            <div className="col-6">
              <h2 className="contact-h2">Connect with us</h2>
              <div className="contact-right-col">
                <form>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    value={name}
                    onChange={(e) => onchangeNameHandler(e)}
                  />
                  <input
                    type="email"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="please enter valid email [test@test.com]."
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => onchangeEmailHandler(e)}
                  />
                  <br />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0-9]{10}"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => onchangePhoneHandler(e)}
                  />
                  <br />
                  <textarea
                    cols="40"
                    rows="10"
                    name="comment"
                    placeholder=" write Message"
                    value={message}
                    onChange={(e) => onchangeMessageHandler(e)}
                  ></textarea>
                  <br />
                  <button className="form-btn" onClick={onSubmit}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="margin-top ">
          <p className="contactCircles color-fff lineheight">
            This website developed and maintain solely by Shaikh Salman.
          </p>
          <ul className="contactCircles margin-bottom">
            <li>
              <FaFacebookF className="contactIcon" />
            </li>
            <li>
              <FaTwitter className="contactIcon" />
            </li>
            <li>
              <FaPinterest className="contactIcon" />
            </li>
            <li>
              <FaInstagram className="contactIcon" />
            </li>
          </ul>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      />
        </div>
      </section>
    </div>
  );
};

export default Contact;
