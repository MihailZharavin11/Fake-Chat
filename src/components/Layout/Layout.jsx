import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./layout.scss";

const Layout = () => {
  return (
    <div className="layout__wrapper">
      <div className="layout__inner">
        <Navigation />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
