import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const CharacterList = ({ type }) => {
  const [data, setData] = useState([]);
  const [nextURL, setNextURL] = useState(null);
  const [prevURL, setPrevURL] = useState(null);

  const fetchData = async (url = `https://swapi.dev/api/${type}/`) => {
    const { data } = await axios.get(url);
    console.log(data);
    setData(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  if (type === "films") {
    return (
      <Wrapper>
        {data.length > 0
          ? data.map((item) => (
              <Link to={`/${type}/${item.title}`}>
                <button className="btn-item" key={item.title}>
                  {item.title}
                </button>
              </Link>
            ))
          : null}
        <Pagination prevURL={prevURL} nextURL={nextURL} fetchData={fetchData} />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {data.length > 0
        ? data.map((item) => (
            <Link to={`/${type}/${item.name}`}>
              <button className="btn-item" key={item.name}>
                {item.name}
              </button>
            </Link>
          ))
        : null}
      <Pagination prevURL={prevURL} nextURL={nextURL} fetchData={fetchData} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  .btn-item {
    text-transform: uppercase;
    border-color: transparent;
    background: transparent;
    color: #fff;
    font-size: 1rem;
    line-height: 1.75;
    font-family: "Open Sans";
    font-weight: 700;
    padding: 0 1.5rem;
    letter-spacing: 1px;
  }
  .btn-item:hover {
    background-color: rgba(5, 73, 121, 0.6);
  }

  @media (min-width: 992px) {
    .btn-char {
      font-size: 1.25rem;
      line-height: 1.75;
    }
    .btn-page {
      margin: 0.5rem 1rem;
      padding: 0.5rem 2rem;
    }
  }
`;

export default CharacterList;
