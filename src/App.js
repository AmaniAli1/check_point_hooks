import "./App.css";
import React, { useState } from "react";
import Navbarr from "./components/Navbarr";

import ListOfFilms from "./components/ListOfFilms";
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <div className="App">
      <Navbarr />
      <ListOfFilms />
    </div>
  );
}

export default App;
