import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeCss = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomeBtn = styled.button`
  font-size: 45px;
  font-weight: 600;
  width: 250px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 40px;
  background: rgb(255, 57, 57);
  color: #ffffff;
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
        alt=""
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
