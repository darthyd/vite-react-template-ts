import { styled } from '../../Configs/stitches.config';

const Text = styled('p', {
  fontSize: '$8',

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
  defaultVariants: {
    color: 'default',
  },
});

export default Text;
