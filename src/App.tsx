import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { NewSet } from "./pages/newSet/NewFlashCardKit";
import styles from "./App.module.scss";

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/newset">
          <NewSet />
        </Route>
      </Switch>
    </Router>
  );
}
