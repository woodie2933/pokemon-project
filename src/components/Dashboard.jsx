import React from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  border: 1px solid #f00;
  background: #f8bf44;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DashboardItem = styled.div`
  border: 1px solid #f00;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Dashboard = ({ pickedPokemons }) => {
  return (
    <DashboardContainer>
      <h2>Selected</h2>
      {pickedPokemons.map((pokemon) => (
        <DashboardItem key={pokemon.id}>
          <img src={pokemon.img_url} alt={pokemon.korean_name} />
          <span>{pokemon.korean_name}</span>
          <button>REMOVE</button>
        </DashboardItem>
      ))}
    </DashboardContainer>
  );
};

export default Dashboard;
