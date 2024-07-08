import React, { useState } from "react";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [selected, setselected] = useState("home");
  return (
    <div className="flex justify-between px-10 py-2 border-b-2 font-semibold text-slate-700 text-lg">
      <div className="flex gap-12 items-center">
        <button className="button bg-green-500 text-white">
          <WidgetsOutlinedIcon /> Browse All Categories
          <KeyboardArrowDownSharpIcon />
        </button>
        <Link
          className={`pr-2 ${
            selected == "hot deals"
              ? "border-b-4 text-green-500 border-green-300"
              : " "
          }`}
          onClick={() => setselected("hot deals")}
        >
          <LocalFireDepartmentOutlinedIcon className="text-green-400" />
          Hot Deals
        </Link>
        <Link
          to={"/"}
          className={`px-2 ${
            selected == "home"
              ? "border-b-4 text-xl text-green-500 border-green-300"
              : " "
          }`}
          onClick={() => setselected("home")}
        >
          Home
        </Link>
        <Link
          className={`px-2 ${
            selected == "about"
              ? "border-b-4 text-xl text-green-500 border-green-300"
              : " "
          }`}
          onClick={() => setselected("about")}
        >
          About
        </Link>
        <Link
          to={"shop"}
          className={`px-2 ${
            selected == "shop"
              ? "border-b-4 text-xl text-green-500 border-green-300"
              : " "
          }`}
          onClick={() => setselected("shop")}
        >
          Shop
        </Link>
        <Link
          className={`px-2 ${
            selected == "blog"
              ? "border-b-4 text-xl text-green-500 border-green-300"
              : " "
          }`}
          onClick={() => setselected("blog")}
        >
          Blogs
        </Link>
        <Link
          className={`px-2 ${
            selected == "contact"
              ? "border-b-4 text-xl text-green-500 border-green-300"
              : " "
          }`}
          onClick={() => setselected("contact")}
        >
          Contact
        </Link>
      </div>
      <div className="flex gap-3 items-center">
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
