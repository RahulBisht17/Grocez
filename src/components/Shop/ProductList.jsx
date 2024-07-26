import React, { useEffect, useRef, useContext, useState, useMemo } from "react";
import FilterContext from "../../Context/FilterContext";
import ProductCard from "../Product/ProductCard";
import data from "../../Data/data";
import Filter from "../Shop/Filter";
import CatList from "../Shop/CatList";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";

const ProductList = () => {
  const { selectedBrands, price, discount, rating, selectedCategory } =
    useContext(FilterContext);

  const filteredProducts = useMemo(() => {
    return data.productData
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
  }, [selectedBrands, price, discount, rating, selectedCategory]);

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

  const [isOpen, setIsOpen] = useState(false);
  const SortRef = useRef(null);

  const toggleSort = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOutside = (event) => {
    if (SortRef.current && !SortRef.current.contains(event.target)) {
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
    <div className="flex flex-col gap-6">
      <div className="flex justify-around lg:justify-end  lg:pr-14">
        <div className="lg:hidden">
          <CatList />
        </div>
        <div className="lg:hidden">
          <Filter />
        </div>
        <div className="xs2:hidden border-2 p-1 text-center rounded-lg">
          <div onClick={toggleSort} className=" text-slate-400">
            <SwapVertRoundedIcon fontSize="medium" />
          </div>
          {isOpen && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"></div>
          )}
          <div
            ref={SortRef}
            className={`w-full fixed bottom-0 left-0 h-2/3 bg-white shadow-md transform pt-8 rounded-t-2xl ${
              isOpen ? "translate-y-0" : "translate-y-full"
            } transition-transform duration-300 ease-in-out z-50`}
          >
            <div className="flex flex-col space-y-8 mb-10 text-xl ">
              <button
                onClick={() => {
                  setSortCriteria("default");
                  toggleSort();
                }}
                className={`hover:text-green-300 ${
                  sortCriteria === "default" ? "text-green-500" : ""
                }`}
              >
                Default Sorting
              </button>
              <button
                onClick={() => {
                  setSortCriteria("price-asc");
                  toggleSort();
                }}
                className={`hover:text-green-400 ${
                  sortCriteria === "price-asc" ? "text-green-500" : ""
                }`}
              >
                Sort by Price: Low to High
              </button>
              <button
                onClick={() => {
                  setSortCriteria("price-desc");
                  toggleSort();
                }}
                className={`hover:text-green-300 ${
                  sortCriteria === "price-desc" ? "text-green-500" : ""
                }`}
              >
                Sort by Price: High to Low
              </button>
              <button
                onClick={() => {
                  setSortCriteria("rating");
                  toggleSort();
                }}
                className={`hover:text-green-300 ${
                  sortCriteria === "rating" ? "text-green-500" : ""
                }`}
              >
                Sort by Rating
              </button>
              <button
                onClick={() => {
                  setSortCriteria("discount");
                  toggleSort();
                }}
                className={`hover:text-green-300 ${
                  sortCriteria === "discount" ? "text-green-500" : ""
                }`}
              >
                Sort by Discount
              </button>
            </div>
          </div>
        </div>

        <div className="hidden xs2:block border-2 rounded-lg p-2 font-semibold w-fit ">
          <select
            id="sort"
            type="dropdown"
            onChange={handleSort}
            className="w-36 md:w-full"
          >
            <option value="default">Default Sorting</option>
            <option value="price-asc">Sort by Price: Low to High</option>
            <option value="price-desc">Sort by Price: High to Low</option>
            <option value="rating">Sort by Rating</option>
            <option value="discount">Sort by Discount</option>
          </select>
        </div>
      </div>

      <div className=" flex flex-wrap justify-evenly gap-x-2 gap-y-10">
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
