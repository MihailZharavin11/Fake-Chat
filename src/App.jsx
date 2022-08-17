import "./App.scss";
import React from "react";
import avatar from "./images/avatar.png";
import check from "./images/check.png";

const App = () => {
  return (
    <div className="app_wrapper">
      <div className="app_container">
        <div className="chat__wrapper">
          <div className="chat__navigation">
            <div className="chat__navigation-title">
              <div className="chat__navigation-title-avatar">
                <img src={avatar} alt="avatar" />
                <img className="check" src={check} alt="" />
              </div>
              <div className="form">
                <input
                  placeholder="Search or start new chat"
                  className="form__input"
                  type="text"
                />
              </div>
            </div>
            <div className="chat__navigation-messages">
              <h3>Chats</h3>
              <div className="chat__navigation-messages-items">asd</div>
            </div>
          </div>
          <div className="chat__content">asd</div>
        </div>
      </div>
    </div>
  );
};

export default App;
