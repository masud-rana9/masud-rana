import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-logo">
            <img src="/assets/logo.png" alt="" />
          </div>
          <p>
            I am a Fullstack developer from ,BD with 2 year of experience in
            company like SoftKarrot.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-top-email-input">
            <img src="/assets/user_icon.svg" alt="" />
            <input type="Email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-botton-left">
          ©2024 Masud rana All rights reserved.
        </div>
        <div className="footer-bottom-right">
          <p>Term of service</p>
          <p>Privacy and policy</p>
          <p>Conect with me </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
