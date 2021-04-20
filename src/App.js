import "./App.css";
import {
  HomePage,
  CharactersPage,
  ErrorPage,
  FilmsPage,
  DetailPage,
  SpeciesPage,
  PlanetsPage,
  VehiclesPage,
  StarshipsPage,
} from "./pages";

import { Header, Footer } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/people">
            <CharactersPage />
          </Route>
          <Route path="/people/:id">
            <DetailPage type={"people"} />
          </Route>
          <Route exact path="/films">
            <FilmsPage />
          </Route>
          <Route path="/films/:id">
            <DetailPage type={"films"} />
          </Route>
          <Route exact path="/planets">
            <PlanetsPage />
          </Route>
          <Route path="/planets/:id">
            <DetailPage type={"planets"} />
          </Route>
          <Route exact path="/species">
            <SpeciesPage />
          </Route>
          <Route path="/species/:id">
            <DetailPage type={"species"} />
          </Route>
          <Route exact path="/starships">
            <StarshipsPage />
          </Route>
          <Route path="/starships/:id">
            <DetailPage type={"starships"} />
          </Route>
          <Route exact path="/vehicles">
            <VehiclesPage />
          </Route>
          <Route path="/vehicles/:id">
            <DetailPage type={"vehicles"} />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
