import { styled } from '../stitches.config'

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
    },
  },
  defaultVariants: {
    size: 'small',
  },
})
