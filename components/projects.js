import React from 'react'
import RichText from '@madebyconnor/rich-text-to-jsx'
import { Fade } from 'react-awesome-reveal'

import { ProjectsType, ProjectType } from '../types'
import { imageOfSize } from '../utils'

export function Projects({ projects }) {
  return (
    <section className="projects">
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

function Project({
  project: { title, description, me, assetCollection, odd },
}) {
  const assetUrl = imageOfSize(assetCollection, 'small')?.url

  return (
    <Fade direction="up" triggerOnce>
      <article className={odd ? 'projectOdd' : 'project'}>
        <img src={assetUrl} className="image" />
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

          .details p {
            font-size: 1.2em;
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

            .details p {
              font-size: 1.4em;
              text-align: justify;
            }

            .details header {
              opacity: 0.5;
              font-size: 2.5em;
              text-transform: uppercase;
              text-align: center;
            }
          }

          /* Low Resolution Tablets, Mobiles (Landscape) */
          @media (min-width: 481px) and (max-width: 767px) {
            .image {
              max-width: 50%;
              width: 300px;
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
