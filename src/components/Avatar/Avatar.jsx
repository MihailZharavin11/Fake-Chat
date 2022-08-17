import React from "react";
import avatar from "../../images/avatar.png";
import check from "../../images/check.png";
import "./avatar.scss";
const Avatar = ({ img, heigth, width }) => {
  return (
    <div
      style={{
        height: `${heigth}px`,
        width: `${width}px`,
      }}
      className="chat__navigation-title-avatar"
    >
      <img src={img} alt="avatar" />
      <img className="check" src={check} alt="" />
    </div>
  );
};

export default Avatar;
