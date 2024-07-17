import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <SearchBar />
      <NavBar />

      <div className="flex gap-7 m-2 text-xl">
        <Link to={"products"}>Products</Link>
      </div>
    </header>
  );
};

export default Header;
