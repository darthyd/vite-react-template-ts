import { createStitches, globalCss } from '@stitches/react';

export const colors = {
  background: '#fafafa',
  backgroundDark: '#2d2d2d',
  primary: 'blueviolet',
  secondary: 'chartreuse',
  danger: 'crimson',
  success: 'darkgreen',
  warning: 'darkorange',
  text: 'white',
};

const fontSizes = {
  10: '0.5rem',
  9: '0.864rem',
  8: '1rem',
  7: '1.2rem',
  6: '1.44rem',
  5: '1.728rem',
  4: '2.074rem',
  3: '2.441rem',
  2: '3.052rem',
  1: '4.5rem',
};

export const { styled } = createStitches({
  theme: {
    colors,
    fontSizes,
  },
});

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },
  body: {
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: colors.backgroundDark,
  },
});
