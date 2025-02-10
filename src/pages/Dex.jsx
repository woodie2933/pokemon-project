import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";
import React, { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";

const DexCss = styled.div`
  font-family: "Luckiest Guy", serif;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  h1 {
    text-shadow: -4px 0px #0026ff, 0px 4px #0026ff, 4px 0px #0026ff,
      0px -4px #0026ff;
    color: #ffd000;
    font-size: 70px;
    margin-bottom: 45px;
    span {
      color: #ffffff;
    }
  }
`;

const Dex = () => {
  const { selectedPokemons, addPokemon, removePokemon, MOCK_DATA } =
    useContext(PokemonContext);

  return (
    <DexCss>
      <h1>
        Pick <span>Your</span> Pokemon !
      </h1>
      <Dashboard
        selectedPokemons={selectedPokemons}
        removePokemon={removePokemon}
      />
      <PokemonList pokemonData={MOCK_DATA} addPokemon={addPokemon} />
    </DexCss>
  );
};

export default Dex;
