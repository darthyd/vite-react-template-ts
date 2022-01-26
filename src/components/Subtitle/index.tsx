import { styled } from '../../Configs/stitches.config';

const Subtitle = styled('h6', {
  fontSize: '$5',
  fontStyle: 'italic',

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

export default Subtitle;
