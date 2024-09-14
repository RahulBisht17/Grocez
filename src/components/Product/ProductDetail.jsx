import React, { useState, useContext } from "react";
import data from "../../Data/data";
import { useParams } from "react-router-dom";
import CartContext from "../../Context/CartContext";
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
  const [selectedImg, setSelectedImg] = useState(proData.catImg);
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 my-6 border-2 py-6 px-4 md:px-12 lg:px-32">
        <div className="w-full md:w-1/3 flex flex-col border-2">
          <div className="border-2 p-4 flex justify-center">
            <img src={selectedImg} className="w-full h-auto" alt="Product" />
          </div>

          <div className="flex mt-2 overflow-x-auto scrollbar-hide">
            {proData.productImages.map((img) => (
              <img
                src={img}
                key={img}
                onClick={() => {
                  setSelectedImg(img);
                }}
                className={`w-20 cursor-pointer ${
                  img === selectedImg ? "border-2 border-blue-500" : ""
                }`}
                alt="Product Thumbnail"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col font-semibold w-full md:w-2/3 border-2">
          <div className="text-2xl text-white bg-green-500 w-fit p-2 rounded-tl-xl rounded-br-xl mb-4">
            {proData.discount}% OFF
          </div>
          <span className="text-3xl md:text-4xl font-extrabold mb-3">
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
          <div className="flex flex-col md:flex-row gap-2 mb-2 items-start md:items-center">
            <div className="font-bold text-3xl md:text-4xl text-green-500">
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
          <div className="text-xl flex flex-col md:flex-row gap-3 mt-4 items-start md:items-center font-semibold text-gray-900">
            Size/Weight:
            <ul className="flex flex-row flex-wrap gap-4">
              {proData.weight.map((elem) => (
                <button key={elem} className="button p-2">
                  {elem}
                </button>
              ))}
            </ul>
          </div>
          <div className="flex flex-col md:flex-row gap-3 mt-4">
            {cart.find((item) => item.id == data.id) ? (
              <div className="flex w-full md:w-fit items-center font-bold text-lg bg-green-500 rounded-md">
                <button
                  onClick={() => decrement(data)}
                  className="w-8 py-2 text-white"
                >
                  -
                </button>
                {cart.map(
                  (item) =>
                    item.id == data.id && (
                      <div
                        key={item.id}
                        className="w-8 py-2 bg-white text-center text-green-500"
                      >
                        {item.quantity}
                      </div>
                    )
                )}
                <button
                  onClick={() => increment(data)}
                  className="w-8 py-2 text-white"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={addToCart}
                className="border-2 bg-green-500 hover:bg-green-300 border-green-300 rounded-md w-full md:w-36 py-3 font-bold text-white text-lg"
              >
                <ShoppingCartOutlinedIcon /> Add To Cart
              </button>
            )}
            <button className="button p-2">
              <FavoriteBorderRoundedIcon />
            </button>
            <button className="button p-2">
              <CompareArrowsOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
