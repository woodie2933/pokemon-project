import React from "react";
import "./App.css";
import Router from "./shared/Router";
import GlobalStyles from "./style/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
};

export default App;
