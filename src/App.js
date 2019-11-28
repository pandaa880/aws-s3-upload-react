import React from "react";

import { Upload } from "./Upload";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Upload />
      </header>
    </div>
  );
}

export default App;
