// Cart.js
import React, { useContext } from "react";
import CartGrid from "./CartGrid";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CartTotal from "./CartTotal";

const Cart = () => {
  return (
    <div className="flex flex-col gap-4 px-10">
      <h2 className="text-5xl text-gray-500 font-bold">Your Cart</h2>
      <div className="flex flex-row gap-6 mt-5">
        <CartGrid />
        <CartTotal />
      </div>
      <button className="button bg-green-500 font-medium text-white items-center w-52">
        <Link to={"/shop"}>
          <ArrowBackIcon />
          Continue Shopping
        </Link>
      </button>
    </div>
  );
};

export default Cart;
