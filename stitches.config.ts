import { createStitches } from '@stitches/react'

const fontBasePx = '16px'
const spaceUnit = '1rem' // 16px

const calcSpace = (space: number) => `calc(${space} * ${spaceUnit})`
const calcFontSize = (fontSizePx: string) =>
  `calc(${spaceUnit} * (${
    parseInt(fontSizePx, 10) / parseInt(fontBasePx, 10)
  }))`

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      // https://coolors.co/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529
      color1: '#000000',
      color2: '#111111',
      color3: '#212529',
      color4: '#343A40',
      color5: '#495057',
      color6: '#6C757D',
      color7: '#ADB5BD',
      color8: '#CED4DA',
      color9: '#DEE2E6',
      color10: '#E9ECEF',
      color11: '#F8F9FA',
      color12: '#FFFFFF',

      // https://coolors.co/264653-2a9d8f-e9c46a-f4a261-e76f51
      colorful1: '#E76F51',
      colorful2: '#F4A261',
      colorful3: '#E9C46A',
      colorful4: '#2A9D8F',
      colorful5: '#264653',
    },
    fontSizes: {
      fontSize1: calcFontSize('12px'),
      fontSize2: calcFontSize('14px'),
      fontSize3: calcFontSize('16px'),
      fontSize4: calcFontSize('18px'),
      fontSize5: calcFontSize('20px'),
      fontSize6: calcFontSize('24px'),
      fontSize7: calcFontSize('32px'),
      fontSize8: calcFontSize('40px'),
      fontSize9: calcFontSize('48px'),
      fontSize10: calcFontSize('60px'),
      fontSize11: calcFontSize('72px'),
      fontSize12: calcFontSize('88px'),
    },
    space: {
      space1: calcSpace(0.25), // 4px
      space2: calcSpace(0.5), // 8px
      space3: calcSpace(0.75), // 12px
      space4: calcSpace(1), // 16px
      space5: calcSpace(1.25), // 20px
      space6: calcSpace(1.5), // 24px
      space7: calcSpace(1.75), // 28px
      space8: calcSpace(2), // 32px
      space9: calcSpace(2.25), // 36px
      space10: calcSpace(2.5), // 40px
      space11: calcSpace(2.75), // 44px
      space12: calcSpace(3), // 48px
      space13: calcSpace(3.25), // 52px
      space14: calcSpace(3.5), // 56px
      space15: calcSpace(3.75), // 60px
      space16: calcSpace(4), // 64px
      space17: calcSpace(4.25), // 68px
      space18: calcSpace(4.5), // 72px
      space19: calcSpace(4.75), // 76px
      space20: calcSpace(5), // 80px
    },
    radii: {
      radii1: '2px',
      radii2: '4px',
      radii3: '8px',
      round: '9999px',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    bp1: '(min-width: 768px)',
    bp2: '(min-width: 1024px)',
    bp3: '(min-width: 1280px)',
    bp4: '(min-width: 1536px)',
  },
})

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Nunito, sans-serif',
  },

  body: {
    backgroundColor: '$color2',
    color: '$color11',
  },
})
