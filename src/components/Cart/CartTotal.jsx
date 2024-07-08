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
    <div className="flex flex-col basis-1/3 gap-2 border-2 h-fit p-4 py-10 text-center font-semibold text-xl text-slate-500">
      <div className="flex flex-col text-start">
        <div className="text-3xl text-slate-800">Apply Coupon</div>
        <span className="text-lg">Using A Promo Code? </span>
        <div className="flex gap-2 mt-4">
          <input
            className="border-2 rounded-md text-lg px-3 font-normal"
            placeholder="Enter Your Coupon"
          ></input>

          <button className="button bg-green-500 text-lg font-normal text-white">
            <LocalOfferRoundedIcon />
            Apply
          </button>
        </div>
      </div>

      <div className="flex justify-around p-2 border-2 mt-10">
        <span>Sub Total</span>
        <span className="text-green-500">₹ {subTotal}</span>
      </div>
      <div className="flex justify-around p-2 border-2 ">
        <span>Shipping</span>
        <span>₹ {shipping}</span>
      </div>
      <div className="flex justify-around p-2 border-2 ">
        <span>Total</span>
        <span className="text-green-500">₹ {shipping + subTotal}</span>
      </div>
      <button className="button w-full mt-4 bg-green-500 text-white">
        Proceed to checkout <LogoutRoundedIcon />
      </button>
    </div>
  );
};

export default CartTotal;
