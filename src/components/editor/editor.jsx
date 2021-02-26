import React from "react";
import Card from "../card/card";
import CardAdd from "../card_add/card_add";
import CardEdit from "../card_edit/card_edit";
import styles from "./editor.module.css";

const Editor = ({ cards, onAdd, updateCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {Object.keys(cards).map((
      key //오브젝트의 키를 받아와서 빙글빙글
    ) => (
      <CardEdit
        key={key}
        card={cards[key]}
        updateCard={updateCard}
        deleteCard={deleteCard}
      />
    ))}
    <CardAdd onAdd={onAdd} />
  </section>
);

export default Editor;
