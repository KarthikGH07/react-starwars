import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = ({ img_normal, img_pressed, title }) => {
  return (
    <Container>
      <div className="card-inner">
        <Link to={`/${title}`}>
          <img src={img_normal} alt={title} />
          <img src={img_pressed} alt={title} />
        </Link>
        <h3>{title}</h3>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: transparent;
  height: 30px;
  margin-bottom: 50px;
  justify-content: center;
  align-content: center;

  img {
    object-fit: cover;
    height: 60px;
    width: 60px;
    cursor: pointer;
  }

  .card-inner {
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  .card-inner h3 {
    font-size: 14px;
    font-family: "Open Sans";
    font-weight: 600;
    color: #ffffff;
    justify-content: center;
    margin-left: 5px;
    margin-top: 10px;
    text-transform: uppercase;
  }

  /* Change image on hover */
  a img:last-child {
    display: none;
  }

  a:hover img:last-child {
    display: block;
  }
  a:hover img:first-child {
    display: none;
  }

  @media (min-width: 992px) {
    height: 50px;
    margin-bottom: 84px;
    img {
      height: 100px;
      width: 100px;
    }

    .card-inner h3 {
      margin-left: 25px;
    }
    .card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      outline: none !important;
      border: none !important;
    }
  }
`;

export default Card;
