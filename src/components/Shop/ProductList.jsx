import React, { useEffect, useContext, useState } from "react";
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

  const [sortedData, setSortedData] = useState(filteredProducts);
  const [sortCriteria, setSortCriteria] = useState("default");
  const handleSort = (event) => {
    setSortCriteria(event.target.value);
  };
  const sortProductsByPriceAsc = (products) => {
    return [...products].sort((a, b) => a.price - b.price);
  };

  const sortProductsByPriceDesc = (products) => {
    return [...products].sort((a, b) => b.price - a.price);
  };

  const sortProductsByRating = (products) => {
    return [...products].sort((a, b) => b.rating - a.rating);
  };

  const sortProductsByDiscount = (products) => {
    return [...products].sort((a, b) => b.discount - a.discount);
  };
  useEffect(() => {
    let sortedArray;
    switch (sortCriteria) {
      case "price-asc":
        sortedArray = sortProductsByPriceAsc(filteredProducts);
        break;
      case "price-desc":
        sortedArray = sortProductsByPriceDesc(filteredProducts);
        break;
      case "rating":
        sortedArray = sortProductsByRating(filteredProducts);
        break;
      case "discount":
        sortedArray = sortProductsByDiscount(filteredProducts);
        break;
      default:
        sortedArray = filteredProducts;
    }
    setSortedData(sortedArray);
  }, [sortCriteria, filteredProducts]);

  return (
    <div className="flex flex-col gap-3">
      <div className="self-end mr-14 border-2 rounded-lg p-2 font-semibold ">
        <select id="sort" type="dropdown" onChange={handleSort}>
          <option value="default">Default Sorting</option>
          <option value="price-asc">Sort by Price: Low to High</option>
          <option value="price-desc">Sort by Price: High to Low</option>
          <option value="rating">Sort by Rating</option>
          <option value="discount">Sort by Discount</option>
        </select>
      </div>
      <div
        className="flex flex-wrap gap-5
      "
      >
        {filteredProducts.length === 0 ? (
          <div className="m-auto text-center text-4xl text-gray-500">
            No Result Found.
          </div>
        ) : (
          sortedData.map((item) => <ProductCard key={item.id} data={item} />)
        )}
      </div>
    </div>
  );
};

export default ProductList;
