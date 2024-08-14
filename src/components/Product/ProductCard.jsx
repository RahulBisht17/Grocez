import React, { useContext } from "react";
import CartContext from "../../Context/CartContext";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  const { cart, dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: data });
    alert("Product added to cart.");
  };
  const increment = (product) => {
    dispatch({ type: "INCREMENT", payload: product });
  };
  const decrement = (product) => {
    dispatch({ type: "DECREMENT", payload: product });
  };

  return (
    <div className="flex flex-col  w-64 px-3 pb-4 border-2 shadow-lg border-solid rounded-2xl">
      <span className="w-fit p-2 -mx-3  rounded-tl-2xl rounded-br-2xl bg-green-400">
        {data.discount}% OFF
      </span>
      <div className="border-solid h-52">
        <Link to={`/products/${data.id}`}>
          <img src={data.catImg} className="h-full mx-auto pt-4 productImg" />
        </Link>
      </div>
      <div className="pt-4 font-light">
        <div className="mb-2">
          <div className="h-10 mb-2">
            <Link to={`/products/${data.id}`} className="font-bold text-base">
              {data.productName}
            </Link>
          </div>
          <div className=" flex flex-row gap-1 mt-2">
            <Rating
              name="half-rating-read"
              defaultValue={data.rating}
              precision={0.5}
              readOnly
            />
            <span>({data.rating})</span>
          </div>
          <span>
            By :{" "}
            <a href="#" className="text-green-600 font-medium">
              {data.brand}
            </a>
          </span>
          <div className="flex flex-row justify-between mt-1">
            <div className="flex flex-row gap-2 items-center">
              <span className="font-semibold text-2xl text-green-500">
                ₹{data.price}
              </span>
              <span className="line-through decoration-slate-400">
                ₹{data.oldPrice}
              </span>
            </div>
            {cart.find((item) => item.id == data.id) ? (
              <div className="flex w-fit items-center font-bold text-lg bg-green-500 rounded-md ">
                <button
                  onClick={() => decrement(data)}
                  className="w-7  text-white"
                >
                  -
                </button>
                {cart.map(
                  (item) =>
                    item.id == data.id && (
                      <div
                        key={item.id}
                        className="w-10 bg-white text-center text-green-500"
                      >
                        {item.quantity}
                      </div>
                    )
                )}
                <button
                  onClick={() => increment(data)}
                  className="w-7 text-white"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={addToCart}
                className=" button border-2 bg-green-500 hover:bg-green-300 border-green-300 rounded-md w-24 font-bold text-green-700"
              >
                Add
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
