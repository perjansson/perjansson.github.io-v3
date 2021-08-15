const THEME_BREAKPOINT = 2100

export default function backgroundChanger(): void {
  const scrollFromTop = window.pageYOffset
  const htmlElement = document.documentElement
  const isDark = htmlElement.classList.contains('dark')

  if (isDark && scrollFromTop > THEME_BREAKPOINT) {
    htmlElement.classList.remove('dark')
  } else if (!isDark && scrollFromTop <= THEME_BREAKPOINT) {
    htmlElement.classList.add('dark')
  }
}
