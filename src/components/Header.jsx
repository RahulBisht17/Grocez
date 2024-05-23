import React from "react";
import Logo from "../../assets/images/logo.png";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className=" flex flex-row m-10 px-6 gap-4 items-center justify-between">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="flex flex-row gap-4 items-center text-sm px-2 border-solid border-2 rounded-sm h-14 w-5/12 ">
          <div className="searchDrop font-semibold">All categories</div>
          <div>
            <input type="search" placeholder="Search for products..." />
          </div>
        </div>
        <div className="headerFunc flex flex-row w-1/4 gap-8  justify-evenly ">
          <div>
            <img src="../../assets/images/icon-compare.svg" />
            <h5>Compare</h5>
          </div>
          <div>
            <img src="../../assets/images/icon-heart.svg" /> <div>Wishlist</div>
          </div>
          <div>
            <img src="../../assets/images/icon-cart.svg" /> <div>Cart</div>
          </div>
          <div>
            <img src="../../assets/images/icon-user.svg" /> <div>Account</div>
          </div>
        </div>
      </div>
      <div className="flex gap-7 m-2 text-xl">
        <Link to={"products"}>Products</Link>
        <Link to={"cart"}>Cart</Link>
      </div>

      <Outlet />
    </header>
  );
};

export default Header;
