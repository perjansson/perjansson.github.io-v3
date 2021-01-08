import { BLOCKS } from '@contentful/rich-text-types'

type RichTextJson = { json: BLOCKS }

export type ProjectsType = ProjectType[]

export interface ProjectType {
  title: string
  client: string
  description: RichTextJson
  me: RichTextJson
  role: string
  date: string
  tags: string[]
  asset: ImageType
  startdate: string
  enddate: string
  city: string
}

export interface ImageType {
  fileName: string
  url: string
}

export interface MeType {
  name: string
  title: string
  contacts: {
    items: ContactType[]
  }
  short: RichTextJson
  long: RichTextJson
}

export type ContactsType = ContactType[]

export interface ContactType {
  medium: string
  url: string
}

export interface IndexPageData {
  data: {
    me: MeType
    projects: {
      items: ProjectsType
    }
  }
}
