const THEME_BREAKPOINT = 2100

export default function backgroundChanger(): void {
  const scrollFromTop = window.pageYOffset
  const htmlElement = document.documentElement
  const currentTheme = htmlElement.getAttribute('data-theme')

  if (
    (currentTheme === 'dark' || !currentTheme) &&
    scrollFromTop > THEME_BREAKPOINT
  ) {
    htmlElement.setAttribute('data-theme', 'light')
  } else if (
    htmlElement.getAttribute('data-theme') === 'light' &&
    scrollFromTop <= THEME_BREAKPOINT
  ) {
    htmlElement.setAttribute('data-theme', 'dark')
  }
}
