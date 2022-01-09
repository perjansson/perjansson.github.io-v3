import React from 'react'
import Head from 'next/head'
import { styled } from '../stitches.config'

import { IndexPageData } from '../types'
import { getIndexPageData } from '../client-api/indexPageApi'
import { IndexPageDataContextProvider } from '../providers/IndexPageDataProvider'
import { PAGES_SEO_SETTINGS } from '../utils/pagesSeo'
import { Hero } from '../components/hero'
import { Projects } from '../components/projects'
import { Spacer } from '../components/spacer'

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

const SEO: React.FC = () => (
  <Head>
    <title>{PAGES_SEO_SETTINGS.INDEX.title}</title>
    <meta name="description" content={PAGES_SEO_SETTINGS.INDEX.description} />
    <meta
      name="twitter:description"
      content={PAGES_SEO_SETTINGS.INDEX.description}
    />
    <meta
      property="og:description"
      content={PAGES_SEO_SETTINGS.INDEX.description}
    />
  </Head>
)

interface IndexProps {
  data: IndexPageData
}

const Index: React.FC<IndexProps> = ({ data }) => {
  return (
    <>
      <SEO />
      <IndexPageDataContextProvider data={data}>
        <Main>
          <Spacer size="small" />
          <Hero />
          <ContentSpacer />
          <Projects />
          <ContentSpacer />
        </Main>
      </IndexPageDataContextProvider>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const data = await getIndexPageData()

  return {
    props: {
      data,
    },
  }
}
