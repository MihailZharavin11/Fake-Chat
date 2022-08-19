import React from "react";
import styles from "./emptyContent.module.scss";
const EmptyContent = () => {
  return (
    <div className={styles.empty}>
      <p>Select the user you want to chat with</p>
    </div>
  );
};

export default EmptyContent;
