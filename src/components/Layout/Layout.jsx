import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import styles from "./layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.layout__wrapper}>
      <div className={styles.layout__inner}>
        <Navigation />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
