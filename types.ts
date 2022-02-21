import { BLOCKS } from '@contentful/rich-text-types'

type RichTextJson = { json: BLOCKS }

export type ProjectsType = ProjectType[]

interface SysId {
  id: string
}

export interface Collaborator {
  name: string
  company: string
  linkedin?: string
}

export interface ProjectType {
  sys: SysId
  title: string
  titleShort: string
  client: string
  description: RichTextJson
  me: RichTextJson
  role: string
  date: string
  tech?: Array<string>
  tags: Array<string>
  asset: ImageType
  assetPlaceholder?: string
  startdate: string
  enddate: string
  city: string
  collaborators: {
    items: Array<Collaborator>
  }
}

export interface ImageType {
  fileName: string
  url: string
}

export interface MeType {
  firstName: string
  lastName: string
  name: string
  title: string
  profileImage: ImageType
  contacts: {
    items: Array<ContactType>
  }
  short: RichTextJson
  long: RichTextJson
}

export type ContactsType = Array<ContactType>

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

export interface AllProjectsData {
  data: {
    projects: {
      items: Array<{ sys: SysId }>
    }
  }
}

export interface ProjectPageData {
  data: {
    project: ProjectType
  }
}
