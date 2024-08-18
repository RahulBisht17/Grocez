import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

const ProductBanner = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="productBanner w-full px-3 md:px-6 mx-auto">
      <Slider {...settings} className=" overflow-hidden">
        <div className="bg-[url('../../../assets/images/banner-1.png')] bg-center bg-cover h-44 xs1:h-60 sm:h-52 xl:h-64 w-[47%] lg:w-[32%] rounded-xl">
          <div className="ml-6 mt-4 xs1:ml-10 xs1:mt-6 text-xl xs1:text-3xl s1:text-xl xl:text-3xl font-medium w-[60%] xs1:w-[50%] s1:w-48 xl:w-56">
            Everyday Fresh & Clean with Our Products
          </div>
          <button className="px-1 xs1:py-1 border-2 border-gray-400 rounded-md ml-6 xs1:ml-10 mt-3 bg-green-500 hover:bg-green-400 text-white">
            Shop Now <ArrowForwardIcon fontSize="small" />
          </button>
        </div>
        <div className="bg-[url('../../../assets/images/banner-2.png')] bg-center bg-cover h-44 xs1:h-60 sm:h-52 xl:h-64 w-[47%] lg:w-[32%] rounded-xl">
          <div className="ml-6 mt-4 xs1:ml-10 xs1:mt-6 text-xl xs1:text-3xl s1:text-xl xl:text-3xl font-medium w-[60%] xs1:w-[50%] s1:w-48 xl:w-56">
            Make your Breakfast Healthy and Easy
          </div>
          <button className="px-1 xs1:py-1 border-2 border-gray-400 rounded-md ml-6 xs1:ml-10 mt-3 bg-green-500 hover:bg-green-400 text-white">
            Shop Now <ArrowForwardIcon fontSize="small" />
          </button>
        </div>
        <div className="bg-[url('../../../assets/images/banner-3.png')] bg-center bg-cover h-44 xs1:h-60 sm:h-52 xl:h-64 w-[47%] lg:w-[32%] rounded-xl">
          <div className="ml-6 mt-4 xs1:ml-10 xs1:mt-6 text-xl xs1:text-3xl s1:text-xl xl:text-3xl font-medium w-[60%] xs1:w-[50%] s1:w-48 xl:w-56">
            The Organic Product Online
          </div>
          <button className="px-1 xs1:py-1 border-2 border-gray-400 rounded-md ml-6 xs1:ml-10 mt-3 bg-green-500 hover:bg-green-400 text-white">
            Shop Now <ArrowForwardIcon fontSize="small" />
          </button>
        </div>
      </Slider>
    </div>
  );
};

export default ProductBanner;
