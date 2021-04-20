import React from "react";
import footer_logo from "../images/footer_logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <img src={footer_logo} alt="footer-logo" />
      <Link to="/"> Terms of Use</Link>
      <Link to="/"> Legal Notices</Link>
      <Link to="/"> Privacy Policy</Link>
      <Link to="/" className="helpdesk-link">
        Star Wars Helpdesk
      </Link>
      <Link to="/" className="store-link">
        Star Wars At Disney Store
      </Link>
      <div class="copyright">
        <p>TM & &copy; Lucasfilm Ltd. All Rights Reserved</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-top: 1px solid #054979;
  padding-top: 15px;
  padding-bottom: 5px;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;

  a {
    color: #1b6ba2;
    text-decoration: none;
    padding: 0;
    margin: 0;
    padding-right: 20px;
    margin-bottom: 20px;
    text-transform: uppercase;
    text-align: center;
  }

  img {
    margin-left: 200px;
    margin-right: 30px;
  }
  .copyright {
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 14px;
    color: #49586b;
    text-align: center;
  }

  @media (max-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;

    a {
      padding: 0;
      margin: 0;
      margin-bottom: 10px;
      font-size: 11px;
    }

    img {
      display: none;
    }

    .copyright {
      font-size: 10px;
      color: #49586b;
      margin: 0 auto;
      width: 100%;
      grid-row: 3;
      grid-column: 1 / span 3;
    }
  }
`;

export default Footer;
