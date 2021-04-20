import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import { useParams } from "react-router-dom";

const CharacterDetail = () => {
  const [person, setPerson] = useState(null);

  const { id } = useParams();
  const fetchCharacterDetails = async (
    url = `https://swapi.dev/api/people/?search=${id}`
  ) => {
    const { data } = await axios.get(url);
    setPerson({ ...data.results[0] });
  };

  useEffect(() => {
    fetchCharacterDetails();
    // eslint-disable-next-line
  }, []);
  return (
    <Wrapper>
      <div className="center">
        <section className="image-container">
          <img src="../images/details.jpg" alt="" />
        </section>
        <section className="content">
          {person ? (
            <div>
              {console.log(person)}
              <h2>{person.name}</h2>
              <p>
                <span>birth year : </span>
                {person.birth_year}
              </p>
              <p>
                <span>gender : </span>
                {person.gender}
              </p>
              <p>
                <span>hair color : </span>
                {person.hair_color}
              </p>
              <p>
                <span>height : </span>
                {person.height}
              </p>
            </div>
          ) : (
            <h2>Loading...</h2>
          )}
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
    span {
      font-family: "Open Sans";
      font-weight: 400;
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
      h2 {
        font-family: "Open Sans";
        font-weight: 700;
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

export default CharacterDetail;
