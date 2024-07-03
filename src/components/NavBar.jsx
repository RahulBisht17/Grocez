import React from "react";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex justify-between px-10 py-2 border-b-2 font-semibold text-slate-700 text-lg">
      <div className="flex gap-12 items-center">
        <button className="button bg-green-500 text-white">
          <WidgetsOutlinedIcon /> Browse All Categories
          <KeyboardArrowDownSharpIcon />
        </button>
        <Link>
          <LocalFireDepartmentOutlinedIcon className="text-green-400" />
          Hot Deals
        </Link>
        <Link to={"/"}>Home</Link>
        <Link>About</Link>
        <Link to={"shop"}>Shop</Link>
        <Link>Blogs</Link>
        <Link>Contact</Link>
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
