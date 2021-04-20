import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Card from "./Card";

const Cards = () => {
  const [titles, setTitles] = useState([]);

  const fetchTitles = async (url = "https://swapi.dev/api/") => {
    const { data } = await axios.get(url);
    setTitles(Object.keys(data));
  };
  useEffect(() => {
    fetchTitles();
  }, []);

  return (
    <Wrapper>
      {titles.map((item, index) => {
        return (
          <Card
            key={index}
            img_normal={`../images/characters/${item}_normal.png`}
            img_pressed={`../images/characters/${item}_pressed.png`}
            title={item}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.125rem;
  margin: 0 auto 0 auto;
  justify-content: center;
  align-content: center;
  margin-top: 3rem;
  padding-left: 3.5rem;
  max-width: 600px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 46px;

    margin-left: auto;
    margin-right: auto;
    margin-top: 45px;
  }
`;

export default Cards;
