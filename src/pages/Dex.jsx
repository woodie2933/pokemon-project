import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../data/MOCK_DATA";
import styled from "styled-components";

const DexCss = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding: 30px;
  h1 {
    font-size: 50px;
    margin-bottom: 40px;
  }
`;

const Dex = () => {
  const [pickedPokemons, setPickedPokemons] = useState([]);

  // Dashboard 에 card 추가 함수
  const addPokemon = (pickedPokemon) => {
    if (
      pickedPokemons.length < 6 &&
      !pickedPokemons.some((pokemon) => pokemon.id === pickedPokemon.id)
    ) {
      setPickedPokemons([...pickedPokemons, pickedPokemon]);
    }
  };

  return (
    <DexCss>
      <h1>Choose Your Pokemon!</h1>
      <Dashboard pickedPokemons={pickedPokemons} />
      <PokemonList pokemons={MOCK_DATA} addPokemon={addPokemon} />
    </DexCss>
  );
};

export default Dex;
