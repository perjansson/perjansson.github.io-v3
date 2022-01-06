import { GetStaticPaths, GetStaticProps } from 'next'

import { AllProjectsData, ProjectPageData } from '../../types'
import { getAllProjects, getProjectPageData } from '../../queries'
import { Main } from '../../components/main'
import { BackgroundImage } from '../../components/backgroundImage'
import { Spacer } from '../../components/spacer'
import { AnimatePresence } from 'framer-motion'

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: getAllProjects,
      }),
    }
  )

  const { data } = await (res.json() as Promise<AllProjectsData>)
  const paths = data.projects.items
    .map(({ sys: { id } }) => id)
    .map((id) => ({ params: { id } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: getProjectPageData((params as { id: string }).id),
      }),
    }
  )

  const data = await (res.json() as Promise<ProjectPageData>)

  return {
    props: {
      data,
    },
  }
}

interface ProjectProps {
  data: ProjectPageData
}

const Project: React.FC<ProjectProps> = ({ data }) => {
  // TODO: Put data in provider?
  const { asset } = data.data.project

  return (
    <AnimatePresence>
      <BackgroundImage
        src={asset.url}
        gradient
        layout="fill"
        loading="eager"
        priority
        motionProps={{
          initial: { transformOrigin: 'top right', scale: 1.1 },
          animate: { scale: 1 },
          exit: { scale: 0.9 },
          transition: {
            duration: 0.5,
            ease: [0.61, 1, 0.88, 1],
          },
        }}
      >
        <Spacer size="small" />
        <Main>{data.data.project.titleShort}</Main>
      </BackgroundImage>
    </AnimatePresence>
  )
}

export default Project
