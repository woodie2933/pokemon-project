import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 17px;
`;

const PokemonList = ({ pokemons, addPokemon }) => {
  return (
    <GridContainer>
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          addPokemon={addPokemon}
        />
      ))}
    </GridContainer>
  );
};

export default PokemonList;
