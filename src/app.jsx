import styles from "./app.module.css";
import Login from "./components/login/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CardMaker from "./components/cardmaker/cardmaker";
import { useState } from "react";

function App({ FileInput, authService }) {
  const [loginId, setLoginId] = useState([]);
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login authService={authService} />
          </Route>
          <Route path="/card">
            <CardMaker FileInput={FileInput} authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
