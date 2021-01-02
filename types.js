import { shape, string, arrayOf, object } from 'prop-types'

export const ContactType = shape({
  medium: string,
  url: string,
})

const ImageType = shape({
  fileName: string,
  url: string,
})

export const ProjectType = shape({
  title: string,
  description: object,
  me: object,
  role: string,
  date: string,
  tags: arrayOf(string),
  asset: ImageType,
})

export const ProjectsType = arrayOf(ProjectType)

export const ContactsCollectionType = shape({
  items: arrayOf(ContactType),
})

export const MeType = shape({
  name: string,
  title: string,
  contacts: ContactsCollectionType,
  short: object,
  long: object,
})
