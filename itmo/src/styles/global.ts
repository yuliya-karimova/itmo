import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

export const GlobalStyle = createGlobalStyle<{theme: ThemeType}>`
  @font-face {
    font-family: "Muller";
    src: url("/fonts/Muller/Muller-Bold.woff") format("woff2"),
      url("/fonts/Muller/Muller-Bold.woff") format("woff"),
      url("/fonts/Muller/Muller-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "OpenSans";
    src: url("/fonts/OpenSans/OpenSans-SemiBold.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    bottom: 0;
    outline: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: OpenSans, sans-serif;
    font-weight: 600;
    font-size: ${({ theme: { fontSizes }}) => fontSizes.small};
    line-height: ${({ theme: { lineHeights }}) => lineHeights.small};
  }

  a,
  a:visited {
    color: inherit;
  }

  article,
  aside,
  footer,
  header,
  nav,
  section,
  main {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  img,
  video {
    max-width: 100%;
  }

  img {
    border-style: none;
  }

  button {
    border: 0;
    outline: none;
    background: none;
    
  }
`;
