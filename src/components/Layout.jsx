import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import FooterBanner from "./Home/FooterBanner";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <FooterBanner />
      <Footer />
    </>
  );
};

export default Layout;
