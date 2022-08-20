import React from "react";
import styles from "./errorContent.module.scss";

const ErrorContent = () => {
  return (
    <div className={styles.error}>
      <h1>Error, please reload the page</h1>
    </div>
  );
};

export default ErrorContent;
