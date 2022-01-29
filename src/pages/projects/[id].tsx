import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'

import { styled } from '../../../stitches.config'
import { ProjectPageData } from '../../../types'
import {
  ProjectPageDataContextProvider,
  useProjectPageData,
} from '../../providers/ProjectPageDataProvider'
import { PAGES_SEO_SETTINGS } from '../../utils/pagesSeo'
import { BackgroundImage } from '../../components/backgroundImage'
import { ProjectDetails } from '../../components/projectContent'
import { ProjectTitle } from '../../components/projectTitle'
import {
  getAllProjects,
  getProjectDetails,
} from '../../client-api/indexPageApi'

const Main = styled('main', {
  height: '100%',
  margin: '0 auto',
  display: 'grid',
  gridTemplateRows: '1fr 0.4fr',
  gridTemplateAreas: `
    'project-title'
    'project-content'
  `,
  gap: '$space8',

  '@bp1': {
    height: 'auto',
    padding: '$space6',
    paddingTop: '25vh',
    gridTemplateRows: 'fit-content(320px) 320px',
    gridTemplateColumns: '100%',
  },

  '@bp2': {
    padding: '$space10',
    gridTemplateColumns: '80%',
  },

  '@bp3': {
    padding: '$space14',
    gridTemplateColumns: '80%',
  },

  '@bp4': {
    padding: '$space14',
    gridTemplateColumns: '80%',
  },

  '@bp5': {
    padding: '$space14',
    gridTemplateColumns: '100%',
  },
})

const ProjectBackgroundImage = styled(BackgroundImage, {
  height: '100%',

  '@bp1': {
    height: '40vh',
  },
})

const SEO: React.FC = () => {
  const { data } = useProjectPageData()
  const { project } = data || {}

  if (!project) {
    return null
  }

  return (
    <Head>
      <title>{PAGES_SEO_SETTINGS.PROJECT(project).title}</title>
      <meta
        name="description"
        content={PAGES_SEO_SETTINGS.PROJECT(project).description}
      />
      <meta
        name="twitter:description"
        content={PAGES_SEO_SETTINGS.PROJECT(project).description}
      />
      <meta
        property="og:description"
        content={PAGES_SEO_SETTINGS.PROJECT(project).description}
      />
    </Head>
  )
}

interface ProjectProps {
  data: ProjectPageData
}

const Project: React.FC<ProjectProps> = ({ data }) => {
  const { project } = data.data
  const { asset, assetPlaceholder } = project

  const placeholderProps: any = assetPlaceholder
    ? { placeholder: 'blur', blurDataURL: assetPlaceholder }
    : {}

  return (
    <ProjectPageDataContextProvider data={data}>
      <SEO />
      <AnimatePresence>
        <ProjectBackgroundImage
          src={asset.url}
          gradient
          layout="fill"
          loading="eager"
          priority
          {...placeholderProps}
          motionProps={{
            initial: { transformOrigin: 'top right', scale: 1.1 },
            animate: { scale: 1 },
            exit: { scale: 0.9 },
            transition: {
              duration: 0.75,
              ease: [0.61, 1, 0.88, 1],
            },
          }}
        >
          <Main>
            <ProjectTitle />
            <ProjectDetails />
          </Main>
        </ProjectBackgroundImage>
      </AnimatePresence>
    </ProjectPageDataContextProvider>
  )
}

export default Project

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getAllProjects()
  const paths = data.projects.items
    .map(({ sys: { id } }) => id)
    .map((id) => ({ params: { id } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectId = (params as { id: string }).id
  const data = await getProjectDetails(projectId)

  return {
    props: {
      data,
    },
  }
}
