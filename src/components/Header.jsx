import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <nav class="navbar navbar-light justify-content-center">
      <span class="navbar-brand mb-0 h1">
        <img src={logo} alt="logo"></img>
      </span>
    </nav>
  );
};

export default Header;
