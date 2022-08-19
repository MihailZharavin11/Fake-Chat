import React, { useState, useRef, useCallback } from "react";
import Avatar from "../Avatar/Avatar";
import avatar from "../../images/avatar.png";
import styles from "./navigation.module.scss";
import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { addFilter, getUsers } from "../../store/slices/usersSlice";
import debounce from "lodash.debounce";
const Navigation = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const users = useSelector(getUsers);

  const updateSearchValue = useCallback(
    //имитация работы с сервером, если убрать debounce, поиск будет работать без задержки в 1 секунду
    debounce((str) => {
      dispatch(addFilter(str));
    }, 1000),
    [inputRef]
  );

  const onChangeInput = (value) => {
    setInputValue(value);
    updateSearchValue(value);
  };

  return (
    <div className={styles.chat__navigation}>
      <div className={styles.chat__navigationTitle}>
        <Avatar img={avatar} heigth={60} width={60} />
        <div className={styles.form}>
          <input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => onChangeInput(e.target.value)}
            placeholder="Search or start new chat"
            className={styles.form__input}
            type="text"
          />
        </div>
      </div>
      <div className={styles.chat__navigationContacts}>
        <h3>Chats</h3>
        {users.map((element) => {
          return (
            <Contact
              key={element.id}
              id={element.id}
              img={element.avatar}
              name={element.name}
              msg={element.messages[element.messages.length - 1].value}
              date={element.messages[element.messages.length - 1].date}
              newMessages={element.newMessages}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
