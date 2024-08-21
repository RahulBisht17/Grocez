import React from "react";
import data from "../../Data/data";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div>
      {data.productData.map((cat) =>
        cat.products.map(
          (val) => val.rating === 5 && <ProductCard key={val.id} data={val} />
        )
      )}
    </div>
  );
};

export default Products;
