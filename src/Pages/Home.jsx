import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <div>home content</div>
      <Outlet />
    </div>
  );
};

export default Home;
