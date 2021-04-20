import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = ({ type }) => {
  const [responeData, setResponseData] = useState(null);
  let titles;

  const { id } = useParams();
  const fetchCharacterDetails = async (
    url = `https://swapi.dev/api/${type}/?search=${id}`
  ) => {
    const { data } = await axios.get(url);
    setResponseData({ ...data.results[0] });
  };

  useEffect(() => {
    fetchCharacterDetails();
    // eslint-disable-next-line
  }, []);

  if (responeData) {
    titles = Object.keys(responeData).slice(0, 15);
  }

  return (
    <Wrapper>
      <div className="center">
        <section className="image-container">
          <img src="../images/details.jpg" alt="" />
        </section>
        <section className="content">
          <div>
            {titles &&
              titles.map((title) => {
                return (
                  <p style={{ wordWrap: "break-word" }}>
                    <span>{title} : </span>
                    {responeData[title]}
                  </p>
                );
              })}
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem;
  margin-top: 0.5rem;
  .center {
    display: flex;
    flex-direction: column;
  }

  .image-container {
    margin-left: auto;
    margin-right: auto;
    img {
      height: 150px;
      width: 150px;
      object-fit: cover;
    }
  }

  .content {
    margin-left: auto;
    margin-right: auto;
    padding-top: 1rem;
    color: #fff;
    overflow-y: auto;
    max-height: 200px;
    max-width: 300px;
    span {
      font-family: "Open Sans Regular";
      font-size: 1rem;
      text-transform: capitalize;
      line-height: 1;
      color: #a5c1d3;
    }
    p {
      font-family: "Open Sans SemiBold";
      font-size: 1rem;
      text-transform: capitalize;
      line-height: 1;
      color: #ffffff;
    }
  }

  .content::-webkit-scrollbar {
    width: 5px;
    background: rgba(0, 0, 0, 0.3);
  }

  /* Track */
  .content::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border: 4px solid transparent;
    background-clip: content-box;
  }

  /* Handle */
  .content::-webkit-scrollbar-thumb {
    background: #00a8ff;
  }

  /* .content::-webkit-scrollbar-track-piece:end {
    margin-bottom: 10px;
  }

  .content::-webkit-scrollbar-track-piece:start {
    margin-top: 10px;
  } */

  @media (min-width: 992px) {
    background-color: rgba(117, 188, 255, 0.2);

    .center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-items: center;
    }
    .image-container {
      img {
        height: 300px;
        width: 300px;
        object-fit: cover;
      }
    }
    .content {
      padding-top: 0;
      color: #fff;
      float: left;
      overflow-y: auto;
      max-height: 300px;
      max-width: 400px;
      h2 {
        font-family: "Open Sans Bold";
        font-size: 2.5rem;
      }
      span {
        font-size: 1.5rem;
      }
      p {
        font-size: 1.5rem;
      }
    }
  }
`;

export default Details;
