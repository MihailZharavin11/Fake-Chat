import React from "react";
import Avatar from "../Avatar/Avatar";
import "./message.scss";

const Message = ({ avatar, to, value }) => {
  const side = to === "interlocutor" ? "message--start" : "message--end";
  return (
    <div className={`${"message"} ${side}`}>
      {to === "interlocutor" ? (
        <Avatar img={avatar} width={60} heigth={60} />
      ) : null}
      <div className="message__content">
        <div className="message__items">{value}</div>
        <div className={`${"message__date"} ${side}`}>4/22/17, 4:00 AM</div>
      </div>
    </div>
  );
};

export default Message;
