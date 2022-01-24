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
      color3: '#191919',
      color4: '#212529',
      color5: '#343A40',
      color6: '#495057',
      color7: '#6C757D',
      color8: '#ADB5BD',
      color9: '#CED4DA',
      color10: '#DEE2E6',
      color11: '#E9ECEF',
      color12: '#F8F9FA',
      color13: '#FFFFFF',

      // https://coolors.co/264653-2a9d8f-e9c46a-f4a261-e76f51
      colorful1: '#E76F51',
      colorful2: '#F4A261',
      colorful3: '#E9C46A',
      colorful4: '#2A9D8F',
      colorful5: '#264653',
      colorful6: '#ffe100',
      colorful7: '#5773ff',
      colorful8: '#0e141b',
    },
    fontSizes: {
      fontSize0: calcFontSize('10px'),
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
      fontSize13: calcFontSize('102px'),
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
      radii4: '16px',
      radii5: '32px',
      radii6: '44px',
      radii7: '64px',
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
    bp1: 'only screen and (max-width: 767px)',
    bp2: 'only screen and (min-width: 768px)',
    bp3: 'only screen and (min-width: 1024px)',
    bp4: 'only screen and (min-width: 1280px)',
    bp5: 'only screen and (min-width: 1536px)',
  },
})

export const cursor =
  'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNSA0LjI3bDEwLjQ3NiA4LjczaC02LjU0MmwtMy45MzQgNS4xMTd2LTEzLjg0N3ptLTItNC4yN3YyNGw2LjkxOS05aDExLjA4MWwtMTgtMTV6IiAvPgo8L3N2Zz4=") 0 0, default'

export const cursorHover =
  'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjZmZmIgogICAgZD0iTTE4LjUzNiA3LjU1NWMtMS4xODgtLjI1Mi00LjYwNi0uOTA0LTUuNTM2LTEuMDg4di0zLjUxMmMwLTEuNjI5LTEuMzQ2LTIuOTU1LTMtMi45NTVzLTMgMS4zMjYtMyAyLjk1NXY3LjQ1N2MtLjU1NC0uMzM2LTEuMTg4LS42MjEtMS44MzgtLjcxNS0xLjgyMi0uMjYyLTMuMTYyLjk0LTMuMTYyIDIuNDk4IDAgLjgwNS4zNjMgMS42MTMgMS4wMjIgMi4yNzEgMy45NzIgMy45NzIgNS42ODggNS4xMjUgNi4wNTkgOS41MzRoOS45MTl2LTEuNzQ4YzAtNS4xNTQgMy02LjAzMSAzLTEwLjAyOSAwLTIuNDQ4LTEuMDYxLTQuMTU3LTMuNDY0LTQuNjY4em0uMzU3IDguMDIyYy0uODIxIDEuNDgzLTEuODM4IDMuMzE5LTEuODkxIDYuNDIzaC02LjEzYy0uNzI2LTMuODItMy44MS02LjMxOC02LjQzNi04Ljk0OS0uNjg4LS42ODYtLjM5My0xLjM3LjQ0Mi0xLjM3MyAxLjI2My0uMDA2IDMuMDYgMS44ODQgNC4xMjIgMy4yMDV2LTExLjkyOGMwLS41MTcuNDU4LS45NTUgMS0uOTU1czEgLjQzOCAxIC45NTV2Ni45NDhjMCAuMzE1LjI1Ni41NzEuNTcyLjU3MS4zMTQgMCAuNTctLjI1Ni41Ny0uNTcxdi0uNTc1YzAtLjUzNC40OS0uOTM4IDEuMDE0LS44MzMuMzk4LjA3OS42ODYuNDI4LjY4Ni44MzN2MS4yNzNjMCAuMzE1LjI1Ni41NzEuNTcxLjU3MXMuNTcxLS4yNTYuNTcxLS41NzF2LS44M2MwLS41MzEuNDg3LS45MzIgMS4wMDgtLjgyOC4zOTYuMDc4LjY4Mi40MjQuNjgyLjgyOHYxLjUzM2MwIC4zMTUuMjU2LjU3MS41NzEuNTcxcy41NzEtLjI1Ni41NzEtLjU3MXYtLjkxMmMwLS41MjMuNTQ1LS44NjcgMS4wMTgtLjY0Ni42NDUuMzA1IDEuMTY2LjkzMiAxLjE2NiAyLjQ3NyAwIDEuMzU1LS40NjUgMi4xOTMtMS4xMDcgMy4zNTR6IiAvPgo8L3N2Zz4=") 0 0, pointer'

