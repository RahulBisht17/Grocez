import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: data });
    alert("Product added to cart.");
  };

  return (
    <div className="flex flex-col h-auto w-72 m-2 px-4 pb-4 border-2 shadow-lg border-solid rounded-2xl">
      <div className="border-solid h-56">
        <Link to={`/products/${data.id}`}>
          <img src={data.catImg} className="h-full m-auto pt-6 productImg" />
        </Link>
      </div>
      <div className="pt-6 font-light">
        <div className="mb-2">
          <div className="h-14 mb-2">
            <Link to={`/products/${data.id}`} className="font-bold text-lg">
              {data.productName}
            </Link>
          </div>
          <div className=" flex flex-row gap-1 my-1">
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
            <a href="#" className="text-green-600 font-bold">
              {data.brand}
            </a>
          </span>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2 items-center">
              <span className="font-semibold text-2xl text-green-500">
                ₹{data.price}
              </span>
              <span className="line-through decoration-slate-400">
                ₹{data.oldPrice}
              </span>
            </div>
            <button
              onClick={addToCart}
              className="border-2 border-green-500 bg-green-300 rounded-md w-20 font-extrabold text-green-700"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
