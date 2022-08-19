import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import styles from "./layout.module.scss";

const Layout = () => {
  const [activeClass, setActiveClass] = useState(false);
  return (
    <div className={styles.layout__wrapper}>
      <div
        className={`${styles.layout__inner} ${
          activeClass ? styles.active : ""
        }`}
      >
        <Navigation setActiveClass={setActiveClass} />
        <Outlet context={setActiveClass} />
      </div>
    </div>
  );
};

export default Layout;
