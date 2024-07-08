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
    <div className="flex flex-col gap-3 basis-4/5 container">
      <span className="flex flex-row justify-between font-bold text-lg text-slate-500">
        <span>There are {cart.length} products in your cart</span>
        <button onClick={clearCart}>
          <DeleteOutlineOutlinedIcon />
          Clear Cart
        </button>
      </span>
      <div className="border-2 rounded-xl">
        <div className="grid grid-cols-7 gap-4 bg-gray-200 p-4 text-center font-semibold rounded-t-lg">
          <div className="col-span-3">Product</div>
          <div>Unit Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
          <div>Remove</div>
        </div>
        {cart.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-7 gap-4 p-2 px-5 border-b-2  items-center text-center font-semibold text-lg text-slate-700"
          >
            <div className="col-span-3 flex items-center">
              <img
                className="w-28 object-cover"
                src={product.img}
                alt={product.name}
              />
              <div className="flex flex-col gap-2">
                <span className="ml-4 text-wrap w-80">{product.name}</span>
                <span className=" flex flex-row gap-2 justify-center items-center text-lg">
                  <Rating
                    name="half-rating-read"
                    defaultValue={product.rating}
                    precision={0.5}
                    readOnly
                  />
                  ({product.rating})
                </span>
              </div>
            </div>
            <div className="text-slate-500 text-2xl">₹ {product.price}</div>
            <div className="text-lg">
              <button onClick={() => increment(product)}>+</button>
              <div className="text-3xl">{product.quantity}</div>
              <button onClick={() => decrement(product)}>-</button>
            </div>
            <div className="text-green-500 text-2xl">
              ₹ {product.price * product.quantity}
            </div>
            <div>
              <button onClick={() => removeFromCart(product)}>
                <DeleteOutlineOutlinedIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartGrid;
