import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeCss = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomeBtn = styled.button`
  width: 210px;
  height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 40px;
  background: rgb(255, 57, 57);
  color: #ffffff;
  font-size: 43px;
  font-weight: 600;
  transition: all 0.3s;
  &:hover {
    background: #505050;
    color: #fffaef;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeCss>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
        alt="homeImg"
      />
      <HomeBtn
        onClick={() => {
          navigate("/dex");
        }}
      >
        START!
      </HomeBtn>
    </HomeCss>
  );
};

export default Home;
