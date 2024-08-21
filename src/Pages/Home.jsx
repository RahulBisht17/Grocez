import React from "react";
import BannerSlider from "../components/Home/BannerSlider";
import ProductBanner from "../components/Home/ProductBanner";
import PopularProducts from "../components/Home/PopularProducts";
const Home = () => {
  return (
    <div>
      <BannerSlider />
      <ProductBanner />
      <PopularProducts />
    </div>
  );
};

export default Home;
