import React from "react";
import Router from "./shared/Router";
import GlobalStyle from "./style/GlobalStyle";
import { PokemonProvider } from "./contexts/PokemonContext";

const App = () => {
  return (
    <PokemonProvider>
      <GlobalStyle />
      <Router />
    </PokemonProvider>
  );
};

export default App;
