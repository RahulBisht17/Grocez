// Cart.js
import React, { useState, useRef, useEffect, useContext } from "react";
import CartGrid from "../components/Cart/CartGrid";
import { Link } from "react-router-dom";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CartTotal from "../components/Cart/CartTotal";
import CartContext from "../Context/CartContext";
const Cart = () => {
  const { cart } = useContext(CartContext);

  let subTotal = 0;
  {
    cart.map((item) => (subTotal += item.price * item.quantity));
  }
  const shipping = 50;

  const [isOpen, setIsOpen] = useState(false);
  const CartTotalRef = useRef(null);

  const toggleCartTotal = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOutside = (event) => {
    if (CartTotalRef.current && !CartTotalRef.current.contains(event.target)) {
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
    <div className="flex flex-col gap-4 px-2 xs1:px-4 lg:px-8 mt-10">
      {cart.length ? (
        <>
          <h2 className="text-4xl md:text-5xl  text-gray-500 font-bold">
            Your Cart
          </h2>
          <div className="hidden md:flex flex-row mx-auto md:mx-0 md:gap-4 lg:gap-10 lg:justify-around">
            <CartGrid />
            <CartTotal />
          </div>
          <div className="block md:hidden">
            <CartGrid />
          </div>
        </>
      ) : (
        <div className="mt-32 mb-6 text-center text-slate-400 text-4xl font-extrabold">
          Your Cart Is Empty
        </div>
      )}

      <button className="text-xs p-1 xs1:text-base button hover:bg-green-400 bg-green-500 font-medium text-white items-center w-fit">
        <Link to={"/shop"} className=" flex justify-center gap-2 items-center">
          <ArrowBackIcon fontSize="small" />
          <div>Continue Shopping</div>
        </Link>
      </button>

      <div className="md:hidden flex justify-around items-center sticky bottom-0 h-16 py-2 border-2 rounded-t-xl bg-white">
        <div className="flex gap-1 font-bold text-xl text-green-500">
          <span className="text-slate-600">Total : </span>
          <span>₹ {subTotal + shipping}</span>
          <KeyboardArrowDownSharpIcon onClick={toggleCartTotal} />
        </div>
        <button className="button  hover:bg-green-400 p-1 bg-green-500 text-white">
          Place Order <LogoutRoundedIcon fontSize="small" />
        </button>
      </div>
      {isOpen && (
        <div className="fixed md:hidden inset-0 bg-gray-800 bg-opacity-50 z-40"></div>
      )}

      <div
        ref={CartTotalRef}
        className={`w-full md:hidden fixed bottom-0 left-0 h-fit bg-white shadow-md transform rounded-t-2xl overflow-y-scroll ${
          isOpen ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div
          className="text-right text-slate-500 mr-8 mt-2"
          onClick={toggleCartTotal}
        >
          <CloseOutlinedIcon />
        </div>
        <CartTotal />
      </div>
    </div>
  );
};

export default Cart;
