import { styled } from '../../Configs/stitches.config';

const Button = styled('button', {
  border: 'transparent',

  '& + button': {
    marginLeft: '10px',
  },

  variants: {
    color: {
      default: {
        backgroundColor: 'black',
        color: '$text',
        '&:hover': {
          backgroundColor: 'transparent',
          fontWeight: 'bold',
          color: 'black',
          border: 'solid black',
        },
      },
      primary: {
        backgroundColor: '$primary',
        color: '$text',
        '&:hover': {
          backgroundColor: 'transparent',
          fontWeight: 'bold',
          color: '$primary',
          border: 'solid $primary',
        },
      },
      secondary: {
        backgroundColor: '$secondary',
        color: '$text',
        '&:hover': {
          backgroundColor: 'transparent',
          fontWeight: 'bold',
          color: '$secondary',
          border: 'solid $secondary',
        },
      },
      danger: {
        backgroundColor: '$danger',
        color: '$text',
        '&:hover': {
          backgroundColor: 'transparent',
          fontWeight: 'bold',
          color: '$danger',
          border: 'solid $danger',
        },
      },
      success: {
        backgroundColor: '$success',
        color: '$text',
        '&:hover': {
          backgroundColor: 'transparent',
          fontWeight: 'bold',
          color: '$success',
          border: 'solid $success',
        },
      },
      warning: {
        backgroundColor: '$warning',
        color: '$text',
        '&:hover': {
          backgroundColor: 'transparent',
          fontWeight: 'bold',
          color: '$warning',
          border: 'solid $warning',
        },
      },
    },
    size: {
      1: {
        width: '80px',
        height: '25px',
        fontSize: '$9',
        borderWidth: 2,
      },
      2: {
        width: '120px',
        height: '35px',
        fontSize: '$8',
        borderWidth: 3,
      },
      3: {
        width: '200px',
        height: '50px',
        fontSize: '$7',
        borderWidth: 4,
      },
    },
    outlined: {
      true: {
        fontWeight: 'bold',
      },
    },
    rounded: {
      true: {
        borderRadius: '9999px',
      },
    },
  },

  compoundVariants: [
    {
      color: 'default',
      outlined: true,
      css: {
        backgroundColor: 'transparent',
        color: 'black',
        border: 'solid black',
        '&:hover': {
          backgroundColor: 'black',
          color: '$text',
        },
      },
    },
    {
      color: 'primary',
      outlined: true,
      css: {
        backgroundColor: 'transparent',
        color: '$primary',
        border: 'solid $primary',
        '&:hover': {
          backgroundColor: '$primary',
          color: '$text',
        },
      },
    },
    {
      color: 'secondary',
      outlined: true,
      css: {
        backgroundColor: 'transparent',
        color: '$secondary',
        border: 'solid $secondary',
        '&:hover': {
          backgroundColor: '$secondary',
          color: '$text',
        },
      },
    },
    {
      color: 'danger',
      outlined: true,
      css: {
        backgroundColor: 'transparent',
        color: '$danger',
        border: 'solid $danger',
        '&:hover': {
          backgroundColor: '$danger',
          color: '$text',
        },
      },
    },
    {
      color: 'success',
      outlined: true,
      css: {
        backgroundColor: 'transparent',
        color: '$success',
        border: 'solid $success',
        '&:hover': {
          backgroundColor: '$success',
          color: '$text',
        },
      },
    },
    {
      color: 'warning',
      outlined: true,
      css: {
        backgroundColor: 'transparent',
        color: '$warning',
        border: 'solid $warning',
        '&:hover': {
          backgroundColor: '$warning',
          color: '$text',
        },
      },
    },
  ],

  defaultVariants: {
    outlined: false,
    color: 'default',
    size: 2,
  },
});

export default Button;
