import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather city="İstanbul" />
        <Weather city="Paris" />
        <Weather city="London" />
        <Weather city="Zurich" />
      </header>
    </div>
  );
}

export default App;
