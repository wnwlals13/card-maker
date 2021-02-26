import React from "react";
import styles from "./card.module.css";

const DEFAULT_IMG = "/images/basic.jpeg";
const arrow = " >>>>>";
const Card = ({ card }) => {
  const {
    name,
    company,
    title,
    email,
    message,
    theme,
    fileName,
    fileURL,
  } = card;
  const url = fileURL || DEFAULT_IMG; // ✨ fileURL이 있다면 그걸쓰고 없다면 DEFAULT_IMG를 쓴다.
  return (
    <li className={`${styles.card} ${pickStyles(theme)}`}>
      <img
        className={styles.avatar}
        src={process.env.PUBLIC_URL + url}
        alt="profile photo"
      />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.title}>
          {arrow} {title}
        </p>
        <div className={`${styles.line} ${pickStyles(theme)}`}></div>
        <p className={styles.company}>{company}</p>

        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

//컴포넌트에 포함하지 않아도되는 함수이니까..
function pickStyles(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`unkown theme : ${theme}`);
  }
}

export default Card;
