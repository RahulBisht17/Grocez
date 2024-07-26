import React, { useContext } from "react";
import CartContext from "../../Context/CartContext";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Rating from "@mui/material/Rating";

const CartGrid = () => {
  const { cart, dispatch } = useContext(CartContext);

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };
  const increment = (product) => {
    dispatch({ type: "INCREMENT", payload: product });
  };
  const decrement = (product) => {
    dispatch({ type: "DECREMENT", payload: product });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="md:w-3/4 lg:w-4/6 mt-5 space-y-3">
      <span className="flex mx-2 justify-between font-bold text-xs xs1:text-base lg:text-lg text-slate-500">
        <span>There are {cart.length} products in your cart</span>
        <button onClick={clearCart} className="flex align-middle">
          <DeleteOutlineOutlinedIcon />
          <span>Clear Cart</span>
        </button>
      </span>
      <div className="border-2 rounded-xl">
        <div className="grid grid-cols-6 xs1:grid-cols-7  bg-gray-200 p-1 xs1:p-4 text-center text-xs lg:text-base font-semibold rounded-t-lg">
          <div className="col-span-3">Product</div>
          <div>Unit Price</div>
          <div>Quantity</div>
          <div className="hidden xs1:block">Subtotal</div>
          <div>Remove</div>
        </div>
        {cart.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-6 xs1:grid-cols-7 py-1 lg:px-3 border-t-2 items-center text-center text-slate-700 font-semibold text-sm xs1:text-lg lg:text-xl"
          >
            <div className="col-span-3 flex items-center">
              <img
                className="w-14 xs1:w-20 lg:w-24"
                src={product.img}
                alt={product.name}
              />
              <div className="flex flex-col mx-auto">
                <span className="text-wrap font-medium text-xs xs1:text-sm lg:text-base">
                  {product.name}
                </span>
                <span className=" hidden xs1:flex flex-row gap-2 justify-center items-center text-sm">
                  <Rating
                    name="half-rating-read"
                    defaultValue={product.rating}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                  ({product.rating})
                </span>
              </div>
            </div>
            <div className="text-slate-500 ">₹ {product.price}</div>
            <div className="text-sm xs1:text-base lg:text-xl">
              <button onClick={() => increment(product)}>+</button>
              <div>{product.quantity}</div>
              <button onClick={() => decrement(product)}>-</button>
            </div>
            <div className="hidden xs1:block text-green-500">
              ₹ {product.price * product.quantity}
            </div>
            <div>
              <button onClick={() => removeFromCart(product)}>
                <DeleteOutlineOutlinedIcon className="text-sm text-slate-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartGrid;
