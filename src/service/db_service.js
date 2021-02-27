import { firebaseDB } from "./firebase";

class DBService {
  saveCard(userId, card) {
    firebaseDB.ref(`${userId}/cards/${card.id}`).set(card);
  }
  removeCard(userId, card) {
    firebaseDB.ref(`${userId}/cards/${card.id}`).remove();
  }
  //on() : 데이터 듣기 & off() : 데이터 듣기 그만
  //onUpdate라는 콜백함수가 인자로 들어오면!
  // -> 지속적으로 데이터베이스가 업데이트 될때마다 콜백함수가 호출이 된다.
  //스냅샷이 인자로 들어와서 우리의 콜백함수를 호출해준다.
  // value는 곧 cards
  syncCard(userId, onUpdate) {
    const ref = firebaseDB.ref(`${userId}/cards`);
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
}
export default DBService;
