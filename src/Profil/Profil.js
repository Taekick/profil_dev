import React from "react";
import styled from "styled-components";
import Skills from "../Skills/Skills";
import { SiReact } from "react-icons/si";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  border-top: 2px solid;
  border-bottom: 2px solid;
  padding: 20px 0;
  @media screen and (max-width: 846px) {
    /* padding: 10px 30px; */
    margin: 0 30px;
  }
`;
const Name = styled.h1`
  font-weight: bold;
  margin: 0;
  font-size: 2.8rem;
  line-height: 0.8em;
`;
const Job = styled.span`
  font-size: 2rem;
  /* font-family: "PT Sans Narrow"; */
`;

const Intro = styled.div`
  margin: 30px 0 10px;
`;
const Line = styled.p`
  margin: 5px 0;
  align-items: center;
  font-weight: 100;
`;
const ReactPicto = styled(SiReact)`
  color: #03d8ff;
  margin: 4px 0 0 5px;
  vertical-align: top;
`;
const Profil = () => {
  return (
    <Wrapper>
      <Name>Alexandre LY</Name>
      <Job>Développeur front-end</Job>

      <Intro>
        <Line>
          Je développe en JavaScript et j'utilise particulièrement et même
          beaucoup React
          <ReactPicto />
        </Line>
        <Line>
          J'aime également intégrer de belles maquettes graphique et donner vie
          aux interfaces.
        </Line>
      </Intro>
      <Skills></Skills>
    </Wrapper>
  );
};

export default Profil;
