import React from "react";
import Filter from "../components/Shop/Filter";
import ProductList from "../components/Shop/ProductList";
import CatList from "../components/Shop/CatList";
import { FilterProvider } from "../Context/FilterContext";

const Shop = () => {
  return (
    <FilterProvider>
      <div className="mx-6 my-6 flex ">
        <div className="hidden flex-col gap-10 lg:flex lg:border-r-4 pr-4 xl:pr-8">
          <CatList />
          <Filter />
        </div>

        <div className="lg:pl-6 w-full">
          <ProductList />
        </div>
      </div>
    </FilterProvider>
  );
};

export default Shop;
