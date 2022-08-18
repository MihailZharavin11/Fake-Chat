import React from "react";
import "./contact.scss";
import Avatar from "../Avatar/Avatar";
import { Link } from "react-router-dom";

const Contact = ({ id, img, name, msg, date }) => {
  const month = date.toLocaleString("en-US", {
    month: "short",
  });
  const day = date.toLocaleString("en-US", {
    day: "numeric",
  });
  const year = date.toLocaleString("en-US", {
    year: "numeric",
  });

  return (
    <Link to={`/${id}`} className="link">
      <div className="contact">
        <div className="contact__avatar">
          <Avatar img={img} heigth={80} width={80} />
        </div>
        <div className="contact__content">
          <div className="contact__content-title">
            <p className="contact__content-title-name">{name}</p>
            <p className="contact__content-title-date">{`${month} ${day}, ${year}`}</p>
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
