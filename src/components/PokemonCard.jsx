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
    margin-bottom: 15px;
  }
  h4 {
    font-family: "Noto Sans KR", serif;
    font-weight: 500;
    margin-bottom: 7px;
  }
  p {
    width: 80px;
    height: 25px;
    background: #ffaa2a;
    border-radius: 12.5px;
    font-family: "Noto Sans KR", serif;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    color: #fff;
    padding-top: 3px;
    margin-bottom: 10px;
  }
  &:hover {
    transform: scale(1.05);
    /* transform: rotate3d(0, 1, 0, 360deg); */
  }
`;

const Button = styled.button`
  width: 70px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: #4763ff;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: #505050;
  }
`;

const PokemonCard = ({ data, addPokemon }) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/detail/${pokemon.id}`)}>PokemonList</Card>
  );
};

export default PokemonCard;
