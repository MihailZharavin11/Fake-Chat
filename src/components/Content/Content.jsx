import React, { useState } from "react";
import Avatar from "../Avatar/Avatar";
import paperplane from "../../images/paperplane.svg";
import styles from "./content.module.scss";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getUser,
  addMessage,
  getMessage,
  setUsers,
} from "../../store/slices/usersSlice";
import Message from "../Message/Message";
import { useDispatch } from "react-redux";
import EmptyContent from "../EmptyContent/EmptyContent";
import { useRef } from "react";
import { useEffect } from "react";
import morpheus from "../../images/morpheus.png";
import robot from "../../images/robot.png";
import gilfoyd from "../../images/gilfoyd.png";

const Content = () => {
  let { ids } = useParams();
  const [input, setInput] = useState("");
  const user = useSelector((state) => getUser(state, ids));
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  let setActiveClass = useOutletContext();
  const navigate = useNavigate();

  const initial = [
    {
      id: "a9271398-160b-48b6-b93e-d92167a7edc1",
      name: "Morpheus",
      avatar: morpheus,
      newMessages: false,
      messages: [
        {
          to: "me",
          value: "Wake up, Neo...",
          date: new Date(),
        },
        {
          to: "interlocutor",
          value: "matrix everywhere",
          date: new Date(),
        },
      ],
    },
    {
      id: "a98b9925-b1c9-4565-a14e-881585fdc318",
      name: "Mr.Robot",
      avatar: robot,
      newMessages: false,
      messages: [
        {
          to: "me",
          value: "I am you",
          date: new Date(),
        },
        {
          to: "interlocutor",
          value: "People use force when they can't find words.",
          date: new Date(),
        },
      ],
    },
    {
      id: "5c384b2a-1331-4b82-b81f-5039f7af1808",
      avatar: gilfoyd,
      name: "Gilfoyd",
      newMessages: false,
      messages: [
        {
          to: "interlocutor",
          value:
            "I am a kamikaze of humiliation. Ready to fall to the bottom, just to drag you along. Your shame is my reward.",
          date: new Date(),
        },
        {
          to: "me",
          value: "Hallo, Gilfoyle",
          date: new Date(),
        },
      ],
    },
  ];

  const scrollToBottom = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (user && scrollRef) {
      scrollToBottom();
    }
  }, [user?.messages, user]);

  useEffect(() => {
    const usersFromLocal = localStorage.getItem("users");
    if (usersFromLocal) {
      dispatch(setUsers(JSON.parse(usersFromLocal)));
    } else {
      dispatch(setUsers(initial));
      localStorage.setItem("users", JSON.stringify(initial));
    }
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users]);

  const sendMessage = () => {
    if (input) {
      const valueToAdd = {
        id: user.id,
        value: {
          to: "me",
          value: input,
          date: new Date(),
        },
      };
      dispatch(addMessage(valueToAdd));
      setInput("");
      dispatch(getMessage(user.id));
      scrollToBottom();
    }
  };

  if (!user) {
    return <EmptyContent />;
  }

  return (
    <div className={styles.chat__content}>
      <div className={styles.chat__contentHeader}>
        <div
          onClick={() => {
            setActiveClass(false);
            //если мы в мобильной версии , то при нажатии назад, мы сохраняем прошлый юрл
            navigate("/", { state: ids });
          }}
          className={styles.chat__contentArrow}
        >{`<`}</div>
        <div className={styles.chat__contentAvatar}>
          <Avatar img={user.avatar} width={80} heigth={80} />
        </div>
        <h3>{user.name}</h3>
      </div>
      <div className={styles.chat__contentMain}>
        <div className={styles.chat__contentMainItems}>
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

      <div className={styles.chat__contentFooter}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className={styles.footer__form}
          action="#"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message"
            className={styles.footer__input}
            type="input"
          />
          <img onClick={sendMessage} src={paperplane} alt="paperplane" />
        </form>
      </div>
    </div>
  );
};

export default Content;
