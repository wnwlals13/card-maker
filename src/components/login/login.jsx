import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const display = "short";
  const history = useHistory();

  const goToMaker = (userId) => {
    history.push({
      pathname: "/card",
      state: { id: userId },
    });
  };

  const onClick = (event) => {
    authService.login(event.target.id).then((data) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });

  return (
    <section className={styles.login}>
      <Header display={display} />
      <section className={styles.loginBody}>
        <button id="Google" className={styles.loginGoogle} onClick={onClick}>
          <p>Google</p>
          <img
            src="../images/google.png"
            alt="google"
            className={styles.google}
          />
        </button>
        <button id="Github" className={styles.loginGithub} onClick={onClick}>
          <p>Github</p>
          <img
            src="../images/github.png"
            alt="google"
            className={styles.google}
          />
        </button>
      </section>
    </section>
  );
};
export default Login;
