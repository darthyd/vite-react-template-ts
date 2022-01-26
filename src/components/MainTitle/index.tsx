import { styled } from '../../Configs/stitches.config';

const MainTitle = styled('h1', {
  fontSize: '$1',

  variants: {
    color: {
      default: {
        color: '$text',
      },
      primary: {
        color: '$primary',
      },
      secondary: {
        color: '$secondary',
      },
      danger: {
        color: '$danger',
      },
      success: {
        color: '$success',
      },
      warning: {
        color: '$warning',
      },
    },
  },
});

export default MainTitle;
