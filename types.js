import { shape, string, arrayOf } from 'prop-types'

export const ContactType = shape({
  medium: string,
  url: string,
})

export const ProjectType = shape({
  title: string,
  description: string,
  me: string,
  role: string,
  date: string,
  tags: arrayOf(string),
})

export const ProjectsType = shape({
  items: arrayOf(ProjectType),
})

export const ContactsCollectionType = shape({
  items: arrayOf(ContactType),
})

export const MeType = shape({
  name: string,
  title: string,
  contacts: ContactsCollectionType,
  short: string,
  long: string,
})
