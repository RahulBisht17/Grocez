import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
    fadeSpeed: 500,
  };

  return (
    <div className=" w-full px-3 md:px-6 mx-auto py-10">
      <Slider
        {...settings}
        className=" h-52 xs2:h-64 md:h-72 lg:h-96 xl:h-[430px] border-2  rounded-xl md:rounded-3xl overflow-hidden "
      >
        <div className="h-52 xs2:h-64 md:h-72 lg:h-96 xl:h-[430px]  px-3 py-4 xs1:px-5 xs2:pt-8 bg-slider1 bg-cover bg-center">
          <div className="lg:ml-4 lg:mt-8 md:w-8/12 xl:w-1/2 xl:mt-10 xl:ml-10">
            <h2 className="text-2xl w-80 xs2:w-96 md:w-full xs1:text-3xl xs2:text-4xl  md:text-5xl lg:text-6xl font-bold text-slate-700 leading-tight">
              Don't miss amazing grocery deals
            </h2>
            <p className=" mt-3 xs2:mt-5 lg:mt-7 xl:mt-12 text-lg xs2:text-xl md:text-2xl xl:text-3xl text-gray-500 font-semibold">
              Sign up for daily newsletter
            </p>
            <div className="mt-2 xs2:mt-5 pl-2 text-sm xs2:text-base xl:text-xl rounded-full  w-full xs1:w-11/12 xs2:w-96 xl:w-4/6 flex justify-between  bg-white">
              <input
                type="search"
                placeholder="Your email address"
                className=" lg:p-2 lg:px-6 md:w-96 bg-transparent"
              />
              <button className="py-1 md:py-2 px-2 lg:p-2 rounded-full bg-green-500 hover:bg-green-400 text-white md:font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="h-52 xs2:h-64 md:h-72 lg:h-96 xl:h-[430px]  px-3 py-4 xs1:px-5 xs2:pt-8 bg-slider2 bg-cover bg-center">
          <div className="lg:ml-4 lg:mt-8 md:w-8/12 xl:w-1/2 xl:mt-10 xl:ml-10">
            <h2 className="text-2xl w-80 xs2:w-96 md:w-full xs1:text-3xl xs2:text-4xl  md:text-5xl lg:text-6xl font-bold text-slate-700 leading-tight">
              Fresh Vegetables Big Discount
            </h2>
            <p className=" mt-3 xs2:mt-5 lg:mt-7 xl:mt-12 text-lg xs2:text-xl md:text-2xl xl:text-3xl text-gray-500 font-semibold">
              Get up to 50% off on your first order
            </p>
            <div className="mt-2 xs2:mt-5 pl-2 text-sm xs2:text-base xl:text-xl rounded-full  w-full xs1:w-11/12 xs2:w-96 xl:w-4/6 flex justify-between  bg-white">
              <input
                type="search"
                placeholder="Your email address"
                className=" lg:p-2 lg:px-6 md:w-96 bg-transparent"
              />
              <button className="py-1 md:py-2 px-2 lg:p-2 rounded-full bg-green-500 text-white md:font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
