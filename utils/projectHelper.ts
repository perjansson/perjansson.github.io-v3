import { ProjectsType } from '../types'

export const sortProjectsOnStartDate = (
  projects: ProjectsType
): ProjectsType => {
  const sortedProjects = [...projects]
  sortedProjects.sort(
    (p1, p2) =>
      new Date(p1.startdate).getTime() - new Date(p2.startdate).getTime()
  )
  return sortedProjects
}

export const formatProjectDates = (
  startdate: number | string,
  enddate: number | string
): string | undefined => {
  if (!startdate && !enddate) {
    return
  }

  if (startdate && !enddate) {
    return `During ${yearFromIsoDate(startdate)}`
  }

  if (!startdate && enddate) {
    return `During ${yearFromIsoDate(enddate)}`
  }

  const startYear = yearFromIsoDate(startdate)
  const endYear = yearFromIsoDate(enddate)

  if (startYear === endYear) {
    return `During ${startYear}`
  }

  return `Between ${startYear} and ${endYear}`
}

export function yearFromIsoDate(isoDate: string | number): number | undefined {
  if (!isoDate) {
    return
  }

  return new Date(
    typeof isoDate === 'number' ? '' + isoDate : isoDate
  ).getFullYear()
}

export function projectTagsToTagCloudData(
  projects: ProjectsType,
  minYear: number,
  maxYear: number
): { value: string; count: unknown }[] {
  const tagsObject = projects
    ?.filter((project) => {
      const startYear = yearFromIsoDate(project.startdate)
      const endYear = yearFromIsoDate(project.enddate)
      const projectDatesInBetweenMinMaxYear =
        startYear &&
        endYear &&
        ((minYear <= startYear && startYear <= maxYear) ||
          (minYear <= endYear && endYear <= maxYear))
      return projectDatesInBetweenMinMaxYear
    })
    .reduce(
      (state, project) => {
        project.tags.forEach((tag) => {
          const trimmedTag = tag.trim()
          const tagCount = state[trimmedTag]
          if (tagCount >= 1) {
            state[trimmedTag] = tagCount + 1
          } else {
            state[trimmedTag] = 1
          }
        })
        return state
      },
      {} as {
        [key: string]: number
      }
    )

  const tagsList = Object.entries(tagsObject).map(([key, value]) => ({
    value: key,
    count: value,
  }))

  return tagsList
}
