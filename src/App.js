import React from "react";
import SongOverview from "./components/SongOverview";

const App = () => {
  return (
    <div className="app">
      <h1 className="app__title">Winc Lil' Liedjeslijst</h1>
      <SongOverview />
    </div>
  );
};

export default App;
