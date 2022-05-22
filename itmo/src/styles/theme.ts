import { DefaultTheme } from 'styled-components';

const blue = '#3951e7';
const purple = '#832ab9';

const theme: DefaultTheme = {
  colors: {
    black: '#000',
    white: '#fff',
    grey: '#6a6a6a',
    lightBlue: '#f2f4ff',
    blue: blue,
    purple: purple
  },
  fonts: {
    basic: 'OpenSans, sans-serif',
    title: 'Muller, sans-serif'
  },
  fontSizes: {
    small: '12px',
    medium: '16px',
    large: '20px',
    extraLarge: '40px'
  },
  gradients: {
    bluePurpleGradient: `linear-gradient(45deg, ${blue}, ${purple});`
  },
  shadows: {
    small: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
    medium: '0 0 16px 0 rgba(0, 0, 0, 0.16)',
    large: '0 0 24px 0 rgba(0, 0, 0, 0.20)',
  },
  borderRadius: {
    medium: '16px',
  },
};

export { theme };
