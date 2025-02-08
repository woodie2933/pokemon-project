import React from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  border: 1px solid #f00;
  border-radius: 15px;
  background: #fff;
  width: 100%;
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
`;

const Button = styled.button`
  width: 90px;
  min-height: 40px;
  border: none;
  border-radius: 10px;
  background: #ff633c;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: #6e6e6e;
  }
`;

const Dashboard = ({ pickedPokemons, removePokemon }) => {
  const slots = [
    ...pickedPokemons,
    ...Array(6 - pickedPokemons.length).fill(null),
  ];

  return (
    <DashboardContainer>
      {slots.map((pokemon, index) =>
        pokemon ? (
          <DashboardItem key={pokemon.id}>
            <img src={pokemon.img_url} alt={pokemon.korean_name} />
            <h4>{pokemon.korean_name}</h4>
            <p>{pokemon.types.join(" ")}</p>
            <Button onClick={() => removePokemon(pokemon.id)}>REMOVE</Button>
          </DashboardItem>
        ) : (
          <DashboardSlot key={index + "slot"}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
              alt="slotImage"
            />
          </DashboardSlot>
        )
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
