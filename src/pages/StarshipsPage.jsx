import React from "react";
import { NavBar, CharacterList } from "../components";
const StarshipsPage = () => {
  return (
    <>
      <NavBar />
      <CharacterList type="starships" />
    </>
  );
};

export default StarshipsPage;
