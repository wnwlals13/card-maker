import styles from "./app.module.css";
import Login from "./components/login/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CardMaker from "./components/cardmaker/cardmaker";

function App({ FileInput, authService, dbService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login authService={authService} />
          </Route>
          <Route path="/card">
            <CardMaker
              FileInput={FileInput}
              authService={authService}
              dbService={dbService}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
