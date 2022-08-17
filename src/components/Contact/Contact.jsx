import React from "react";
import "./contact.scss";
import morpheus from "../../images/morpheus.png";
import Avatar from "../Avatar/Avatar";

const Contact = ({ img, name, msg }) => {
  return (
    <div className="contact">
      <div className="contact__avatar">
        <Avatar img={img} heigth={80} width={80} />
      </div>
      <div className="contact__content">
        <div className="contact__content-title">
          <p className="contact__content-title-name">{name}</p>
          <p className="contact__content-title-date">jun 17, 2017</p>
        </div>
        <div className="contact__content-text">
          <p>{msg.length < 30 ? msg : `${msg.slice(0, 30)}...`}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
