import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { styled } from '../stitches.config'

import { IndexPageData, ProjectType } from '../types'
import { getIndexPageData } from '../queries'
import { DataContextProvider } from '../providers/DataContextProvider'
import { PAGES_SEO_SETTINGS } from '../utils/pagesSeo'
import { Hero } from '../components/hero'
import { Projects } from '../components/projects'
import { Spacer } from '../components/spacer'
import { Header } from '../components/header'

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

export const getStaticProps = async () => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: getIndexPageData,
      }),
    }
  )

  const data = await (res.json() as Promise<IndexPageData>)

  return {
    props: {
      data,
    },
  }
}

const ContentSpacer = () => (
  <Spacer
    size={{
      '@initial': 'small',
      '@bp1': 'large',
      '@bp2': 'large',
      '@bp3': 'large',
      '@bp4': 'large',
      '@bp5': 'large',
    }}
  />
)

const Main = styled('main', {
  minWidth: '320px',
  maxWidth: '1536px',
  margin: '0 auto',
  padding: '$space4 $space4 $space8 $space4',

  '@bp1': {
    padding: '$space6',
  },

  '@bp2': {
    padding: '$space10',
  },

  '@bp3': {
    padding: '$space14',
  },

  '@bp4': {
    padding: '$space14',
  },

  '@bp5': {
    padding: '$space14',
  },
})

interface IndexProps {
  data: IndexPageData
}

const Index: React.FC<IndexProps> = ({ data }) => {
  const router = useRouter()

  const handleOnProjectSelect = (project: ProjectType) => {
    router.push(`/projects/${project.sys.id}`)
  }

  return (
    <>
      <Head>
        <title>{PAGES_SEO_SETTINGS.INDEX.title}</title>
        <meta
          name="description"
          content={PAGES_SEO_SETTINGS.INDEX.description}
        />
        <meta
          name="twitter:description"
          content={PAGES_SEO_SETTINGS.INDEX.description}
        />
        <meta
          property="og:description"
          content={PAGES_SEO_SETTINGS.INDEX.description}
        />
      </Head>
      <DataContextProvider data={data}>
        {/* <Header /> */}
        <Main>
          <Spacer size="small" />
          <Hero />
          <ContentSpacer />
          <Projects onProjectSelect={handleOnProjectSelect} />
          <ContentSpacer />
        </Main>
      </DataContextProvider>
    </>
  )
}

export default Index
