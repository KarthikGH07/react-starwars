import React from "react";
import footer_logo from "../images/footer_logo.png";

const Footer = () => {
  return (
    <div class="fixed-bottom">
      <img src={footer_logo} alt="footer-logo" />
      <a href="#"> Terms of Use</a>
      <a href="#"> Legal Notices</a>
      <a href="#"> Privacy Policy</a>
      <a href="#"> Star Wars Helpdesk</a>
      <a href="#"> Star Wars At Disney Store</a>
      <div class="copyright">
        <p>TM & &copy; Lucasfilm Ltd. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
