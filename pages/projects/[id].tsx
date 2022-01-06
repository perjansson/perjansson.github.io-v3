import { GetStaticPaths, GetStaticProps } from 'next'

import { styled } from '../../stitches.config'
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

const TopSpacer = styled(Spacer, {
  '@bp1': {
    marginTop: '35vh',
  },
})

const ProjectBackgroundImage = styled(BackgroundImage, {
  height: '100%',

  '@bp1': {
    height: '40vh',
  },
})

const SectionTitle = styled('h1', {
  color: '$color10',
  textShadow:
    '1px 1px 10px rgba(17, 17, 17, 0.2), 1px 1px 10px rgba(17, 17, 17, 0.2)',
  letterSpacing: '-1.5px',
  lineHeight: '120%',
  transition: 'font-size 0.8s ease-in-out',
  fontFamily: 'Playfair Display, Helvetica Neue, Helvetica, Arial, sans-serif;',
  fontWeight: 700,

  '@bp1': {
    maxWidth: '100%',
    fontSize: '$fontSize8',
  },

  '@bp2': {
    maxWidth: '400px',
    fontSize: '$fontSize9',
  },

  '@bp3': {
    maxWidth: '720px',
    fontSize: '$fontSize10',
  },

  '@bp4': {
    fontSize: '$fontSize11',
  },

  '@bp5': {
    fontSize: '$fontSize12',
  },
})

interface ProjectProps {
  data: ProjectPageData
}

const Project: React.FC<ProjectProps> = ({ data }) => {
  // TODO: Put data in provider?
  const { asset, titleShort } = data.data.project

  return (
    <AnimatePresence>
      <ProjectBackgroundImage
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
        <TopSpacer />
        <Main>
          <SectionTitle>{titleShort}</SectionTitle>
        </Main>
      </ProjectBackgroundImage>
    </AnimatePresence>
  )
}

export default Project
