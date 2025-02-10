import React, { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 17px;
`;

const PokemonList = () => {
  const { MOCK_DATA, addPokemon } = useContext(PokemonContext);

  return (
    <GridContainer>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemonData={pokemon}
          addPokemon={addPokemon}
        />
      ))}
    </GridContainer>
  );
};

export default PokemonList;
