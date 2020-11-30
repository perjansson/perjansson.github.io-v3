import React from 'react'
import RichText from '@madebyconnor/rich-text-to-jsx'
import { Fade } from 'react-awesome-reveal'

import { ProjectsType, ProjectType } from '../types'

export function Projects({ projects }) {
  return (
    <section className="projects" data-cy="projects">
      {projects?.map((project, i) => (
        <Project key={i} project={project} odd={i % 2 === 1} />
      ))}

      <style jsx>{`
        .projects {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: var(--primary-text-color);
          font-size: 1.2em;
        }
      `}</style>
    </section>
  )
}
Projects.propTypes = {
  projects: ProjectsType,
}

function Project({ project: { title, description, me, asset, odd } }) {
  const assetUrl = asset ? `${asset.url}?fl=progressive&w=534&h=800` : undefined

  return (
    <Fade direction="up" triggerOnce>
      <article className={odd ? 'projectOdd' : 'project'}>
        <img src={assetUrl} className="image" width="400" height="267" />
        <div className="details">
          <header>{title}</header>
          <main>
            <RichText richText={description.json} />
            <RichText richText={me.json} />
          </main>
        </div>

        <style jsx>{`
          .project {
            width: 100%;
            margin-bottom: 8em;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }

          .projectOdd {
            width: 100%;
            margin-bottom: 8em;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            flex-flow: row-reverse;
          }

          .image {
            aspect-ratio: attr(width) / attr(height);
            background-color: rgba(0, 0, 0, 0.2);
            height: 267px;
            margin-bottom: 12px;
            width: 400px;
            object-fit: cover;
            border-radius: 20px;
          }

          .details {
            width: 100%;
            max-width: 700px;
            text-align: left;
          }

          .project .details {
            margin-left: 2em;
          }

          .projectOdd .details {
            margin-right: 2em;
          }

          .details main {
            font-size: 1em;
            margin-top: 10px;
          }

          .details header {
            opacity: 0.5;
            font-size: 0.9em;
            font-weight: 700;
            text-transform: uppercase;
          }

          /* Most of the Smartphones Mobiles (Portrait) */
          @media (min-width: 320px) and (max-width: 480px) {
            .project {
              flex-direction: column;
              align-items: center;
            }

            .projectOdd {
              flex-direction: column;
              align-items: center;
            }

            .image {
              width: 100%;
            }

            .project .details {
              margin: 0;
            }

            .projectOdd .details {
              margin: 0;
            }

            .details main {
              font-size: 1.4em;
              text-align: justify;
            }

            .details header {
              opacity: 0.5;
              font-size: 2.3em;
              text-transform: uppercase;
              text-align: center;
            }
          }

          /* Low Resolution Tablets, Mobiles (Landscape) */
          @media (min-width: 481px) and (max-width: 812px) {
            .image {
              max-width: 30%;
              width: 300px;
            }

            .details main {
              font-size: 0.9em;
              text-align: justify;
            }
          }
        `}</style>
      </article>
    </Fade>
  )
}
Project.propTypes = {
  project: ProjectType,
}
