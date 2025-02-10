import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 17px;
`;

const PokemonList = ({ pokemonData, addPokemon }) => {
  return (
    <GridContainer>
      {pokemonData.map((pokemonData) => (
        <PokemonCard
          key={pokemonData.id}
          pokemonData={pokemonData}
          addPokemon={addPokemon}
        />
      ))}
    </GridContainer>
  );
};

export default PokemonList;
