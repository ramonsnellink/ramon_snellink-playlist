import React from "react";
import SongOverview from "./components/SongOverview";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    // note to self: links (via NavBar) must be INSIDE the Router component
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <SongOverview />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
