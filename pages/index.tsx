import React, { useEffect } from 'react'
import Head from 'next/head'
import smoothscroll from 'smoothscroll-polyfill'

import { IndexPageData, MeType, ProjectsType } from '../types'
import { getIndexPageData } from '../queries'

import { Header } from '../components/header'
import { Projects } from '../components/projects'
import { TagCloud } from '../components/tagCloud'
import { Hero } from '../components/hero'
import { DataContextProvider } from '../providers/DataContextProvider'
import { styled } from '../stitches.config'
import { Spacer } from '../components/spacer'

if (process.browser) {
  smoothscroll.polyfill()
}

type StaticProps = {
  props: {
    data: IndexPageData
  }
}

export async function getStaticProps(): Promise<StaticProps> {
  const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

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
})

const ContentSpacer = () => (
  <Spacer
    size={{
      '@initial': 'medium',
      '@bp1': 'large',
    }}
  />
)

interface IndexProps {
  data: IndexPageData
}

const Index: React.FC<IndexProps> = ({ data }) => {
  return (
    <DataContextProvider data={data}>
      <Head>
        <title>Per Jansson - Fullstack Web Developer 👋</title>
      </Head>
      <Main>
        <Hero />
        <ContentSpacer />
        <Projects />
      </Main>
    </DataContextProvider>
  )
}

export default Index
