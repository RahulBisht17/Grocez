import React, { useState } from "react";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [selected, setselected] = useState("home");
  return (
    <div className="hidden lg:flex justify-between py-2 border-b-4 font-semibold text-slate-700 max-w-full px-4 lg:text-sm xl:text-base md:text-xs">
      <div className="flex md:gap-6 lg:gap-2 xl:gap-4 items-center">
        <button className="button bg-green-500 text-white">
          <WidgetsOutlinedIcon />{" "}
          <span className="hidden lg:inline-block">Browse All Categories</span>
          <span className="md:inline-block lg:hidden">Categories</span>
          <KeyboardArrowDownSharpIcon />
        </button>
        <Link
          className={`pr-2 ${selected == "hot deals" ? "selected-nav" : " "}`}
          onClick={() => setselected("hot deals")}
        >
          <LocalFireDepartmentOutlinedIcon className="text-green-400" />
          Hot Deals
        </Link>
        <Link
          to={"/"}
          className={`px-2 ${selected == "home" ? "selected-nav" : " "}`}
          onClick={() => setselected("home")}
        >
          Home
        </Link>
        <Link
          className={`px-2 ${selected == "about" ? "selected-nav" : " "}`}
          onClick={() => setselected("about")}
        >
          About
        </Link>
        <Link
          to={"shop"}
          className={`px-2 ${selected == "shop" ? "selected-nav" : " "}`}
          onClick={() => setselected("shop")}
        >
          Shop
        </Link>
        <Link
          className={`px-2 ${selected == "blog" ? "selected-nav" : " "}`}
          onClick={() => setselected("blog")}
        >
          Blogs
        </Link>
        <Link
          className={`px-2 ${selected == "contact" ? "selected-nav" : " "}`}
          onClick={() => setselected("contact")}
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