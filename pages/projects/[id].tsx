import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import RichText from '@madebyconnor/rich-text-to-jsx'

import { styled } from '../../stitches.config'
import { AllProjectsData, ProjectPageData } from '../../types'
import { getAllProjects, getProjectPageData } from '../../queries'
import { BackgroundImage } from '../../components/backgroundImage'
import { Spacer } from '../../components/spacer'
import { formatProjectDates } from '../../utils/projectHelper'

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

const Main = styled('main', {
  minWidth: '320px',
  maxWidth: '1536px',
  margin: '0 auto',
  padding: '$space4 $space4 $space8 $space4',
})

const Content = styled('div', {
  '@bp1': {
    maxWidth: '100%',
    padding: '$space6',
  },

  '@bp2': {
    maxWidth: '70%',
    padding: '$space10',
  },

  '@bp3': {
    maxWidth: '60%',
    padding: '$space14',
  },

  '@bp4': {
    maxWidth: '60%',
    padding: '$space14',
  },

  '@bp5': {
    maxWidth: '50%',
    padding: '$space14',
  },
})

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
    fontSize: '$fontSize8',
  },

  '@bp2': {
    fontSize: '$fontSize9',
  },

  '@bp3': {
    fontSize: '$fontSize10',
  },

  '@bp4': {
    fontSize: '$fontSize11',
  },

  '@bp5': {
    fontSize: '$fontSize11',
  },
})

const Duration = styled('div', {
  fontSize: '$fontSize2',

  '@bp1': {
    fontSize: '$fontSize1',
  },
})

const ProjectInfo = styled('div', {
  '@bp1': {
    fontSize: '$fontSize2',
  },

  '@bp2': {
    fontSize: '$fontSize3',
  },

  '@bp3': {
    fontSize: '$fontSize4',
  },

  '@bp4': {
    fontSize: '$fontSize5',
  },
})

interface ProjectProps {
  data: ProjectPageData
}

const Project: React.FC<ProjectProps> = ({ data }) => {
  // TODO: Put data in provider?
  const {
    asset,
    title,
    titleShort,
    role,
    startdate,
    enddate,
    description,
    me,
  } = data.data.project

  return (
    <>
      <Head>
        <title>
          ✨ Per Jansson - Fullstack Web Developer - {titleShort} ✨
        </title>
      </Head>
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
            <Content>
              <SectionTitle>{title}</SectionTitle>
              <Spacer size="small" />
              <Duration>
                {role} {formatProjectDates(startdate, enddate)}
              </Duration>
              <Spacer size="large" />
              <ProjectInfo>
                <strong>What was the project about?</strong>
                <RichText richText={description.json} />
              </ProjectInfo>
              <Spacer size="small" />
              <ProjectInfo>
                <strong>More specifically what did I do?</strong>
                <RichText richText={me.json} />
              </ProjectInfo>
            </Content>
          </Main>
        </ProjectBackgroundImage>
      </AnimatePresence>
    </>
  )
}

export default Project
