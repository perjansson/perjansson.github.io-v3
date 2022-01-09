import { styled } from '../../stitches.config'

export const Spacer = styled('div', {
  variants: {
    size: {
      small: {
        height: '20px',
      },
      medium: {
        height: '40px',
      },
      large: {
        height: '60px',
      },
      xLarge: {
        height: '120px',
      },
      xxLarge: {
        height: '240px',
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
})
