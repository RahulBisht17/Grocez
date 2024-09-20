import React from "react";
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-200 pt-8 pb-4 px-4">
      <div className="container mx-auto flex flex-wrap gap-2 justify-between items-start">
        {/* Logo and Description */}
        <div className="w-full md:w-1/4 mb-6">
          <div className="w-48 h-16 relative overflow-clip">
            <Link to="/">
              <img
                src="/assets/images/a-flat-vector-illustrative-style-wordmark-logo-des-zeFbBtC1TaykmH5q2JQHaA-V6HtadLgTY2mfLafAg1kkg-removebg.png"
                className="absolute -top-16"
                alt="logo"
              />
            </Link>
          </div>
          <p className="text-gray-200 text-lg mt-2">
            Your go-to grocery store for fresh produce and essentials.
          </p>
          {/* Contact Information */}
          <div className="w-fit mt-8">
            <h3 className="font-bold text-xl">Contact Us</h3>
            <p className="text-gray-400">
              <span className="text-gray-300 font-medium ">
                <LocationOnOutlinedIcon fontSize="small" />
                Address:{" "}
              </span>
              5171W Campbell Ave Kent, utah 53127 United States
            </p>
            <p className="text-gray-400">
              <span className="text-gray-300 font-medium">
                <SendOutlinedIcon fontSize="small" /> Email:
              </span>{" "}
              support@nestgrocery.com
            </p>
            <p className="text-gray-400">
              <span className="text-gray-300 font-medium">
                <PhoneOutlinedIcon fontSize="small" /> Phone :{" "}
              </span>
              (123) 456-7890
            </p>
          </div>
        </div>
        {/* Navigation Links */}
        <div className="w-fit mb-6">
          <h3 className="font-bold text-xl mb-2">Quick Links</h3>
          <div className="flex flex-col mx-1 space-y-2">
            <Link className="hover:text-green-300" to={"/"}>
              Home
            </Link>
            <Link className="hover:text-green-300">About Us</Link>
            <Link className="hover:text-green-300" to={"shop"}>
              Shop
            </Link>
            <Link className="hover:text-green-300">Contact Us</Link>
            <Link className="hover:text-green-300" to={"cart"}>
              Cart
            </Link>
          </div>
        </div>
        {/* Social Media Links */}
        <div className="w-fit mb-6">
          <h3 className="font-bold text-xl mb-2">Follow Us</h3>
          <div className="flex flex-col mx-1 space-y-2">
            <Link className="hover:text-green-300">Facebook</Link>
            <Link className="hover:text-green-300">Twitter</Link>
            <Link className="hover:text-green-300">Instagram</Link>
            <Link className="hover:text-green-300">LinkedIn</Link>
          </div>
        </div>

        <div>
          <div>
            <p className="font-bold text-xl">Install App</p>
            <p className="text-sm">From App Store or Goggle Play</p>
          </div>
          <div className="mt-4 mb-6 flex gap-1">
            <Link className="w-fit hover:-translate-y-1 duration-200">
              <img className="w-28" src="../../assets/images/google-play.jpg" />
            </Link>
            <Link className="w-fit hover:-translate-y-1 duration-200">
              <img className="w-28" src="../../assets/images/app-store.jpg" />
            </Link>
          </div>
          <div>
            <p className="text-sm mb-2">Secured Payment Gateway</p>
            <div>
              <Link>
                <img
                  className="w-48 hover:-translate-y-1 duration-200"
                  src="../../assets/images/payment-method.png"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-4 pt-4 text-center">
        <p className="text-gray-400 text-sm">
          © 2024 Nest Grocery. All rights reserved.
        </p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
