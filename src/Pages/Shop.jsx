import React from "react";
import Filter from "../components/Shop/Filter";
import ProductList from "../components/Shop/ProductList";
import CatList from "../components/Shop/CatList";
import { FilterProvider } from "../Context/FilterContext";

const Shop = () => {
  return (
    <FilterProvider>
      <div className=" p-12 flex gap-12 justify-evenly">
        <div className="flex flex-col gap-10">
          <CatList />
          <Filter />
        </div>

        <div className="basis-5/6 border-l-2 px-10">
          <ProductList />
        </div>
      </div>
    </FilterProvider>
  );
};

export default Shop;
