import React from "react";
import styled, { createGlobalStyle } from "styled-components";
// import bg from "./assets/bg.jpg";
import { Phone } from './components/main/Phone'

import SFProTextBold from './assets/fonts/SF-Pro-Text-Bold.otf'
import SFProTextLight from './assets/fonts/SF-Pro-Text-Light.ttf'
import SFProTextMedium from './assets/fonts/SF-Pro-Text-Medium.otf'
import SFProTextRegular from './assets/fonts/SF-Pro-Text-Regular.otf'
import SFProTextSemibold from './assets/fonts/SF-Pro-Text-Semibold.otf'
import SFProDisplayBold from './assets/fonts/SF-Pro-Display-Bold.otf'
import SFProDisplayRegular from './assets/fonts/SF-Pro-Display-Regular.otf'
import SFProDisplaySemibold from './assets/fonts/SF-Pro-Display-Semibold.otf'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "HapnaSlab", serif;
    margin: 0;
    padding: 0;
    background-image: url('https://cdn.gamer-network.net/2014/usgamer/GTA-V-PS4-Screenshot-12.jpg');
  }
  @font-face {
    font-family: 'SFProTextBold';
    src: url(${SFProTextBold});
  }
  @font-face {
    font-family: 'SFProTextLight';
    src: url(${SFProTextLight});
  }
  @font-face {
    font-family: 'SFProTextMedium';
    src: url(${SFProTextMedium});
  }
  @font-face {
    font-family: 'SFProTextRegular';
    src: url(${SFProTextRegular});
  }
  @font-face {
    font-family: 'SFProTextSemibold';
    src: url(${SFProTextSemibold});
  }
  @font-face {
    font-family: 'SFProDisplayBold';
    src: url(${SFProDisplayBold});
  }
  @font-face {
    font-family: 'SFProDisplayRegular';
    src: url(${SFProDisplayRegular});
  }
  @font-face {
    font-family: 'SFProDisplaySemibold';
    src: url(${SFProDisplaySemibold});
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
