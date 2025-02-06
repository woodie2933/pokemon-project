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
  align-items: center;
  padding-top: 40px;
  h1 {
    color: #ffbb00;
    font-size: 60px;
    letter-spacing: 2px;
    margin-bottom: 45px;
    text-shadow: -4px 0px #002fff, 0px 4px #002fff, 4px 0px #002fff,
      0px -4px #002fff;
  }
`;

const Dex = () => {
  const [pickedPokemons, setPickedPokemons] = useState([]);

  // Dashboard 에 card 추가 함수
  const addPokemon = (pickedPokemon) => {
    const added = pickedPokemons.some(
      (pokemon) => pokemon.id === pickedPokemon.id
    );

    if (added) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }

    if (pickedPokemons.length < 6) {
      setPickedPokemons([...pickedPokemons, pickedPokemon]);
    } else {
      alert("포켓몬은 최대 6마리까지 선택할 수 있습니다.");
    }
  };

  // Dashboard 에서 card 삭제 함수
  const removePokemon = (id) => {
    setPickedPokemons(pickedPokemons.filter((pokemon) => pokemon.id !== id));
  };

  return (
    <DexCss>
      <h1>Choose Your Pokemon !</h1>
      <Dashboard
        pickedPokemons={pickedPokemons}
        removePokemon={removePokemon}
      />
      <PokemonList pokemons={MOCK_DATA} addPokemon={addPokemon} />
    </DexCss>
  );
};

export default Dex;
