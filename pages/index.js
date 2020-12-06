import React, { useEffect } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import Head from 'next/head'

import { backgroundChanger } from '../utils'
import { MeType, ProjectsType } from '../types'
import { getIndexPageData } from '../queries'

import { Header } from '../components/header'
import { Me } from '../components/me'
import { Projects } from '../components/projects'
import { TagCloud } from '../components/tagCloud'

if (process.browser) {
  smoothscroll.polyfill()
}

export async function getServerSideProps() {
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

  const { data } = await res.json()

  return {
    props: {
      me: data.me,
      projects: data.projectCollection.items,
    },
  }
}

export default function Index({ me, projects }) {
  useEffect(() => {
    window.addEventListener('scroll', backgroundChanger)
    return () => window.removeEventListener('scroll', backgroundChanger)
  }, [])

  return (
    <>
      <Head>
        <title>Per Jansson - Fullstack Web Developer</title>
      </Head>
      <Header contacts={me.contactsCollection.items} />
      <main className="main">
        <Me me={me} />
        <TagCloud allTags={projects} />
        <Projects projects={projects} />
      </main>

      <style jsx>{`
        .main {
          margin-left: auto;
          margin-right: auto;
          width: 85%;
          min-width: 320px;
          max-width: 1600px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        /* Most of the Smartphones Mobiles (Portrait) */
        @media (min-width: 320px) and (max-width: 480px) {
        }

        /* Low Resolution Tablets, Mobiles (Landscape) */
        @media (min-width: 481px) and (max-width: 767px) {
        }

        /* Tablets, Ipads (portrait) */
        @media (min-width: 768px) and (max-width: 1024px) {
        }

        /* Tablets, Ipads (landscape) */
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        }

        /* Laptops, Desktops */
        @media (min-width: 1025px) and (max-width: 1280px) {
        }

        /* Desktops */
        @media (min-width: 1281px) {
        }
      `}</style>

      <style global jsx>{`
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

        html,
        html[data-theme='dark'] {
          --primary-bg-color: rgb(0, 0, 0);
          --primary-text-color: rgb(255, 255, 255);
          --secondary-text-color: rgb(56, 48, 46, 0.9);
        }

        html[data-theme='light'] {
          --primary-bg-color: rgb(255, 255, 255);
          --primary-text-color: rgb(0, 0, 0);
          --secondary-text-color: rgb(56, 48, 46, 0.5);
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
          font-family: HKGrotesk, Helvetica Neue, sans-serif;
          -webkit-font-smoothing: antialiased;
          -ms-overflow-style: none;
          scrollbar-width: none;
          font-size: 10px;
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

        /* Most of the Smartphones Mobiles (Portrait) */
        @media (min-width: 320px) and (max-width: 480px) {
          body {
            font-size: 10px;
          }
        }

        /* Low Resolution Tablets, Mobiles (Landscape) */
        @media (min-width: 481px) and (max-width: 767px) {
          body {
            font-size: 12px;
          }
        }

        /* Tablets, Ipads (portrait) */
        @media (min-width: 768px) and (max-width: 1024px) {
          body {
            font-size: 16px;
          }
        }

        /* Tablets, Ipads (landscape) */
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
          body {
            font-size: 16px;
          }
        }

        /* Laptops, Desktops */
        @media (min-width: 1025px) and (max-width: 1280px) {
          body {
            font-size: 16px;
          }
        }

        /* Desktops */
        @media (min-width: 1281px) {
          body {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  )
}
Index.propTypes = {
  me: MeType,
  projects: ProjectsType,
}
