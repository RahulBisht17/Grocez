import React, { useContext } from "react";
import data from "../Data/data";
import { useParams } from "react-router-dom";
import CartContext from "../Context/CartContext";
import Rating from "@mui/material/Rating";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";

const ProductDetail = () => {
  const param = useParams();
  const proId = param.id;
  var proData;
  data.productData.map((cat) =>
    cat.products.map((val) => {
      if (val.id == proId) {
        proData = val;
      }
    })
  );

  const { dispatch } = useContext(CartContext);
  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: proData });
    alert("Product added to cart.");
  };

  return (
    <>
      <div className="flex flex-row border-t-4 mt-6 py-6 px-32 border-solid">
        <div className="w-1/3">
          <img src={proData.catImg} />
        </div>
        <div className="flex flex-col font-semibold w-2/3 py-6">
          <span className="text-3xl font-extrabold mb-3">
            {proData.productName}
          </span>
          <span>
            <Rating
              name="half-rating-read"
              defaultValue={proData.rating}
              precision={0.5}
              readOnly
            />
          </span>
          <div className="flex flex-row gap-2 my-6 items-center">
            <div className="font-bold text-4xl text-green-500">
              ₹{proData.price}
            </div>
            <div className="flex flex-col font-semibold">
              <h5 className="text-yellow-500">{proData.discount}% OFF</h5>
              <h5 className="line-through text-slate-400">
                ₹{proData.oldPrice}
              </h5>
            </div>
          </div>
          <p className="text-lg text-slate-500 mb-4">{proData.description}</p>
          <div className="text-xl flex flex-row gap-3 my-4 items-center font-semibold text-gray-900">
            Size/Weight:
            <ul className="flex flex-row gap-2">
              {proData.weight.map((elem) => (
                <button className="button">{elem}</button>
              ))}
            </ul>
          </div>
          <div className="flex flex-row gap-3">
            <button
              onClick={addToCart}
              className="button border-green-500 bg-green-500 text-white"
            >
              <ShoppingCartOutlinedIcon /> Add To Cart
            </button>
            <button className="button">
              <FavoriteBorderRoundedIcon />
            </button>
            <button className="button">
              <CompareArrowsOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
