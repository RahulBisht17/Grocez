import React, { useContext } from "react";
import CartContext from "../../Context/CartContext";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";

const CartTotal = () => {
  const { cart } = useContext(CartContext);
  let subTotal = 0;
  {
    cart.map((item) => (subTotal += item.price * item.quantity));
  }
  const shipping = 50;

  return (
    <div className="w-11/12 mx-auto mt-2  md:w-1/3 md:mt-5 md:flex flex-col gap-2 border-2 h-fit p-2 py-4 lg:p-4 lg:py-6 text-center font-semibold text-lg text-slate-500">
      <div className="flex flex-col text-start text-sm xl:text-lg">
        <div className="text-xl lg:text-2xl xl:text-3xl text-slate-700">
          Apply Coupon
        </div>
        <span>Using A Promo Code? </span>
        <div className="flex gap-2 mt-2">
          <input
            className="w-2/3 border-2 rounded-md px-1 font-normal"
            placeholder="Enter Your Coupon"
          ></input>

          <button className="button flex  hover:bg-green-400 bg-green-500 font-normal text-white">
            <LocalOfferRoundedIcon fontSize="small" />
            Apply
          </button>
        </div>
      </div>
      <div className="space-y-2 mt-10 text-sm lg:text-base xl:text-lg">
        <div className="flex justify-around p-1 border-2">
          <span>Sub Total</span>
          <span className="text-green-500">₹ {subTotal}</span>
        </div>
        <div className="flex justify-around p-1 border-2 ">
          <span>Shipping</span>
          <span>₹ {shipping}</span>
        </div>
        <div className="flex justify-around p-1 border-2 ">
          <span>Total</span>
          <span className="text-green-500">₹ {shipping + subTotal}</span>
        </div>
      </div>
      <button className="button w-full p-1 mt-6  hover:bg-green-400 bg-green-500 text-white text-sm lg:text-base xl:text-lg">
        Proceed to checkout <LogoutRoundedIcon fontSize="small" />
      </button>
    </div>
  );
};

export default CartTotal;
