import React from "react";
import Avatar from "../Avatar/Avatar";
import paperplane from "../../images/paperplane.svg";
import "./content.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../../store/slices/usersSlice";
import Message from "../Message/Message";

const Content = () => {
  let { ids } = useParams();
  let { id, name, avatar, messages } = useSelector((state) =>
    getUser(state, ids)
  );

  console.log(messages);
  return (
    <div className="chat__content">
      <div className="chat__content-header">
        <Avatar img={avatar} width={80} heigth={80} />
        <h3>{name}</h3>
      </div>
      <div className="chat__content-main">
        <div className="chat__content-main-items">
          {messages.map((element) => (
            <Message avatar={avatar} to={element.to} value={element.value} />
          ))}
        </div>
      </div>
      <div className="chat__content-footer">
        <form className="footer__form" action="#">
          <input
            placeholder="Type your message"
            className="footer__input"
            type="footer__input"
          />
          <img src={paperplane} alt="paperplane" />
        </form>
      </div>
    </div>
  );
};

export default Content;
