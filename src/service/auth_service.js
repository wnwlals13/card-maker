import firebase from "firebase";
import "firebase/auth";
import firebaseApp from "./firebase";

class Authentication {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  logout() {
    return firebaseApp.auth().signOut();
  }
}
export default Authentication;
