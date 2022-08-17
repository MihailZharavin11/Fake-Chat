import "./App.scss";
import React from "react";
import avatar from "./images/avatar.png";
import Avatar from "./components/Avatar/Avatar";

const App = () => {
  return (
    <div className="app_wrapper">
      <div className="app_container">
        <div className="chat__wrapper">
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
            <div className="chat__navigation-messages">
              <h3>Chats</h3>
              <div className="messages">
                <div className="messages__avatar">
                  <img src="" alt="" />
                </div>
                <div className="messages__content">
                  <div className="mesagge__content-title">Morpheus</div>
                  <div className="message__content-text">Hallo World!</div>
                </div>
                asd
              </div>
            </div>
          </div>
          <div className="chat__content">asd</div>
        </div>
      </div>
    </div>
  );
};

export default App;
