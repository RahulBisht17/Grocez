import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();
  const [selected, setselected] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    setselected(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjust this scroll position to match the point where you want the navbar to become sticky
      if (scrollPosition > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isSticky
          ? "fixed z-40 top-0 w-full bg-white shadow-lg transition translate-y-0 duration-500 ease-in-out"
          : "relative"
      }
        hidden lg:flex justify-between py-2 border-y-2 font-semibold text-slate-700 max-w-full px-4 lg:text-sm xl:text-base md:text-xs`}
    >
      <div className="flex md:gap-6 lg:gap-2 xl:gap-4 items-center">
        <button className="button bg-green-500 text-white">
          <WidgetsOutlinedIcon />{" "}
          <span className="hidden lg:inline-block">Browse All Categories</span>
          <span className="md:inline-block lg:hidden">Categories</span>
          <KeyboardArrowDownSharpIcon />
        </button>
        <Link
          className={`pr-2 ${selected == "/hot deals" ? "selected-nav" : " "}`}
        >
          <LocalFireDepartmentOutlinedIcon className="text-green-400" />
          Hot Deals
        </Link>
        <Link
          to={"/"}
          className={`px-2 ${selected == "/" ? "selected-nav" : " "}`}
        >
          Home
        </Link>
        <Link className={`px-2 ${selected == "/about" ? "selected-nav" : " "}`}>
          About
        </Link>
        <Link
          to={"shop"}
          className={`px-2 ${selected == "/shop" ? "selected-nav" : " "}`}
        >
          Shop
        </Link>
        <Link className={`px-2 ${selected == "/blog" ? "selected-nav" : " "}`}>
          Blogs
        </Link>
        <Link
          className={`px-2 ${selected == "/contact" ? "selected-nav" : " "}`}
        >
          Contact
        </Link>
      </div>
      <div className="gap-3 items-center hidden lg:flex">
        <SupportAgentOutlinedIcon fontSize="large" />
        <div className="flex flex-col">
          <span>017XXXXXXX</span>
          <span>24/7 Support Center</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
