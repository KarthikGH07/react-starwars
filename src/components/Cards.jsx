import React from "react";
import characters_normal from "../images/characters/characters_normal.png";
import droids_normal from "../images/characters/droids_normal.png";
import films_normal from "../images/characters/films_normal.png";
import planets_normal from "../images/characters/planets_normal.png";
import species_normal from "../images/characters/species_normal.png";
import vehicles_normal from "../images/characters/vehicles_normal.png";
import characters_pressed from "../images/characters/characters_pressed.png";
import droids_pressed from "../images/characters/droids_pressed.png";
import films_pressed from "../images/characters/films_pressed.png";
import planets_pressed from "../images/characters/planets_pressed.png";
import species_pressed from "../images/characters/species_pressed.png";
import vehicles_pressed from "../images/characters/vehicles_pressed.png";

const Cards = () => {
  return (
    <section className="cards">
      <div className="card">
        <div className="card-inner">
          <a>
            <img src={films_normal} alt="films" />
            <img src={films_pressed} alt="films" />
          </a>
          <h3>FILMS</h3>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          <a>
            <img src={species_normal} alt="species" />
            <img src={species_pressed} alt="species" />
          </a>
          <h3>SPECIES</h3>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          <a>
            <img src={planets_normal} alt="planets" />
            <img src={planets_pressed} alt="planets" />
          </a>
          <h3>PLANETS</h3>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          <a>
            <img src={characters_normal} alt="charcters" />
            <img src={characters_pressed} alt="charcters pressed" />
          </a>
          <h3>PEOPLE</h3>
        </div>
      </div>

      <div className="card">
        <div className="card-inner">
          <a>
            <img src={vehicles_normal} alt="vehicles" />
            <img src={vehicles_pressed} alt="vehicles" />
          </a>
          <h3>STARSHIP</h3>
        </div>
      </div>
      <div className="card">
        <div className="card-inner">
          <a>
            <img src={droids_normal} alt="droids" />
            <img src={droids_pressed} alt="droids" />
          </a>
          <h3>VEHICLES</h3>
        </div>
      </div>
    </section>
  );
};

export default Cards;
