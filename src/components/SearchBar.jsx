import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <div className=" flex flex-row mt-10 px-12 py-8 gap-4 items-center justify-between border-y-2">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex flex-row gap-4 justify-around items-center text-base px-3 border-solid border-green-200 border-2 rounded-sm h-14 w-5/12 ">
        <div className=" font-semibold basis-1/6">All categories</div>
        <div className="searchBar basis-4/6">
          <input type="text" placeholder="Search for products..." />
        </div>
        <button className="button bg-green-500 text-white basis-1/6 ">
          Search
        </button>
      </div>
      <div className="flex flex-row w-1/4 gap-8  justify-evenly ">
        <div className="flex flex-row gap-2 text-lg">
          <img src="../../assets/images/icon-compare.svg" />
          <h5>Compare</h5>
        </div>
        <div className="flex flex-row gap-2 text-lg">
          <img src="../../assets/images/icon-heart.svg" /> <div>Wishlist</div>
        </div>
        <Link to={"cart"}>
          <div className="flex flex-row gap-2 text-lg">
            <img src="../../assets/images/icon-cart.svg" /> <div>Cart</div>
          </div>
        </Link>
        <div className="flex flex-row gap-2 text-lg">
          <img src="../../assets/images/icon-user.svg" /> <div>Account</div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
