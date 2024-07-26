import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <SearchBar />
      <NavBar />
    </header>
  );
};

export default Header;
