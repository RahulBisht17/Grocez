// Cart.js
import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
import CartGrid from "./CartGrid";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="flex flex-col gap-4 px-10">
      <h2 className="text-5xl text-gray-500 font-bold">Your Cart</h2>
      <span className="flex flex-row justify-between font-bold text-lg text-slate-500">
        <span>There are {cart.length} products in your cart</span>
        <button onClick={clearCart}>
          <DeleteOutlineOutlinedIcon />
          Clear Cart
        </button>
      </span>
      <CartGrid />
      <button className="button bg-green-500 font-medium text-white items-center w-52">
        <Link to={"/products"}>
          <ArrowBackIcon />
          Continue Shopping
        </Link>
      </button>
    </div>
  );
};

export default Cart;
