import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { NewSet } from "./pages/addNewFlashcards/NewFlashCardKit";
import { PresetFlashcard } from "./pages/presetFlashcard/PresetFlashcard";
import { CustomFlashcards } from "./pages/customFlashcards/CustomFlashcards";

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
        <Route path="/presetfc/:id">
          <PresetFlashcard />
        </Route>
        <Route path="/flashcards/:id">
          <CustomFlashcards />
        </Route>
      </Switch>
    </Router>
  );
}
