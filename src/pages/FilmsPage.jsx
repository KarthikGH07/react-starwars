import React from "react";
import { NavBar, CharacterList } from "../components";
const FilmsPage = () => {
  return (
    <>
      <NavBar />
      <CharacterList type="films" />
    </>
  );
};

export default FilmsPage;
