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

export function formatProjectDates(startdate, enddate) {
  if (!startdate && !enddate) {
    return
  }

  if (startdate && !enddate) {
    return `during ${yearFromIsoDate(startdate)}`
  }

  if (!startdate && enddate) {
    return `during ${yearFromIsoDate(enddate)}`
  }

  const startYear = yearFromIsoDate(startdate)
  const endYear = yearFromIsoDate(enddate)

  if (startYear === endYear) {
    return `during ${startYear}`
  }

  return `between ${startYear} and ${endYear}`
}

function yearFromIsoDate(isoDateString) {
  if (!isoDateString) {
    return
  }

  return new Date(isoDateString).getFullYear()
}
