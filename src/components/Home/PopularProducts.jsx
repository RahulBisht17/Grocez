import React from "react";
import data from "../../Data/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../Product/ProductCard";
import { Link } from "react-router-dom";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function NextArrow(props) {
  const { onClick } = props;

  return (
    <div
      className="absolute top-1/2 right-6 transform -translate-y-1/2 z-10 bg-gray-100/70 rounded-full flex items-center justify-center w-10 h-10 shadow-md cursor-pointer"
      onClick={onClick}
    >
      <ArrowForwardIos className="text-black" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-6 transform -translate-y-1/2 z-10 bg-gray-100/70 rounded-full flex items-center justify-center w-10 h-10 shadow-md cursor-pointer"
      onClick={onClick}
    >
      <ArrowBackIos className="text-black" />
    </div>
  );
}

const PopularProducts = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1363,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1034,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 698,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full px-3 pt-4 s1:pt-8 md:px-6 mx-auto">
      <>
        <div className="flex justify-between px-4 items-center">
          <span className="text-2xl lg:text-3xl xl:text-4xl text-gray-800 font-bold">
            Popular Products
          </span>
          <span>
            <ul className=" hidden xs2:flex gap-2 s1:gap-3 lg:gap-4 text-xs md:text-sm xl:text-base font-medium cursor-pointer">
              <li className=" hover:text-green-400 transform hover:-translate-y-1 duration-100 ease-in-out">
                All
              </li>
              <li className=" hover:text-green-400 transform hover:-translate-y-1 duration-100 ease-in-out">
                Baking Material
              </li>
              <li className=" hover:text-green-400 transform hover:-translate-y-1 duration-100 ease-in-out">
                Fresh Fruits
              </li>
              <li className=" hover:text-green-400 transform hover:-translate-y-1 duration-100 ease-in-out">
                Milk & Dairies
              </li>
              <li className=" hover:text-green-400 transform hover:-translate-y-1 duration-100 ease-in-out">
                Meats
              </li>
              <li className=" hover:text-green-400 transform hover:-translate-y-1 duration-100 ease-in-out">
                Vegetables
              </li>
            </ul>
          </span>
        </div>
        <Slider {...settings} className="mt-6 pl-6 relative ">
          {data.productData.map((cat) =>
            cat.products.map(
              (val) =>
                val.rating === 5 && <ProductCard key={val.id} data={val} />
            )
          )}
        </Slider>
      </>
      <>
        <div className="flex justify-between pt-10 px-4 items-center">
          <span className="text-2xl lg:text-3xl xl:text-4xl text-gray-800 font-bold">
            Daily Best Sales
          </span>
          <span>
            <ul className=" hidden xs2:flex gap-2 s1:gap-3 lg:gap-4 text-xs md:text-sm xl:text-base font-medium cursor-pointer">
              <li className=" hover:text-green-400 transform hover:-translate-y-1 duration-100 ease-in-out">
                All
              </li>
              <li className=" hover:text-green-400 transform hover:-translate-y-1 duration-100 ease-in-out">
                Deals of the Day
              </li>
              <li className=" hover:text-green-400 transform hover:-translate-y-1 duration-100 ease-in-out">
                Beauty
              </li>
              <li className=" hover:text-green-400 transform hover:-translate-y-1 duration-100 ease-in-out">
                Bread
              </li>
              <li className=" hover:text-green-400 transform hover:-translate-y-1 duration-100 ease-in-out">
                Drinks
              </li>
            </ul>
          </span>
        </div>
        <div className="flex px-4 pt-6 gap-6 h-full productBanner">
          <div className="hidden xs1:block bg-[url('../../../assets/images/banner-4.png')] bg-cover bg-center rounded-xl xs1:w-[38%] s2:w-[25%]">
            <div className="text-4xl font-semibold ml-4 mt-8">
              Bring nature into your home
            </div>
            <Link to="shop">
              <button className="px-1 xs1:py-1 border-2 border-gray-400 rounded-md ml-4 mt-4 bg-green-500 hover:bg-green-400 text-white">
                Shop Now <ArrowForwardIcon fontSize="small" />
              </button>
            </Link>
          </div>

          <Slider {...settings2} className=" w-full xs1:w-[60%] s2:w-[80%]">
            {data.productData.map((cat) =>
              cat.products.map(
                (val) =>
                  val.discount >= 17 && <ProductCard key={val.id} data={val} />
              )
            )}
          </Slider>
        </div>
      </>
    </div>
  );
};

export default PopularProducts;
