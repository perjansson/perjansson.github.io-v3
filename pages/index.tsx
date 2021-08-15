import React from 'react'
import Head from 'next/head'
import smoothscroll from 'smoothscroll-polyfill'
import 'lazysizes'

import { IndexPageData, MeType, ProjectsType } from '../types'
import { getIndexPageData } from '../queries'

import { Header } from '../components/header'
import { Me } from '../components/me'
import { Projects } from '../components/projects'
import { TagCloud } from '../components/tagCloud'

if (process.browser) {
  smoothscroll.polyfill()
}

type StaticProps = {
  props: {
    me: MeType
    projects: ProjectsType
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

  const { data } = await (res.json() as Promise<IndexPageData>)

  return {
    props: {
      me: data.me,
      projects: data.projects.items,
    },
  }
}

interface IndexProps {
  me: MeType
  projects: ProjectsType
}

const Index: React.FC<IndexProps> = ({ me, projects }) => {
  return (
    <>
      <Head>
        <title>Per Jansson - Fullstack Web Developer 👋</title>
      </Head>
      <div className="text-black dark:text-white">
        <Header contacts={me.contacts.items} />
        <main className="max-w-screen-lg my-0 mx-auto p-4 md:p-8 lg:p-12 xl:p-0 space-y-20">
          <Me me={me} />
          <TagCloud projects={projects} />
          <Projects projects={projects} />
        </main>
      </div>

      <style global jsx>{`
        @font-face {
          font-family: 'Inter';
          src: url('/fonts/Inter/Inter-ExtraBold.ttf');
          font-style: normal;
          font-weight: 800;
          font-display: swap;
        }

        @font-face {
          font-family: 'Inter';
          src: url('/fonts/Inter/Inter-Medium.ttf');
          font-style: normal;
          font-weight: 500;
          font-display: swap;
        }

        @font-face {
          font-family: 'Inter';
          src: url('/fonts/Inter/Inter-Light.ttf');
          font-style: normal;
          font-weight: 300;
          font-display: swap;
        }

        @font-face {
          font-family: 'NerkoOne';
          src: url('/fonts/NerkoOne/NerkoOne-Regular.ttf');
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }

        @font-face {
          font-family: 'HKGrotesk';
          src: url('/fonts/HKGrotesk/HKGrotesk-Regular.otf');
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }

        @font-face {
          font-family: 'HKGrotesk';
          src: url('/fonts/HKGrotesk/HKGrotesk-Bold.otf');
          font-style: normal;
          font-weight: 700;
          font-display: swap;
        }

        @font-face {
          font-family: 'SpaceMono';
          src: url('/fonts/SpaceMono/SpaceMono-Regular.ttf');
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }

        @font-face {
          font-family: 'SpaceMono';
          src: url('/fonts/SpaceMono/SpaceMono-Bold.ttf');
          font-style: normal;
          font-weight: 700;
          font-display: swap;
        }

        :root {
          --primary-bg-color: rgb(0, 0, 0);
        }

        @media screen and (prefers-color-scheme: light) {
          :root {
            --primary-bg-color: rgb(255, 255, 255);
          }
        }

        html,
        body {
          padding: 0;
          margin: 0;
          overflow-y: scroll;
          overflow-x: hidden;
          min-height: 100vh;
          background-color: var(--primary-bg-color);
          transition: background-color 0.5s ease;
        }

        body {
          font-family: Inter, Helvetica Neue, sans-serif;
          font-weight: 500;
          -webkit-font-smoothing: antialiased;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        body::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }

        a {
          color: inherit;
          text-decoration: none;
          transition: color 0.5s ease;
        }

        a:hover {
          color: rgba(255, 255, 255, 0.5);
        }

        * {
          box-sizing: border-box;
        }

        h1 {
          font-size: 64px;
          font-weight: normal;
        }

        p {
          margin-top: 10px;
          margin-bottom: 0;
        }
      `}</style>
    </>
  )
}

export default Index
