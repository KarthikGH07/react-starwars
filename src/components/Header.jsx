import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <nav class="navbar navbar-light justify-content-center">
        <span class="navbar-brand mb-0 h1">
          <img
            src={logo}
            alt="logo"
            className="logo"
            onClick={() => history.push("/")}
          />
        </span>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .navbar {
    border-bottom: 1px solid #054979;
  }

  .logo {
    height: 50px;
    margin-bottom: 5px;
  }

  @media (min-width: 992px) {
    .logo {
      height: 70px;
      margin-bottom: 10px;
    }
  }
`;

export default Header;
