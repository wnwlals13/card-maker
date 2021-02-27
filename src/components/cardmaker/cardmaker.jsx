import React, { memo, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./cardmaker.module.css";

const CardMaker = ({ FileInput, authService, dbService }) => {
  const historyState = useHistory().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const display = "long";
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };
  //👉getDB
  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = dbService.syncCard(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId]);
  //👉login
  //나는 바로then으로 이어줬는데, 쌤은 useEffect로 로그인상태 분별해서 해줌!
  //realtime database-> setUserID설정!
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  });
  // const addCard = (card) => {
  //   const update = [...cards, card];
  //   setCards(update);
  // };
  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      //✨setState는 콜백함수도 전달가능 예전 cards를 받아서 새로운 값을 리턴, = setCards를 부를 때의 cards으 ㅣ상태를 고대로 복사해와서 card.id를 이용해서 해당하는 그 키에 업데이트 하는 카드를 업데이트해주고 update를 리턴
      const update = { ...cards };
      update[card.id] = card;
      return update;
    });
    dbService.saveCard(userId, card);
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const update = { ...cards };
      delete update[card.id];
      return update;
    });
    dbService.removeCard(userId, card);
  };
  return (
    <section className={styles.cardmaker}>
      <Header onLogout={onLogout} display={display} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          onAdd={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
    </section>
  );
};

export default CardMaker;
