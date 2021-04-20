import React from "react";
import { NavBar, CharacterList } from "../components";
const CharactersPage = () => {
  return (
    <>
      <NavBar />
      <CharacterList type="people" />
    </>
  );
};

export default CharactersPage;
