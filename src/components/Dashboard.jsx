import React, { useContext } from "react";
import styled from "styled-components";
import { PokemonContext } from "../contexts/PokemonContext";
import Pokeball from "../image/Pokebola-pokeball-png-0.png";

const DashboardContainer = styled.div`
  border-radius: 15px;
  background: #fff;
  width: 1225px;
  min-height: 300px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 25px;
  margin-bottom: 40px;
  gap: 15px;
`;

const DashboardSlot = styled.div`
  width: 180px;
  min-height: 230px;
  border: 4px dashed #a7a7a7;
  border-radius: 10px;
  background: #e7e7e7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  img {
    width: 70px;
  }
`;

const DashboardItem = styled.div`
  width: 180px;
  min-height: 230px;
  border: 4px dashed #a7a7a7;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  img {
    width: 100px;
    border-radius: 50px;
    background: #ebebeb;
    margin-bottom: 10px;
  }
  h4 {
    font-family: "Noto Sans KR", serif;
    font-size: 15px;
    font-weight: 600;
    color: #4e4e4e;
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
    padding: 2px;
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  font-family: "Montserrat", serif;
  width: 90px;
  min-height: 37px;
  border: none;
  border-radius: 10px;
  background: #2d53ff;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: #6e6e6e;
  }
`;

const Dashboard = () => {
  const { selectedPokemons, removePokemon } = useContext(PokemonContext);

  const slots = [
    ...selectedPokemons,
    ...Array(6 - selectedPokemons.length).fill(null),
  ];

  return (
    <DashboardContainer>
      {slots.map((onboardPokemon, index) =>
        onboardPokemon ? (
          <DashboardItem
            key={onboardPokemon.id}
            onClick={() => navigate(`/detail/${onboardPokemon.id}`)}
          >
            <img
              src={onboardPokemon.img_url}
              alt={onboardPokemon.korean_name}
            />
            <h4>{onboardPokemon.korean_name}</h4>
            <p>{onboardPokemon.types.join(", ")}</p>
            <Button
              onClick={() => {
                removePokemon(onboardPokemon.id);
              }}
            >
              REMOVE
            </Button>
          </DashboardItem>
        ) : (
          <DashboardSlot key={index + "slot"}>
            <img src={Pokeball} alt="slotImage" />
          </DashboardSlot>
        )
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
