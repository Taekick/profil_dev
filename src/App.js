import React from "react";
import Picture from "./Picture/Picture";
import Profil from "./Profil/Profil.js";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: row;
  @media screen and (max-width: 846px) {
    flex-direction: column;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Picture></Picture>
        <Profil></Profil>
      </Wrapper>
    </>
  );
}

export default App;
