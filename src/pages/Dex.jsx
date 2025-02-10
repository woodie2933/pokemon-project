import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../data/MOCK_DATA";
import styled from "styled-components";

const DexCss = styled.div`
  font-family: "Luckiest Guy", serif;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  h1 {
    text-shadow: -4px 0px #0026ff, 0px 4px #0026ff, 4px 0px #0026ff,
      0px -4px #0026ff;
    color: #ffd000;
    font-size: 70px;
    margin-bottom: 45px;
    span {
      color: #ffffff;
    }
  }
`;

const Dex = () => {
  // useState
  // 초기값을 localStorage 로 설정
  const [selectedPokemons, setSelectedPokemons] = useState(() => {
    const storedPokemonData = localStorage.getItem("selectedPokemons");
    return storedPokemonData ? JSON.parse(storedPokemonData) : [];
  });

  // 대시보드 아이템 localStorage에 추가
  useEffect(() => {
    if (selectedPokemons.length !== 0) {
      localStorage.setItem(
        "selectedPokemons",
        JSON.stringify(selectedPokemons)
      );
    }
  }, [selectedPokemons]);

  // 대시보드에 카드 추가
  const addPokemon = (selectedPokemon) => {
    const added = selectedPokemons.some(
      (onboardPokemon) => onboardPokemon.id === selectedPokemon.id
    );

    // 중복 선택 방지
    if (added) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }

    // 최대 갯수 제한
    if (selectedPokemons.length < 6) {
      setSelectedPokemons((prev) => [...prev, selectedPokemon]);
    } else {
      alert("포켓몬은 최대 6마리까지 선택할 수 있습니다.");
    }
  };

  // 대시보드에서 포켓몬 삭제
  const removePokemon = (onboardPokemon) => {
    setSelectedPokemons((prev) =>
      prev.filter((ondeletePokemon) => ondeletePokemon.id !== onboardPokemon)
    );
  };

  return (
    <DexCss>
      <h1>
        Pick <span>Your</span> Pokemon !
      </h1>
      <Dashboard
        selectedPokemons={selectedPokemons}
        removePokemon={removePokemon}
      />
      <PokemonList pokemonData={MOCK_DATA} addPokemon={addPokemon} />
    </DexCss>
  );
};

export default Dex;
