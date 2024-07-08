import React, { useContext, useState } from "react";
import Slider from "@mui/material/Slider";
import BrandSelector from "./BrandSelector";
import FilterContext from "../../Context/FilterContext";

const Filter = () => {
  function valuetext(value) {
    return `${value}`;
  }
  const { price, setPrice, discount, setDiscount, rating, setRating } =
    useContext(FilterContext);

  const handlePrice = (event, newValue) => {
    setPrice(newValue);
  };

  const handleDiscount = (event, newValue) => {
    setDiscount(newValue);
  };

  const handleRating = (event, newValue) => {
    setRating(newValue);
  };

  return (
    <div className=" border-2 rounded-md p-8 shadow-lg">
      <h3 className="font-extrabold text-3xl mb-8 pb-2 border-b-4">Filter</h3>
      <div className="flex flex-col gap-4">
        <div className="text-lg font-semibold">
          <span className=" text-2xl  font-semibold">Price</span>
          <Slider
            getAriaLabel={() => "Price range"}
            value={price}
            onChange={handlePrice}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={100}
            max={1000}
            color="success"
          />
          <div className="flex justify-between text-sm">
            <span>To: {valuetext(price[0])}</span>
            <span>From: {valuetext(price[1])}</span>
          </div>
        </div>
        <div className="text-lg font-semibold">
          <span className=" text-2xl  font-semibold">Discount</span>
          <Slider
            getAriaLabel={() => "Discount range"}
            value={discount}
            onChange={handleDiscount}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={5}
            max={25}
            color="success"
          />
          <div className="flex justify-between text-sm">
            <span>To: {valuetext(discount[0])}</span>
            <span>From: {valuetext(discount[1])}</span>
          </div>
        </div>
        <div className="text-lg font-semibold">
          <span className=" text-2xl  font-semibold">Rating</span>
          <Slider
            getAriaLabel={() => "Rating range"}
            value={rating}
            onChange={handleRating}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={1}
            max={5}
            step={0.5}
            color="success"
          />
          <div className="flex justify-between text-sm">
            <span>To: {valuetext(rating[0])}</span>
            <span>From: {valuetext(rating[1])}</span>
          </div>
        </div>
      </div>
      <div className="text-lg mt-6">
        <span className=" text-2xl  font-semibold">Brands</span>
        <BrandSelector />
      </div>
    </div>
  );
};

export default Filter;
