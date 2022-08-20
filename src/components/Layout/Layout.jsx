import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import ErrorContent from "../ErrorContent/ErrorContent";
import Navigation from "../Navigation/Navigation";
import styles from "./layout.module.scss";

const Layout = () => {
  const [activeClass, setActiveClass] = useState(false);
  const { error } = useSelector((state) => state.users);

  if (error) {
    return <ErrorContent />;
  }

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
