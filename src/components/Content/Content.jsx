import React, { useState } from "react";
import Avatar from "../Avatar/Avatar";
import paperplane from "../../images/paperplane.svg";
import "./content.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser, addMessage } from "../../store/slices/usersSlice";
import Message from "../Message/Message";
import { useDispatch } from "react-redux";

const Content = () => {
  let { ids } = useParams();
  const [input, setInput] = useState("");
  let { id, name, avatar, messages } = useSelector((state) =>
    getUser(state, ids)
  );
  const dispatch = useDispatch();

  const click = () => {
    const valueToAdd = {
      id: id,
      value: {
        to: "me",
        value: input,
      },
    };
    dispatch(addMessage(valueToAdd));
    setInput("");
  };

  return (
    <div className="chat__content">
      <div className="chat__content-header">
        <Avatar img={avatar} width={80} heigth={80} />
        <h3>{name}</h3>
      </div>
      <div className="chat__content-main">
        <div className="chat__content-main-items">
          {messages.map((element) => (
            <Message
              element={element.value}
              avatar={avatar}
              to={element.to}
              value={element.value}
            />
          ))}
        </div>
      </div>
      <div className="chat__content-footer">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="footer__form"
          action="#"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message"
            className="footer__input"
            type="footer__input"
          />
          <img onClick={click} src={paperplane} alt="paperplane" />
        </form>
      </div>
    </div>
  );
};

export default Content;
