import React from "react";
import Search from "./Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Search />
      <footer>
        Coded by 👩🏻‍💻 <span>Ada Yeis</span>, open-source on{" "}
        <a
          href="https://github.com/adayeis/weather-react-page"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
      </footer>
    </div>
  );
}

export default App;
