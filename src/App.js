import React from "react";

import logo from "./assets/images/logo.svg";
import Main from './layouts/index';
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <header className="header">
        <img src={logo} alt="adamdev logo" className="logo"/>
      </header>
      <Main>
        <p>Tak być nie może</p>
      </Main>
    </div>
  );
}

export default App;
