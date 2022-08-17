import React from "react";
import Avatar from "../Avatar/Avatar";
import avatar from "../../images/avatar.png";
import morpheus from "../../images/morpheus.png";
import "./navigation.scss";

const Navigation = () => {
  return (
    <div className="chat__navigation">
      <div className="chat__navigation-title">
        <Avatar img={avatar} heigth={60} width={60} />
        <div className="form">
          <input
            placeholder="Search or start new chat"
            className="form__input"
            type="text"
          />
        </div>
      </div>
      <div className="chat__navigation-contacts">
        <h3>Chats</h3>
        <div className="contact">
          <div className="contact__avatar">
            <Avatar img={morpheus} heigth={80} width={80} />
          </div>
          <div className="contact__content">
            <div className="contact__content-title">
              <p className="contact__content-title-name">Morpheus</p>
              <p className="contact__content-title-date">jun 17, 2017</p>
            </div>
            <div className="message__content-text">
              <p>We are losing money! Quick!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
