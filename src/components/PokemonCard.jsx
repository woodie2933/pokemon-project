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
  transition: all 0.3s;
  cursor: pointer;
  img {
    width: 100px;
    border-radius: 50px;
    background: #ebebeb;
    margin-bottom: 10px;
  }
  h4 {
    font-size: 15px;
    font-family: "Noto Sans KR", serif;
    font-weight: 600;
    color: #4e4e4e;
    margin-bottom: 10px;
  }
  p {
    width: 100%;
    height: 23px;
    background: #ffb74b;
    font-family: "Noto Sans KR", serif;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    color: #fff;
    padding-top: 2px;
    margin-bottom: 10px;
  }
  &:hover {
    transform: scale(1.05);
    /* transform: rotate3d(0, 1, 0, 360deg); */
  }
`;

const Button = styled.button`
  font-family: "Montserrat", serif;
  width: 65px;
  height: 35px;
  border: none;
  border-radius: 10px;
  background: #ff704c;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: #6e6e6e;
  }
`;

const PokemonCard = ({ pokemonData, addPokemon }) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/detail/${pokemonData.id}`)}>
      <img src={pokemonData.img_url} alt={pokemonData.korean_name} />
      <h4>{pokemonData.korean_name}</h4>
      <p>{pokemonData.types.join(", ")}</p>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          addPokemon(pokemonData);
        }}
      >
        ADD
      </Button>
    </Card>
  );
};

export default PokemonCard;
