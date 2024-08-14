import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-gray-200 py-8">
      <div className="container mx-auto flex gap-2 justify-between items-start">
        {/* Logo and Description */}
        <div className="w-full md:w-1/4 mb-6">
          <div>
            {" "}
            <img src="../../assets/images/logo.png" />
          </div>
          <p className="text-gray-200 mt-2">
            Your go-to grocery store for fresh produce and essentials.
          </p>
        </div>
        {/* Navigation Links */}
        <div className="w-full md:w-1/4 mb-6">
          <h3 className="font-bold text-xl mb-2">Quick Links</h3>
          <div className="flex flex-col space-y-2">
            <Link to={"/"}>Home</Link>
            <Link>About Us</Link>
            <Link to={"shop"}>Shop</Link>
            <Link>Contact Us</Link>
            <Link>Cart</Link>
          </div>
        </div>
        {/* Social Media Links */}
        <div className="w-full md:w-1/4 mb-6">
          <h3 className="font-bold mb-2">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        {/* Contact Information */}
        <div className="w-full md:w-1/4 mb-6">
          <h3 className="font-bold mb-2">Contact Us</h3>
          <p className="text-gray-400">123 Grocery St, Food City, FC 12345</p>
          <p className="text-gray-400">Email: support@nestgrocery.com</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-6 text-center">
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
