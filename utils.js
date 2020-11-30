export function backgroundChanger() {
  const scrollFromTop = window.pageYOffset
  const htmlElement = document.documentElement
  const currentTheme = htmlElement.getAttribute('data-theme')

  if ((currentTheme === 'dark' || !currentTheme) && scrollFromTop > 250) {
    htmlElement.setAttribute('data-theme', 'light')
  } else if (
    htmlElement.getAttribute('data-theme') === 'light' &&
    scrollFromTop <= 250
  ) {
    htmlElement.setAttribute('data-theme', 'dark')
  }
}
