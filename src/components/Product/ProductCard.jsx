import React, { useContext } from "react";
import CartContext from "../../Context/CartContext";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  const { cart, dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: data });
  };
  const increment = (product) => {
    dispatch({ type: "INCREMENT", payload: product });
  };
  const decrement = (product) => {
    dispatch({ type: "DECREMENT", payload: product });
  };

  return (
    <div className="flex flex-col w-40 xs1:w-48 md:w-52 lg:w-60 px-2 xs1:px-3 pb-1 lg:pb-2 border-2 shadow-lg border-solid rounded-2xl mb-2">
      <span className="w-fit p-1 lg:py-1 px-2 -mx-2 xs1:-mx-3 text-sm lg:text-base  rounded-tl-2xl rounded-br-2xl bg-green-400">
        {data.discount}% OFF
      </span>
      <div className="h-32 xs1:h-40 lg:h-44">
        <Link to={`/products/${data.id}`}>
          <img
            loading="lazy"
            src={data.catImg}
            className="h-full mx-auto pt-4 productImg"
          />
        </Link>
      </div>
      <div className="pt-2 font-light">
        <div className="mb-2">
          <div className="h-10  mb-1 xs1:mb-2 ">
            <Link
              to={`/products/${data.id}`}
              className="font-bold text-sm lg:text-base tracking-tighter line-clamp-2"
            >
              {data.productName}
            </Link>
          </div>
          <div className="items-center -mb-1 xs1:mb-0 text-sm lg:text-base flex flex-row gap-1">
            <Rating
              name="half-rating-read"
              defaultValue={data.rating}
              precision={0.5}
              readOnly
              size="small"
            />
            <span>({data.rating})</span>
          </div>
          <span className=" text-xs xs1:text-sm lg:text-base">
            By :{" "}
            <a href="#" className="text-green-600  font-medium">
              {data.brand}
            </a>
          </span>
          <div className="flex flex-row justify-between lg:mt-1">
            <div className="flex flex-row gap-1 lg:gap-2 items-center">
              <span className="font-semibold text-base xs1:text-lg lg:text-2xl text-green-500">
                ₹{data.price}
              </span>
              <span className="line-through text-sm xs1:text-base decoration-slate-400">
                ₹{data.oldPrice}
              </span>
            </div>
            {cart.find((item) => item.id == data.id) ? (
              <div className=" flex w-fit items-center font-bold text-lg bg-green-500 rounded-md ">
                <button
                  onClick={() => decrement(data)}
                  className="w-5 md:w-6 lg:w-7  text-white"
                >
                  -
                </button>
                {cart.map(
                  (item) =>
                    item.id == data.id && (
                      <div
                        key={item.id}
                        className="w-6 md:w-8 lg:w-10  bg-white text-center text-green-500"
                      >
                        {item.quantity}
                      </div>
                    )
                )}
                <button
                  onClick={() => increment(data)}
                  className="w-5 md:w-6 lg:w-7 text-white"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={addToCart}
                className=" border-2 bg-green-500 hover:bg-green-300 border-green-300 rounded-md w-16 md:w-20 lg:w-24 font-bold text-white"
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
