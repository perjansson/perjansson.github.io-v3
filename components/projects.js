import React from 'react'
import { bool } from 'prop-types'
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

function Project({ project: { title, description, me, role, asset }, odd }) {
  const assetUrl = asset ? `${asset.url}?fl=progressive&w=534&h=800` : undefined

  return (
    <Fade direction="up" triggerOnce>
      <article className={odd ? 'projectOdd' : 'project'}>
        <img
          src={assetUrl}
          alt={`Image for project ${title}`}
          className="image"
          width="400"
          height="267"
        />
        <div className="details">
          <header>{title}</header>
          <main>
            <div className="role">{role}</div>
            <RichText richText={description.json} />
          </main>
        </div>
        {/* <div className="toggle">X</div> */}

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
            max-width: 600px;
            text-align: left;
          }

          .project .details {
            margin-left: 2em;
          }

          .projectOdd .details {
            margin-right: 2em;
          }

          header {
            opacity: 0.5;
            font-size: 0.9em;
            font-weight: 700;
            text-transform: uppercase;
          }

          main {
            font-size: 1em;
            margin-top: 10px;
          }

          .role {
            margin-top: 20px;
            opacity: 0.5;
            font-size: 1.2em;
            font-weight: 700;
          }

          .toggle {
            width: 50px;
            display: flex;
            justify-content: flex-start;
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

            header {
              opacity: 0.5;
              font-size: 2.3em;
              text-transform: uppercase;
              text-align: center;
            }

            main {
              font-size: 1.4em;
              text-align: justify;
            }
          }

          /* Low Resolution Tablets, Mobiles (Landscape) */
          @media (min-width: 481px) and (max-width: 812px) {
            .image {
              max-width: 30%;
              width: 300px;
            }

            main {
              font-size: 0.9em;
              text-align: justify;
            }
          }

          /* Laptops, Desktops */
          @media (min-width: 1025px) and (max-width: 1280px) {
            .details {
              min-width: 600px;
            }
          }

          /* Desktops */
          @media (min-width: 1281px) {
            .details {
              min-width: 600px;
            }
          }
        `}</style>
      </article>
    </Fade>
  )
}
Project.propTypes = {
  project: ProjectType,
  odd: bool,
}
