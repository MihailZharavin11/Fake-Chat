import React from "react";
import check from "../../images/check.png";
import styles from "./avatar.module.scss";
const Avatar = ({ img, withCheck = true }) => {
  return (
    <div className={styles.avatar__wrapper}>
      <div className={styles.avatar__inner}>
        <img src={img} alt="avatar" />
      </div>
      <img
        style={{
          display: !withCheck && "none",
        }}
        src={check}
        alt="check"
        className={styles.check}
      />
    </div>
  );
};

export default Avatar;
