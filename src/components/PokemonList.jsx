import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 17px;
`;

const PokemonList = ({ data, addPokemon }) => {
  return (
    <GridContainer>
      {data.map((목데이터포켓몬) => (
        <PokemonCard
          key={PokemonCard.id}
          pokemon={목데이터포켓몬}
          addPokemon={addPokemon}
        />
      ))}
    </GridContainer>
  );
};

export default PokemonList;
