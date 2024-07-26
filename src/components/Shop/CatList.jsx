import React, { useContext } from "react";
import data from "../../Data/data";
import FilterContext from "../../Context/FilterContext";

const CatList = () => {
  const { selectedCategory, setSelectedCategory } = useContext(FilterContext);
  const handleCategory = (event) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <>
      <div className="hidden lg:block lg:w-60 xl:w-64 border-2 rounded-md lg:p-4 xl:p-5 shadow-lg">
        <h3 className="font-extrabold lg:text-xl xl:text-3xl border-b-4 pb-2">
          Category
        </h3>
        <div className="flex flex-col justify-evenly gap-4 mt-8">
          {data.productData.map((val) => (
            <button
              key={val.cat_name}
              onClick={() => setSelectedCategory(val.cat_name)}
              className={`flex justify-between gap-4 border-2 rounded-md p-2 font-semibold text-sm ${
                selectedCategory === val.cat_name ? "bg-green-300" : "bg-white"
              }`}
            >
              <span>{val.cat_name}</span>
              <span
                className={`text-center rounded-full h-6 w-6   ${
                  selectedCategory === val.cat_name
                    ? "bg-white"
                    : "bg-green-300"
                }`}
              >
                {val.products.length}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="lg:hidden border-2 rounded-lg p-2 font-semibold w-fit">
        <select
          type="dropdown"
          onChange={handleCategory}
          className="w-36 md:w-full"
        >
          {data.productData.map((val) => (
            <option key={val.cat_name} value={val.cat_name}>
              {val.cat_name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CatList;
