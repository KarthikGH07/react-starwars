import React from "react";
import { NavBar, CharacterList } from "../components";
const PlanetsPage = () => {
  return (
    <>
      <NavBar />
      <CharacterList type="planets" />
    </>
  );
};

export default PlanetsPage;
