import React from "react";
import "./contact.scss";
import Avatar from "../Avatar/Avatar";
import { Link } from "react-router-dom";

const Contact = ({ id, img, name, msg }) => {
  return (
    <Link to={`/${id}`} className="link">
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
    </Link>
  );
};

export default Contact;
