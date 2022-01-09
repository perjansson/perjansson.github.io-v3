import { styled } from '../../stitches.config'

export const Focusable = styled('div', {
  variants: {
    isFocusVisible: {
      true: {
        boxShadow: '0 0 0 3px $colors$color2, 0 0 0 6px $colors$colorful6',
      },
      false: {
        boxShadow: 'none',
      },
    },
  },
})

export const AnchorWithinFocusable = styled('a', {
  outline: 'none',
  textDecoration: 'none',
})
