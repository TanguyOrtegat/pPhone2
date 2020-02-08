import React from "react";
import "minireset.css/minireset.css";
import styled, { createGlobalStyle } from "styled-components";
// import bg from "./assets/bg.jpg";
import { ratioFromViewport } from "./utils/CSSHelper";
import { Phone } from './components/main/Phone'

// import chineseRocks from "./assets/chinese_rocks_rg.ttf";

const bg = "", chineseRocks = ""

const GlobalStyle = createGlobalStyle`
  body {
    --background: url(${bg});
    background-size: 100% auto;
    font-family: "HapnaSlab", serif;
    margin: 0;
    padding: 0;
  }
  @font-face {
    font-family: 'ChineseRocks';
    src: url(${chineseRocks});
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: black;
  padding-right: ${ratioFromViewport(150)};

  display: flex;
  flex-direction: column;
`;

export const App: React.FC = (props: any) => {
  return (
    <Container>
      <GlobalStyle />
      
      <Phone />
    </Container>
  );
};
