import React from "react";
import fb from "../assets/img/fb.png";
import twit from "../assets/img/twit.png";
import insta from "../assets/img/insta.png";
import ld from "../assets/img/ld.png";
import pin from "../assets/img/pin.png";

import "../App.css";

function Footer() {
  return (
    <div className="Footer-container">
      <div className="contact_us-container">
        <div className="social-media-container">
          <a>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries....
          </a>
          <div className="social-media">
            <div className="fb">
              <img src={fb} alt="fb" />
            </div>
            <div className="twit">
              <img src={twit} alt="fb" />
            </div>
            <div className="insta">
              <img src={insta} alt="fb" />
            </div>
            <div className="ld">
              <img src={ld} alt="fb" />
            </div>
            <div className="pin">
              <img src={pin} alt="fb" />
            </div>
          </div>
        </div>
        <div className="online-shopping">
          <a>ONLINE SHOPPING</a>
        </div>
        <div className="customer-policies">
          <a>CUSTOMER POLICIES</a>
        </div>
        <div className="store-info">
          <a>STORE INFORMATION</a>
        </div>
      </div>
      <div className="copyright">
        <a>Copyright © 2023 Ashwani Yadav. All rights reserved.</a>
      </div>
    </div>
  );
}

export default Footer;
