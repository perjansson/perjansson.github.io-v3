import { styled } from '@stitches/react'

export const Main = styled('main', {
  minWidth: '320px',
  maxWidth: '1536px',
  margin: '0 auto',
  padding: '$space4 $space4 $space8 $space4',

  '@bp1': {
    padding: '$space6',
  },

  '@bp2': {
    padding: '$space10',
  },

  '@bp3': {
    padding: '$space14',
  },

  '@bp4': {
    padding: '$space14',
  },

  '@bp5': {
    padding: '$space14',
  },
})
