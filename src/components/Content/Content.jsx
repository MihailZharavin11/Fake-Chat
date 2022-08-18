import React, { useState } from "react";
import Avatar from "../Avatar/Avatar";
import paperplane from "../../images/paperplane.svg";
import "./content.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser, addMessage, getMessage } from "../../store/slices/usersSlice";
import Message from "../Message/Message";
import { useDispatch } from "react-redux";
import EmptyContent from "../EmptyContent/EmptyContent";
import { useRef } from "react";
import { useEffect } from "react";

const Content = () => {
  let { ids } = useParams();
  const [input, setInput] = useState("");
  let user = useSelector((state) => getUser(state, ids));
  const dispatch = useDispatch();
  const scrollRef = useRef(null);

  console.log(new Date().toDateString());
  const scrollToBottom = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (user && scrollRef) {
      scrollToBottom();
    }
  }, [user?.messages, user]);

  const sendMessage = () => {
    const valueToAdd = {
      id: user.id,
      value: {
        to: "me",
        value: input,
      },
    };
    dispatch(addMessage(valueToAdd));
    setInput("");
    setTimeout(() => {
      dispatch(getMessage(user.id));
    }, 1000);
    scrollToBottom();
  };

  if (!user) {
    return <EmptyContent />;
  }

  return (
    <div className="chat__content">
      <div className="chat__content-header">
        <Avatar img={user.avatar} width={80} heigth={80} />
        <h3>{user.name}</h3>
      </div>
      <div className="chat__content-main">
        <div className="chat__content-main-items">
          {user.messages.map((element) => (
            <Message
              key={element.value}
              date={element.date}
              element={element.value}
              avatar={user.avatar}
              to={element.to}
              value={element.value}
            />
          ))}
        </div>
        <div ref={scrollRef}></div>
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
          <img onClick={sendMessage} src={paperplane} alt="paperplane" />
        </form>
      </div>
    </div>
  );
};

export default Content;
