import React, { useContext } from "react";
import FilterContext from "../../Context/FilterContext";
import ProductCard from "../Product/ProductCard";
import data from "../../Data/data";

const ProductList = () => {
  const { selectedBrands, price, discount, rating, selectedCategory } =
    useContext(FilterContext);

  const filteredProducts = data.productData
    .find((obj) => obj.cat_name === selectedCategory)
    .products.filter((product) => {
      return (
        (selectedBrands.length === 0 ||
          selectedBrands.includes(product.brand)) &&
        product.price >= price[0] &&
        product.price <= price[1] &&
        product.discount >= discount[0] &&
        product.discount <= discount[1] &&
        product.rating >= rating[0] &&
        product.rating <= rating[1]
      );
    });

  return (
    <div className="flex flex-wrap justify-center">
      {filteredProducts.length === 0 ? (
        <div className="m-auto text-center text-4xl text-gray-500">
          No Result Found.
        </div>
      ) : (
        filteredProducts.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))
      )}
    </div>
  );
};

export default ProductList;
