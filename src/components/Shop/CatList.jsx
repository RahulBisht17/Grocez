import React, { useContext } from "react";
import data from "../../Data/data";
import FilterContext from "../../Context/FilterContext";

const CatList = () => {
  const { selectedCategory, setSelectedCategory } = useContext(FilterContext);

  return (
    <div className=" border-2 rounded-md p-8 shadow-lg">
      <h3 className="font-extrabold text-3xl border-b-4 pb-2">Category</h3>
      <div className="flex flex-col justify-evenly gap-4 mt-8">
        {data.productData.map((val) => (
          <button
            key={val.cat_name}
            onClick={() => setSelectedCategory(val.cat_name)}
            className={`flex justify-between gap-4 border-2 rounded-md p-2 font-semibold ${
              selectedCategory === val.cat_name ? "bg-green-300" : "bg-white"
            }`}
          >
            <span>{val.cat_name}</span>
            <span
              className={`text-center rounded-full w-6 h-6 ${
                selectedCategory === val.cat_name ? "bg-white" : "bg-green-300"
              }`}
            >
              {val.products.length}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CatList;
