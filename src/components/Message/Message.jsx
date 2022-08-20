import React from "react";
import Avatar from "../Avatar/Avatar";
import styles from "./message.module.scss";

const Message = ({ avatar, to, value, date }) => {
  const dateValue = new Date(date);
  const side = to === "interlocutor" ? "message--start" : "message--end";
  const messageColor =
    to === "interlocutor" ? "message__items--dark" : "message__items--light";
  let dateLocal = dateValue.toLocaleDateString();
  var timeLocal = dateValue.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div className={`${styles.message} ${styles[side]}`}>
      {to === "interlocutor" ? (
        <div className={styles.message__avatar}>
          <Avatar img={avatar} withCheck={false} />
        </div>
      ) : null}
      <div className={styles.message__content}>
        <div className={`${styles.message__items} ${styles[messageColor]}`}>
          {value}
        </div>
        <div
          className={`${styles.message__date} ${styles[side]}`}
        >{`${dateLocal}, ${timeLocal}`}</div>
      </div>
    </div>
  );
};

export default Message;
