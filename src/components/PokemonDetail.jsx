import React from "react";
import MOCK_DATA from "../data/MOCK_DATA";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const DetailContainer = styled.div`
  width: 900px;
  height: 550px;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  border: 5px solid #ffffff;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    margin-top: 65px;
  }
  button {
    position: absolute;
    top: 3px;
    left: 4px;
    background: none;
    border: none;
    font-size: 50px;
    padding-left: 17px;
    color: #ffffff;
    cursor: pointer;
  }
  div {
    background: #fff;
    border-radius: 25px;
    width: 100%;
    height: 220px;
    display: flex;
    flex-direction: column;
    padding: 40px;
    gap: 8px;
    h1 {
      font-family: "Noto Sans KR", serif;
      color: #343434;
      font-weight: 500;
      font-size: 30px;
      margin-bottom: 15px;
    }
    span {
      max-width: 120px;
      height: 30px;
      text-align: center;
      background: #413eff;
      border-radius: 15px;
      font-family: "Noto Sans KR", serif;
      color: #ffffff;
      font-weight: 500;
      font-size: 17px;
      padding: 1px 0 3px 0;
    }
    p {
      font-family: "Noto Sans KR", serif;
      color: #343434;
      font-weight: 400;
      font-size: 20px;
    }
  }
`;

const PokemonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const pokemon = MOCK_DATA.find((pokemon) => pokemon.id === Number(id));

  return (
    <DetailContainer>
      <button onClick={() => navigate("/dex")}>×</button>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <div>
        <h1>{pokemon.korean_name}</h1>
        <span>{pokemon.types.join(", ")}</span>
        <p>: {pokemon.description}</p>
      </div>
    </DetailContainer>
  );
};

export default PokemonDetail;
