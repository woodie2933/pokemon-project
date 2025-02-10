import React, { createContext, useState, useEffect } from "react";
import MOCK_DATA from "../data/MOCK_DATA";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Context 생성
export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [selectedPokemons, setSelectedPokemons] = useState(() => {
    const storedPokemonData = localStorage.getItem("selectedPokemons");
    return storedPokemonData ? JSON.parse(storedPokemonData) : [];
  });

  // 상태가 변경될 때 localStorage에 저장
  useEffect(() => {
    if (selectedPokemons.length !== 0) {
      localStorage.setItem(
        "selectedPokemons",
        JSON.stringify(selectedPokemons)
      );
    }
  }, [selectedPokemons]);

  // 포켓몬 추가
  const addPokemon = (selectedPokemon) => {
    const added = selectedPokemons.some(
      (onboardPokemon) => onboardPokemon.id === selectedPokemon.id
    );

    // 중복 선택 방지
    if (added) {
      toast.info("이미 선택된 포켓몬입니다.");
      return;
    }

    // 최대 갯수 제한
    if (selectedPokemons.length < 6) {
      setSelectedPokemons((prev) => [...prev, selectedPokemon]);
    } else {
      toast.warn("포켓몬은 최대 6마리까지 선택할 수 있습니다.");
    }
    toast.success(`포켓몬이 추가되었습니다.`);
  };

  // 포켓몬 삭제
  const removePokemon = (onboardPokemon) => {
    setSelectedPokemons((prev) =>
      prev.filter((ondeletePokemon) => ondeletePokemon.id !== onboardPokemon)
    );
    toast.error(`포켓몬이 삭제되었습니다.`);
  };

  return (
    <PokemonContext.Provider
      value={{ selectedPokemons, addPokemon, removePokemon, MOCK_DATA }}
    >
      {children}
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={true}
      />
    </PokemonContext.Provider>
  );
};
