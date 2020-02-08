import React from "react";
import styled, { createGlobalStyle } from "styled-components";
// import bg from "./assets/bg.jpg";
import { Phone } from './components/main/Phone'

import SFProTextRegular from './assets/fonts/SF-Pro-Text-Regular.otf'
import SFProTextSemibold from './assets/fonts/SF-Pro-Text-Semibold.otf'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "HapnaSlab", serif;
    margin: 0;
    padding: 0;
  }
  @font-face {
    font-family: 'SFProTextRegular';
    src: url(${SFProTextRegular});
  }
  @font-face {
    font-family: 'SFProTextSemibold';
    src: url(${SFProTextSemibold});
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const App: React.FC = (props: any) => {
  return (
    <Container>
      <GlobalStyle />
      
      <Phone />
    </Container>
  );
};
