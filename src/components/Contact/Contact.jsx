import React from "react";
import styles from "./contact.module.scss";
import Avatar from "../Avatar/Avatar";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeTouch } from "../../store/slices/usersSlice";

const Contact = ({ id, img, name, msg, date, newMessages }) => {
  const dispatch = useDispatch();
  const { ids } = useParams();
  const dateValue = new Date(date);
  const month = dateValue.toLocaleString("en-US", {
    month: "short",
  });
  const day = dateValue.toLocaleString("en-US", {
    day: "numeric",
  });
  const year = dateValue.toLocaleString("en-US", {
    year: "numeric",
  });
  const dot = <span className={styles.dot}></span>;

  useEffect(() => {
    if (newMessages) {
      dispatch(changeTouch({ id: ids, newMessages: false }));
    }
  }, [newMessages, dispatch, ids]);

  return (
    <Link to={`/${id}`} className={styles.link}>
      <div className={styles.contact}>
        <div className={styles.contact__avatar}>
          <Avatar img={img} heigth={80} width={80} />
        </div>
        <div className={styles.contact__content}>
          <div className={styles.contact__contentTitle}>
            <p className={styles.contact__contentTitleName}>
              {name}
              {newMessages && dot}
            </p>
            <p
              className={styles.contact__contentTitleDate}
            >{`${month} ${day}, ${year}`}</p>
          </div>
          <div className={styles.contact__contentText}>
            <p>{msg.length < 30 ? msg : `${msg.slice(0, 30)}...`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Contact;
