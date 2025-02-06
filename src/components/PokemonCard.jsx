import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  width: 190px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
`;

const Button = styled.button`
  width: 70px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: #ffc547;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  margin-top: 30px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: #fd8845;
  }
`;

const PokemonCard = ({ pokemon, addPokemon }) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/detail/${pokemon.id}`)}>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h4>{pokemon.korean_name}</h4>
      <p>{pokemon.types.join(" ")}</p>
      <Button
        onClick={(e) => {
          addPokemon(pokemon);
        }}
      >
        ADD
      </Button>
    </Card>
  );
};

export default PokemonCard;
