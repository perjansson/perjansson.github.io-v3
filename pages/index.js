import React from 'react'
import Head from 'next/head'
import RichText from '@madebyconnor/rich-text-to-jsx'

import styles from '../styles/Index.module.css'

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
        query: `
            {
                me(id: "6DJvlbWzPKLgZvCzVDRzos") {
                  name
                  title
                      contactsCollection {
                      items {
                        ... on Contact {
                          medium
                          url
                        }
                      }
                    }
                }
                projectCollection(order: startdate_DESC) {
                    items {
                        title
                        description { json }
                        me { json }
                        role
                        startdate
                        assetCollection {
                            items {
                                fileName
                                url
                            }
                        }
                    }
                }
            }`,
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
  return (
    <>
      <Head>
        <title>Per Jansson - Fullstack Web Developer</title>
      </Head>
      <Header contacts={me.contactsCollection.items} />
      <main className={styles.main}>
        <Me me={me} />
        <Projects projects={projects} />
      </main>
    </>
  )
}

function Header({ contacts }) {
  return (
    <header className={styles.header}>
      {contacts.map(({ url, medium }) => (
        <a href={url} target="_blank" rel="noopener noreferrer" key={medium}>
          {medium}
        </a>
      ))}
    </header>
  )
}

function Me({ me }) {
  return (
    <section className={styles.me}>
      <div className={styles.meName}>
        {me.name.split('').map((char, i) => (
          <span key={i} style={{ animationDelay: `${i / 10}s` }}>
            {char}
          </span>
        ))}
      </div>
      <div>{me.title}</div>
    </section>
  )
}

function Projects({ projects }) {
  return (
    <section className={styles.projects}>
      {projects?.map((project, i) => (
        <Project key={i} {...project} odd={i % 2 === 1} />
      ))}
    </section>
  )
}

function Project({ title, role, description, me, assetCollection, odd }) {
  const assetUrl = assetCollection.items[0]?.url

  return (
    <article className={odd ? styles.projectOdd : styles.project}>
      <img src={assetUrl} className={styles.image} />
      <div className={styles.details}>
        <header>{title}</header>
        <main>
          <RichText richText={me.json} />
        </main>
      </div>
    </article>
  )
}
