import React from "react";
//import { ReactDOM } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  //FaPlay,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <img src="/images/logo.png" alt="" />
              </div>
              <p className="contactCircles">
                This website developed and maintain solely by Shaikh Salman.
              </p>
              {/* <div className="contactCircles">
                <Form action="mail.php" method="post" id="demo5">
                    <h2>Connect with us</h2>
                    <input type="text" name="name" required placeholder="Name">
                    <input type="email" name= "email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="please enter valid email [test@test.com]." required placeholder="E-mail">
                    <br/>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required placeholder="Phone Number">
                    <br/>
                    <textarea cols="40" rows="10" name="comment" placeholder=" write Message"></textarea>
                    <br/>
                    <button  class="c-btn">Submit</button>
                </Form>
            </div> */}
              <ul className="contactCircles">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;