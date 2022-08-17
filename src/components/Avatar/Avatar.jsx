import React from "react";
import check from "../../images/check.png";
import "./avatar.scss";
const Avatar = ({ img, heigth, width }) => {
  return (
    <div
      style={{
        height: `${heigth}px`,
        width: `${width}px`,
      }}
      className="avatar__wrapper"
    >
      <div className="avatar__inner">
        <img src={img} alt="avatar" />
      </div>
      <img src={check} alt="check" className="check" />
    </div>
  );
};

export default Avatar;