export const cursorHoverDark =
  'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjMDAwIgogICAgZD0iTTE4LjUzNiA3LjU1NWMtMS4xODgtLjI1Mi00LjYwNi0uOTA0LTUuNTM2LTEuMDg4di0zLjUxMmMwLTEuNjI5LTEuMzQ2LTIuOTU1LTMtMi45NTVzLTMgMS4zMjYtMyAyLjk1NXY3LjQ1N2MtLjU1NC0uMzM2LTEuMTg4LS42MjEtMS44MzgtLjcxNS0xLjgyMi0uMjYyLTMuMTYyLjk0LTMuMTYyIDIuNDk4IDAgLjgwNS4zNjMgMS42MTMgMS4wMjIgMi4yNzEgMy45NzIgMy45NzIgNS42ODggNS4xMjUgNi4wNTkgOS41MzRoOS45MTl2LTEuNzQ4YzAtNS4xNTQgMy02LjAzMSAzLTEwLjAyOSAwLTIuNDQ4LTEuMDYxLTQuMTU3LTMuNDY0LTQuNjY4em0uMzU3IDguMDIyYy0uODIxIDEuNDgzLTEuODM4IDMuMzE5LTEuODkxIDYuNDIzaC02LjEzYy0uNzI2LTMuODItMy44MS02LjMxOC02LjQzNi04Ljk0OS0uNjg4LS42ODYtLjM5My0xLjM3LjQ0Mi0xLjM3MyAxLjI2My0uMDA2IDMuMDYgMS44ODQgNC4xMjIgMy4yMDV2LTExLjkyOGMwLS41MTcuNDU4LS45NTUgMS0uOTU1czEgLjQzOCAxIC45NTV2Ni45NDhjMCAuMzE1LjI1Ni41NzEuNTcyLjU3MS4zMTQgMCAuNTctLjI1Ni41Ny0uNTcxdi0uNTc1YzAtLjUzNC40OS0uOTM4IDEuMDE0LS44MzMuMzk4LjA3OS42ODYuNDI4LjY4Ni44MzN2MS4yNzNjMCAuMzE1LjI1Ni41NzEuNTcxLjU3MXMuNTcxLS4yNTYuNTcxLS41NzF2LS44M2MwLS41MzEuNDg3LS45MzIgMS4wMDgtLjgyOC4zOTYuMDc4LjY4Mi40MjQuNjgyLjgyOHYxLjUzM2MwIC4zMTUuMjU2LjU3MS41NzEuNTcxcy41NzEtLjI1Ni41NzEtLjU3MXYtLjkxMmMwLS41MjMuNTQ1LS44NjcgMS4wMTgtLjY0Ni42NDUuMzA1IDEuMTY2LjkzMiAxLjE2NiAyLjQ3NyAwIDEuMzU1LS40NjUgMi4xOTMtMS4xMDcgMy4zNTR6IiAvPgo8L3N2Zz4=") 0 0, pointer'

export const cursorActive =
  'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSIjZmZmIgogICAgZD0iTTQuMDIxIDEwLjY4OGMxLjIwOC4xNzIgMi41MSAxLjMxMiAyLjk3OSAxLjc4MXYtMTAuNTE0YzAtMS4wOC45Mi0xLjk1NSAyLTEuOTU1czIgLjg3NSAyIDEuOTU1djYuMDU4YzAgLjc4NC44MTQuODg1LjkxOS4xMDMuMjE2LTEuNjA0IDIuNTE5LTEuODE3IDIuNjkzLjM5OS4wNDMuNTQ2LjcyNi42NTUuODY2LjAyNy4zMjYtMS40NDQgMi41MDEtMS40NTggMi43NTguNzU4LjA2Ni41NzkuNzk2LjY5Ni44NDguMDM0LjA1MS0uNjcuMjgxLS45MzQuNjA3LS45MzQgMS4wOTggMCAyLjMwOSAyLjAxOSAyLjMwOSA0LjQxIDAgNC4yOTUtMyA0LjMwNi0zIDExLjE5aC0xMGMtLjMzMi0zLjk0Mi0zLjQ2Mi03LjQzMS02LjI3MS0xMC4yNDEtLjQ4OC0uNDg4LS43MjktMS4wNTItLjcyOS0xLjU2NCAwLS45My43NTktMS42ODggMi4wMjEtMS41MDd6IiAvPgo8L3N2Zz4=") 0 0, pointer'

const focusRing = {
  borderRadius: '$radii2',
  outline: 'none',
  boxShadow:
    '0 0 0 3px $colors$colorful3, 0 0 0 6px $colors$colorful1, 0 0 0 9px $colors$colorful4 !important',
}

export const focusStyles = {
  '*:focus': focusRing,

  '*:focus:not(:focus-visible)': {
    boxShadow: 'none !important',
  },
}

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  '*': {
    margin: 0,
    padding: 0,
    fontFamily: 'Nunito, Georgia, sans-serif',
  },

  'html, body': {
    height: '100%',

    cursor,
  },

  body: {
    minWidth: '320px',
    backgroundColor: '$color2',
    color: '$color11',
    lineHeight: 1.5,
    '-webkit-font-smoothing': 'antialiased',
  },

  'img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%',
  },

  'input, button, textarea, select': {
    font: 'inherit',
  },

  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word',
  },

  'h1, h2, h3, h4, h5, h6': {
    fontFamily: 'Playfair Display, Arial Narrow, serif;',
  },

  main: {
    minWidth: '320px',
    maxWidth: '1536px',
  },

  strong: {
    fontWeight: '800',
  },

  a: {
    display: 'inline-block',
    color: '$colorful3',
    textDecoration: 'none',

    '&:hover': {
      color: '$colorful4',
    },
  },

  'a, button': {
    '&:hover': {
      cursor: cursorHover,
    },

    '&:active': {
      cursor: cursorActive,
    },
  },

  '#root, #__next': {
    isolation: 'isolate',
  },

  '#__next': {
    height: '100%',
    minHeight: '100vh',
  },

  '@bp2': {
    ...focusStyles,
  },
})
