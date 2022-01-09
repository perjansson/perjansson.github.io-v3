import {
  getAllProjectsQuery,
  getIndexPageData as getIndexPageDataQuery,
  getProjectPageDataQuery,
} from './graphql/queries'
import { AllProjectsData, IndexPageData, ProjectPageData } from '../types'

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

export const getIndexPageData = async () => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: getIndexPageDataQuery,
      }),
    }
  )

  return await (res.json() as Promise<IndexPageData>)
}

export const getAllProjects = async () => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: getAllProjectsQuery,
      }),
    }
  )

  return await (res.json() as Promise<AllProjectsData>)
}

export const getProjectDetails = async (projectId: string) => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: getProjectPageDataQuery(projectId),
      }),
    }
  )

  return await (res.json() as Promise<ProjectPageData>)
}
