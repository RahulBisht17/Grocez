import React from "react";

const FooterBanner = () => {
  return (
    <div className="w-full px-3 md:px-6 mx-auto py-10">
      <div className=" -z-20 h-52 xs2:h-64 md:h-80 lg:h-96 xl:h-[420px] rounded-3xl relative px-3 py-4 xs1:px-5 xs2:pt-8 bg-[url('../../../assets/images/banner-10-min.png')] bg-cover">
        <div className="lg:ml-4 lg:mt-2 md:w-8/12 xl:w-2/3 xl:mt-10 xl:ml-6">
          <p className=" text-xl xs2:w-96 md:w-full xs1:text-3xl xs2:text-4xl  lg:text-5xl xl:text-6xl font-bold text-slate-700 leading-tight">
            Get all the essentials at your doorstep
          </p>
          <p className="leading-tight mt-3 xs2:mt-5 lg:mt-7 xl:mt-12 text-lg xs2:text-xl md:text-2xl xl:text-3xl text-gray-500 font-semibold">
            Start Your Daily Shopping with{" "}
            <span className="text-green-500">Grocez</span>
          </p>
          <div className="mt-2 xs2:mt-5 pl-2 text-sm xs2:text-base xl:text-xl rounded-full w-full xs1:w-11/12 xs2:w-96 xl:w-4/6 flex justify-between  bg-white">
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
        <div className="absolute bottom-0 right-10 flex justify-end -z-10">
          <img
            src="../../../assets/images/banner-9-min.png"
            className=" w-full xss:w-[75%] sm:w-[65%]"
          />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
        <span className=" bg-slate-200 rounded-md p-6 py-4 flex gap-4">
          {" "}
          <span className="w-12 border-green-400 hover:-translate-y-1 delay-100 transform duration-200">
            <img src="../../../assets/images/icon-1.png" />
          </span>
          <span className="flex flex-col h-fit ">
            <p className="font-bold">Best price & offers</p>
            <p className="text-sm">Order $50 or more</p>
          </span>
        </span>
        <span className=" bg-slate-200 rounded-md p-6 py-4 flex gap-4">
          {" "}
          <span className="w-12 border-green-400 hover:-translate-y-1 delay-100 transform duration-200">
            <img src="../../../assets/images/icon-2.png" />
          </span>
          <span className="flex flex-col h-fit ">
            <p className="font-bold">Free delivery</p>
            <p className="text-sm">Order $50 or more</p>
          </span>
        </span>
        <span className=" bg-slate-200 rounded-md p-6 py-4 flex gap-4">
          {" "}
          <span className="w-12 border-green-400 hover:-translate-y-1 delay-100 transform duration-200">
            <img src="../../../assets/images/icon-3.png" />
          </span>
          <span className="flex flex-col h-fit ">
            <p className="font-bold">Great daily deal</p>
            <p className="text-sm">Order $50 or more</p>
          </span>
        </span>
        <span className=" bg-slate-200 rounded-md p-6 py-4 flex gap-4">
          {" "}
          <span className="w-12 border-green-400 hover:-translate-y-1 delay-100 transform duration-200">
            <img src="../../../assets/images/icon-4.png" />
          </span>
          <span className="flex flex-col h-fit ">
            <p className="font-bold">Wide assortment</p>
            <p className="text-sm">Order $50 or more</p>
          </span>
        </span>
        <span className=" bg-slate-200 rounded-md p-6 py-4 flex gap-4">
          {" "}
          <span className="w-12 border-green-400 hover:-translate-y-1 delay-100 transform duration-200">
            <img src="../../../assets/images/icon-5.png" />
          </span>
          <span className="flex flex-col h-fit ">
            <p className="font-bold">Easy returns</p>
            <p className="text-sm">Order $50 or more</p>
          </span>
        </span>
        <span className="xl:hidden bg-slate-200 rounded-md p-6 py-4 flex gap-4">
          {" "}
          <span className="w-12 border-green-400 hover:-translate-y-1 delay-100 transform duration-200">
            <img src="../../../assets/images/icon-5.png" />
          </span>
          <span className="flex flex-col h-fit ">
            <p className="font-bold">Easy returns</p>
            <p className="text-sm">Order $50 or more</p>
          </span>
        </span>
      </div>
    </div>
  );
};

export default FooterBanner;
