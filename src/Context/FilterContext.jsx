import React, { createContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [price, setPrice] = useState([10, 2000]);
  const [discount, setDiscount] = useState([5, 25]);
  const [rating, setRating] = useState([0, 5]);
  const [selectedCategory, setSelectedCategory] = useState("Dals & Pulses");

  return (
    <FilterContext.Provider
      value={{
        selectedBrands,
        setSelectedBrands,
        price,
        setPrice,
        discount,
        setDiscount,
        rating,
        setRating,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
