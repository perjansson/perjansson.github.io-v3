import React, { useEffect } from 'react'
import Head from 'next/head'
import RichText from '@madebyconnor/rich-text-to-jsx'
import { Fade } from 'react-awesome-reveal'

import styles from '../styles/Index.module.css'
import { backgroundChanger, imageOfSize } from '../utils'
import { ContactType, MeType, ProjectsType, ProjectType } from '../types'

export async function getServerSideProps() {
  const data = {
    me: {
      name: 'Per Jansson',
      title: 'Fullstack Web Developer',
      contactsCollection: {
        items: [
          {
            medium: 'Medium',
            url: 'https://medium.com/@perjansson',
          },
          {
            medium: 'GitHub',
            url: 'https://github.com/perjansson',
          },
          {
            medium: 'LinkedIn',
            url: 'https://www.linkedin.com/in/pichdude',
          },
          {
            medium: 'Stack Overflow',
            url: 'https://stackoverflow.com/users/274426/per-jansson',
          },
          {
            medium: 'Twitter',
            url: 'https://www.twitter.com/per_jansson',
          },
          {
            medium: 'Instagram',
            url: 'https://instagram.com/per_jansson',
          },
          {
            medium: 'Facebook',
            url: 'https://www.facebook.com/pichdude',
          },
          {
            medium: 'Email',
            url: 'mailto:per.r.jansson@gmail.com',
          },
        ],
      },
    },
    projectCollection: {
      items: [
        {
          title: 'Panasonic Avionics Corporation',
          role: 'Frontend developer',
          description: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Platform to enable airplane passengers to attain wireless internet connectivity.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
              ],
              nodeType: 'document',
            },
          },
          me: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Software developer helping Panasonic developing new services to enable airplane passengers to attain wireless internet connectivity. Daily work consists of implementing new features and at the same time gradually modernizing the technical solution as well as helping the development team build a solution that will be a solid platform for the future.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
              ],
              nodeType: 'document',
            },
          },
          startdate: '2020-01-31T22:00:00.000Z',
          assetCollection: {
            items: [
              {
                fileName: 'pac_large.jpg',
                url:
                  'https://images.ctfassets.net/p016qepp2nj6/7tIyCdKWrfIatRExsOunKm/e0f55778baed5d37a70d1a4f8575c11b/pac_large.jpg',
              },
              {
                fileName: 'pac_medium.jpg',
                url:
                  'https://images.ctfassets.net/p016qepp2nj6/4Jveq2wQpEzQ8cD2M3VNwl/cbd6ab8d0807fb47581d236f7cb8cfa8/pac_medium.jpg',
              },
              {
                fileName: 'pac_small.jpg',
                url:
                  'https://images.ctfassets.net/p016qepp2nj6/76qiJWhvjoe98EyWSWqAFg/f854e109b2f83e5a7480371da2baed9c/pac_small.jpg',
              },
            ],
          },
        },
        {
          title: 'HBO GO - Smart TV app',
          role: 'Frontend developer',
          description: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'HBO GO client in US for TV platforms: Samsung Orsay, TiVo set-top box and Hotels (LG and Enseo devices). A web application using HTML, CSS, and TypeScript. Frameworks and libraries used are React, Redux, Styled Components and Ramda. It is built using Grunt and Browserify.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
              ],
              nodeType: 'document',
            },
          },
          me: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Software developer of the HBO GO app for different platforms and devices. Daily work consists of both developing new features in a shiny new codebase but also maintaining and solving tricky problems in a legacy codebase. Pushing releases to production on a regular basis. Fun and challenging!',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
              ],
              nodeType: 'document',
            },
          },
          startdate: '2018-07-31T22:00:00.000Z',
          assetCollection: {
            items: [
              {
                fileName: 'hbogo_large.jpg',
                url:
                  'https://images.ctfassets.net/p016qepp2nj6/6798xRvAkT6aAH5XspQ6Uy/ee918c73d22734802b1f0f487f5200dc/hbogo_large.jpg',
              },
              {
                fileName: 'hbogo_medium.jpg',
                url:
                  'https://images.ctfassets.net/p016qepp2nj6/I2IRssIWUsfqdYOuCPk0D/16368f9b9f4108a7c67431d9641293f8/hbogo_medium.jpg',
              },
              {
                fileName: 'hbogo_small.jpg',
                url:
                  'https://images.ctfassets.net/p016qepp2nj6/5BOPZrOn6SXkKyQBJ6xIw0/fc3426a7b8ee8e191962f90b47c48a81/hbogo_small.jpg',
              },
            ],
          },
        },
        {
          title: 'Unibet web for Kindred Group',
          role: 'Frontend developer',
          description: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Several different betting websites built using web technologies and using configuration of a headless CMS to create the final experience for the client.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
              ],
              nodeType: 'document',
            },
          },
          me: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Frontend developer in a team responsible for Unibet, Storspelare, Bingo.com and Bohemia Casino. Development of mostly new features build with the latest technologies but also maintaining legacy code. Trying daily to contribute to team becoming more efficient both in programming but also in team work and good development practices.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
              ],
              nodeType: 'document',
            },
          },
          startdate: '2017-07-31T22:00:00.000Z',
          assetCollection: {
            items: [
              {
                fileName: 'unibet_large.jpg',
                url:
                  'https://images.ctfassets.net/p016qepp2nj6/5gqWezyZUTDtgRxEaoF8U7/8d07b7d2b8142068f5f1b90659900900/unibet_large.jpg',
              },
              {
                fileName: 'unibet_medium.jpg',
                url:
                  'https://images.ctfassets.net/p016qepp2nj6/4KhJjq3SA2HmPe8iDAHwrT/c3e3a1aa2ffa69da687a6b214d7950d3/unibet_medium.jpg',
              },
              {
                fileName: 'unibet_small.jpg',
                url:
                  'https://images.ctfassets.net/p016qepp2nj6/6Gn0edE82uuRHEu9mHg8BH/c5fc813f989b0bc44d47203d0a6b818a/unibet_small.jpg',
              },
            ],
          },
        },
        {
          title: 'Insourcing Matchmaking Tool for EY',
          role: 'Fullstack developer',
          description: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'A web application that act as a matchmaking tool to find the best candidate of insourced consultants and employees for a given client and project. Also a back-office module for administrators and consultants to manage their skills, CVs, personal video, details etc.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
              ],
              nodeType: 'document',
            },
          },
          me: {
            json: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        "Responsible for building the full experience, ie. the client, a responsive web app that's both fast and intuitive to use, and the server with business logic, a Node.js app with MongoDB as persistence.",
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
              ],
              nodeType: 'document',
            },
          },
          startdate: '2016-07-31T22:00:00.000Z',
          assetCollection: {
            items: [
              {
                fileName: 'matchmaking-tool_large.jpg',
                url:
                  'https://images.ctfassets.net/p016qepp2nj6/7urSj9fexk0eP4wPHQBd4F/27fff3d160e36aa7ec4c0156f0704ebd/matchmaking-tool_large.jpg',
              },
              {
                fileName: 'matchmaking-tool_medium.jpg',
                url:
                  'https://images.ctfassets.net/p016qepp2nj6/2CEsmLYQ8FFxB2TZz128eY/9c0cd265f6cac825f7b00331b88ad19d/matchmaking-tool_medium.jpg',
              },
              {
                fileName: 'matchmaking-tool_small.jpg',
                url:
                  'https://images.ctfassets.net/p016qepp2nj6/6AlO1UQowgqVT0dHJkRIQu/b3136972c9761575cd8270c613f8f5e6/matchmaking-tool_small.jpg',
              },
            ],
          },
        },
      ],
    },
  }

  // const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
  // const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

  // const res = await fetch(
  //   `https://graphql.contentful.com/content/v1/spaces/${space}`,
  //   {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //       authorization: `Bearer ${accessToken}`,
  //     },
  //     body: JSON.stringify({
  //       query: `
  //           {
  //               me(id: "6DJvlbWzPKLgZvCzVDRzos") {
  //                 name
  //                 title
  //                     contactsCollection {
  //                     items {
  //                       ... on Contact {
  //                         medium
  //                         url
  //                       }
  //                     }
  //                   }
  //               }
  //               projectCollection(order: startdate_DESC) {
  //                   items {
  //                       title
  //                       description { json }
  //                       me { json }
  //                       role
  //                       startdate
  //                       assetCollection {
  //                           items {
  //                               fileName
  //                               url
  //                           }
  //                       }
  //                   }
  //               }
  //           }`,
  //     }),
  //   }
  // )

  // const { data } = await res.json()

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
      <main className={styles.main}>
        <Me me={me} />
        <Projects projects={projects} />
      </main>
    </>
  )
}
Index.propTypes = {
  me: MeType,
  projects: ProjectsType,
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
Header.propTypes = ContactType

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
Me.propTypes = {
  me: MeType,
}

function Projects({ projects }) {
  return (
    <section className={styles.projects}>
      {projects?.map((project, i) => (
        <Project key={i} project={project} odd={i % 2 === 1} />
      ))}
    </section>
  )
}
Projects.propTypes = {
  projects: ProjectsType,
}

function Project({
  project: { title, description, me, assetCollection, odd },
}) {
  const assetUrl = imageOfSize(assetCollection, 'small')?.url

  return (
    <Fade direction="up" triggerOnce>
      <article className={odd ? styles.projectOdd : styles.project}>
        <img src={assetUrl} className={styles.image} />
        <div className={styles.details}>
          <header>{title}</header>
          <main>
            <RichText richText={description.json} />
            <RichText richText={me.json} />
          </main>
        </div>
      </article>
    </Fade>
  )
}
Project.propTypes = {
  project: ProjectType,
}
