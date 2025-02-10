import React from "react";
import MOCK_DATA from "../data/MOCK_DATA";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const DetailContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const DetailCard = styled.div`
  border: 5px solid #ffffff;
  width: 380px;
  height: 530px;
  border-radius: 25px;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  button {
    position: absolute;
    top: 130px;
    left: 943px;
    background: none;
    border: none;
    font-size: 50px;
    color: #ffffff;
    cursor: pointer;
  }
  img {
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
  }
  div {
    background: #fff;
    border-radius: 40px 40px 10px 10px;
    width: 100%;
    height: 240px;
    display: flex;
    flex-direction: column;
    padding: 25px 30px;
    gap: 10px;
    h1 {
      font-family: "Noto Sans KR", serif;
      color: #343434;
      font-weight: 500;
      font-size: 25px;
      margin-bottom: 30px;
    }
    span {
      max-width: 105px;
      height: 30px;
      text-align: center;
      background: #413eff;
      border-radius: 15px;
      font-family: "Noto Sans KR", serif;
      color: #ffffff;
      font-weight: 500;
      font-size: 15px;
      padding: 4px;
    }
    p {
      font-family: "Noto Sans KR", serif;
      color: #343434;
      font-weight: 400;
      font-size: 17px;
    }
  }
`;

const PokemonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const detailPokemon = MOCK_DATA.find((pokemon) => pokemon.id === Number(id));

  return (
    <DetailContainer>
      <DetailCard>
        <button onClick={() => navigate("/dex")}>×</button>
        <img src={detailPokemon.img_url} alt={detailPokemon.korean_name} />
        <div>
          <h1>{detailPokemon.korean_name}</h1>
          <span>{detailPokemon.types.join(", ")}</span>
          <p>: {detailPokemon.description}</p>
        </div>
      </DetailCard>
    </DetailContainer>
  );
};

export default PokemonDetail;
