import React, { useContext, useEffect, useRef, useState } from "react";
import Slider from "@mui/material/Slider";
import BrandSelector from "./BrandSelector";
import FilterContext from "../../Context/FilterContext";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";

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
  const [isOpen, setIsOpen] = useState(false);
  const FilterRef = useRef(null);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOutside = (event) => {
    if (FilterRef.current && !FilterRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="hidden lg:block lg:w-60 xl:w-64 lg:p-4 xl:p-5 border-2 rounded-md shadow-lg">
        <h1 className="font-extrabold lg:text-xl xl:text-3xl mb-5 pb-2 border-b-4">
          Filter
        </h1>
        <div className="flex flex-col gap-5">
          <div className="text-lg font-semibold">
            <span className="text-xl  font-medium">Price</span>
            <Slider
              getAriaLabel={() => "Price range"}
              value={price}
              onChange={handlePrice}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={100}
              max={1000}
              color="success"
              size="small"
            />
            <div className="-mt-3 font-medium flex justify-between text-sm">
              <span>To: {valuetext(price[0])}</span>
              <span>From: {valuetext(price[1])}</span>
            </div>
          </div>
          <div className="text-lg font-semibold">
            <span className=" text-xl font-medium">Discount</span>
            <Slider
              getAriaLabel={() => "Discount range"}
              value={discount}
              onChange={handleDiscount}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={5}
              max={25}
              color="success"
              size="small"
            />
            <div className="-mt-3 flex font-medium justify-between text-sm">
              <span>To: {valuetext(discount[0])}</span>
              <span>From: {valuetext(discount[1])}</span>
            </div>
          </div>
          <div className="text-lg font-semibold">
            <span className="text-xl  font-medium">Rating</span>
            <Slider
              getAriaLabel={() => "Rating range"}
              value={rating}
              onChange={handleRating}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={1}
              max={5}
              step={0.5}
              size="small"
              color="success"
            />
            <div className=" -mt-3 flex font-medium justify-between text-sm">
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
      <div
        className="xs2:hidden border-2 p-1 rounded-lg text-slate-400 h-full"
        onClick={toggleFilter}
      >
        <FilterAltRoundedIcon fontSize="medium" />
      </div>
      <div
        className="hidden xs2:flex lg:hidden font-semibold w-36 md:w-48 border-2 rounded-lg p-2  justify-between"
        onClick={toggleFilter}
      >
        <h3>Filter</h3>

        <KeyboardArrowDownSharpIcon fontSize="small" />
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"></div>
      )}

      <div
        ref={FilterRef}
        className={`w-full fixed bottom-0 left-0 h-2/3 bg-white shadow-md transform pt-8 rounded-t-2xl overflow-y-scroll ${
          isOpen ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="grid grid-cols-2 mx-4  xs1:mx-10 gap-2 xs1:gap-14 my-6">
          <div className="flex flex-col gap-6 xs1:gap-10 p-4 border-2">
            <div className="text-lg font-semibold ">
              <span className="xs1:text-xl  font-medium">Price</span>
              <Slider
                getAriaLabel={() => "Price range"}
                value={price}
                onChange={handlePrice}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={100}
                max={1000}
                color="success"
                size="small"
              />
              <div className="-mt-3 font-medium flex justify-between text-xs xs1:text-sm">
                <span>To: {valuetext(price[0])}</span>
                <span>From: {valuetext(price[1])}</span>
              </div>
            </div>
            <div className="text-lg font-semibold">
              <span className=" xs1:text-xl  font-medium">Discount</span>
              <Slider
                getAriaLabel={() => "Discount range"}
                value={discount}
                onChange={handleDiscount}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={5}
                max={25}
                color="success"
                size="small"
              />
              <div className="-mt-3 flex font-medium justify-between text-xs xs1:text-sm">
                <span>To: {valuetext(discount[0])}</span>
                <span>From: {valuetext(discount[1])}</span>
              </div>
            </div>
            <div className="text-lg font-semibold">
              <span className="xs1:text-xl  font-medium">Rating</span>
              <Slider
                getAriaLabel={() => "Rating range"}
                value={rating}
                onChange={handleRating}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={1}
                max={5}
                step={0.5}
                size="small"
                color="success"
              />
              <div className=" -mt-3 flex font-medium justify-between text-xs xs1:text-sm">
                <span>To: {valuetext(rating[0])}</span>
                <span>From: {valuetext(rating[1])}</span>
              </div>
            </div>
          </div>

          <div className="text-lg border-2 p-4">
            <span className=" text-xl xs1:text-2xl  font-semibold">Brands</span>
            <BrandSelector />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
