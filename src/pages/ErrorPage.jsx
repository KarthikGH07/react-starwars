import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fa2828;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
  .btn {
    background: rgba(5, 73, 121, 1);
    color: #fff;
    font-size: 2rem;
    font-family: "Open Sans Bold";
    padding: 0.5rem 1rem;
    text-transform: capitalize;
  }
`;

export default ErrorPage;
