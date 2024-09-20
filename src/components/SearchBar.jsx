import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/images/a-flat-vector-illustrative-style-wordmark-logo-des-zeFbBtC1TaykmH5q2JQHaA-V6HtadLgTY2mfLafAg1kkg-removebg.png";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import CompareArrowsSharpIcon from "@mui/icons-material/CompareArrowsSharp";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import { useUserProfile } from "../Context/UserProfileContext";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const { profileData } = useUserProfile();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <>
      <div className="hidden lg:flex max-w-full px-8 py-8 gap-4 items-center justify-between">
        <Link to="/" className="w-48 h-16 relative  overflow-clip">
          <img src={Logo} className="absolute -top-16 " alt="logo" />
        </Link>
        <div className="flex gap-4 justify-between items-center text-sm px-4 border-solid border-green-300 border-2 rounded-sm h-12 w-2/5">
          <input type="text" placeholder="Search for products..." />

          <button className="button bg-green-500 text-white px-4 hover:bg-green-400">
            Search
          </button>
        </div>
        <div className="flex text-sm xl:text-lg gap-2 xl:gap-6">
          <div className="flex gap-1 items-center hover:text-green-500">
            <CompareArrowsSharpIcon fontSize="medium" />
            <div>Compare</div>
          </div>
          <Link>
            <div className="flex gap-1 items-center hover:text-green-500">
              <FavoriteBorderSharpIcon fontSize="medium" />
              <div>Wishlist</div>
            </div>
          </Link>
          <Link to={"cart"}>
            <div className="flex gap-1 items-center hover:text-green-500 ">
              <ShoppingCartOutlinedIcon fontSize="medium" /> <div>Cart</div>
            </div>
          </Link>
          <Link to={"account"}>
            <div className="flex gap-1 items-center hover:text-green-500">
              {profileData && profileData.photoUrl ? (
                <img src={profileData.photoUrl} className="w-8 rounded-full" />
              ) : (
                <AccountCircleRoundedIcon fontSize="medium" />
              )}
              <div>{profileData ? profileData.firstName : "Sign In"}</div>
            </div>
          </Link>
        </div>
      </div>

      <div className="lg:hidden border-2 max-w-full px-6 py-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="w-40 h-14 relative  overflow-clip">
            <img src={Logo} className="absolute -top-12 " alt="logo" />
          </Link>
          <div className="flex gap-5">
            <Link to={"cart"}>
              <ShoppingCartOutlinedIcon
                className="text-slate-400"
                fontSize="large"
              />
            </Link>
            <div onClick={toggleSidebar}>
              <MenuRoundedIcon className="text-slate-400" fontSize="large" />
            </div>
          </div>
        </div>
        <div className="mt-10 border-2 rounded-md p-1 border-green-300 flex gap-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full"
          />
          <button className="button border-green-500 text-white bg-green-400">
            Search
          </button>
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"></div>
        )}

        <div
          ref={sidebarRef}
          className={`w-2/3 fixed top-0 left-0 h-full bg-white shadow-md transform pt-8 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <ul className="p-4 space-y-8">
            <Link
              to="account"
              onClick={toggleSidebar}
              className="flex gap-2 items-center mb-10"
            >
              {profileData && profileData.photoUrl ? (
                <img src={profileData.photoUrl} className="w-8 rounded-full" />
              ) : (
                <AccountCircleRoundedIcon fontSize="large" />
              )}
              <div className="text-2xl font-semibold">
                {profileData
                  ? profileData.firstName + " " + profileData.lastName
                  : "Account"}
              </div>
            </Link>
            <li
              className="text-lg hover:text-green-400 pb-1 border-b-2 pl-2"
              onClick={toggleSidebar}
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              className="text-lg hover:text-green-400 pb-1  border-b-2 pl-2"
              onClick={toggleSidebar}
            >
              <Link>About Us</Link>
            </li>
            <li
              className="text-lg hover:text-green-400 pb-1 border-b-2 pl-2"
              onClick={toggleSidebar}
            >
              <Link to={"shop"}>Shop</Link>
            </li>
            <li
              className="text-lg hover:text-green-400 pb-1 border-b-2 pl-2"
              onClick={toggleSidebar}
            >
              <Link>Blog</Link>
            </li>
            <li
              className="text-lg hover:text-green-400 pb-1  border-b-2 pl-2"
              onClick={toggleSidebar}
            >
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
