import React from "react";
import { NavBar, Details } from "../components";

const DetailPage = ({ type }) => {
  return (
    <>
      <NavBar />
      <Details type={type} />
    </>
  );
};

export default DetailPage;
