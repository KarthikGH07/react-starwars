import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <NavLink activeClassName="selected" to="/films">
            Films
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/species">
            Species
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/planets">
            Planets
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/people">
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/starships">
            Starships
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/vehicles">
            Vehicles
          </NavLink>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: 1px solid #054979;
  margin-bottom: 10px;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    justify-content: space-evenly;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 0.75rem 0.5rem;
    text-decoration: none;
    text-emphasis: none;
    text-transform: uppercase;
    font-family: "Open Sans";
    font-weight: 600;
    font-size: 0.75rem;
  }

  li a:hover {
    background-color: rgba(5, 73, 121, 0.6);
    color: white;
    text-decoration: none;
  }

  .selected {
    background-color: rgba(5, 73, 121, 0.6);
  }

  @media (min-width: 992px) {
    li a {
      padding: 0.5rem 1rem;
      font-size: 1.25rem;
    }
  }
`;
export default NavBar;
