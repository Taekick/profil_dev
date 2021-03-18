import React, { useState } from "react";
import Picture from "./Picture/Picture";
import Profil from "./Profil/Profil.js";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: row;
  transition: all 0.2s ease-in;
  &.light-theme {
    background: #fff;
    color: #262323;
  }
  &.dark-theme {
    background: #101010;
    color: #fbf9f9;
  }
`;
const WrapperContain = styled.div`
  display: flex;
  align-items: center;
  width: 980px;
  @media screen and (max-width: 846px) {
    flex-direction: column;
  }
`;

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  console.log("darkTheme:", darkTheme);

  const dark = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <>
      <GlobalStyle />
      <Wrapper className={darkTheme ? "dark-theme" : "light-theme"}>
        <WrapperContain>
          <Picture></Picture>
          <Profil dark={dark} currentTheme={darkTheme}></Profil>
        </WrapperContain>
      </Wrapper>
    </>
  );
}

export default App;
