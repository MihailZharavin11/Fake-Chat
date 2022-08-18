import React, { useState, useRef, useCallback } from "react";
import Avatar from "../Avatar/Avatar";
import avatar from "../../images/avatar.png";
import "./navigation.scss";
import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { addFilter, getUser, getUsers } from "../../store/slices/usersSlice";
import debounce from "lodash.debounce";
import { useParams } from "react-router-dom";
const Navigation = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const users = useSelector(getUsers);

  const updateSearchValue = useCallback(
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
    <div className="chat__navigation">
      <div className="chat__navigation-title">
        <Avatar img={avatar} heigth={60} width={60} />
        <div className="form">
          <input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => onChangeInput(e.target.value)}
            placeholder="Search or start new chat"
            className="form__input"
            type="text"
          />
        </div>
      </div>
      <div className="chat__navigation-contacts">
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
              touch={element.touch}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
