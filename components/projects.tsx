import React, { useEffect, useRef, useState } from 'react'
import RichText from '@madebyconnor/rich-text-to-jsx'
import { Fade } from 'react-awesome-reveal'
import SmoothCollapse from 'react-smooth-collapse'

import { ProjectsType, ProjectType } from '../types'
import { formatProjectDates } from '../utils/projectHelper'
import { event } from '../utils/gtag'

interface ProjectsProps {
  projects: ProjectsType
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<
    ProjectType | undefined
  >(undefined)

  const handleOnSelect = (project: ProjectType) => {
    setSelectedProject((previouslySelectedProject) => {
      const newProject =
        project !== previouslySelectedProject ? project : undefined

      if (newProject) {
        event({
          category: 'user_interaction',
          action: 'project_selected',
          label: newProject.title,
          value: 1,
        })
      }

      return newProject
    })
  }

  return (
    <section className="projects" data-cy="projects">
      {projects?.map((project, i) => (
        <Project
          key={i}
          project={project}
          odd={i % 2 === 1}
          selected={project === selectedProject}
          onSelect={handleOnSelect}
        />
      ))}

      <style jsx>{`
        .projects {
          max-width: 1100px;
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

interface ProjectProps {
  project: ProjectType
  odd: boolean
  selected: boolean
  onSelect: (project: ProjectType) => void
}

function Project({ project, odd, selected, onSelect }: ProjectProps) {
  const {
    title,
    client,
    description,
    me,
    role,
    asset,
    startdate,
    enddate,
    city,
    tags,
  } = project

  const lqipAssetUrl = asset
    ? `${asset.url}?fl=progressive&w=67&h=100`
    : undefined
  const assetUrl = asset ? `${asset.url}?fl=progressive&w=534&h=800` : undefined

  const element = useRef<null | HTMLDivElement>(null)
  const handleOnClick = () => {
    onSelect(project)
    setTimeout(
      () => element.current?.scrollIntoView({ behavior: 'smooth' }),
      600
    )
  }

  return (
    <Fade direction="up" triggerOnce>
      <article onClick={handleOnClick}>
        <div ref={element} className="scroll-section"></div>
        <div className="content">
          <img
            src={lqipAssetUrl}
            data-src={assetUrl}
            alt={`Image for project ${title}`}
            className="image lazyload"
            width="400"
            height="267"
          />
          <div className="details">
            <header>{title}</header>
            <main>
              <div className="sub-header">{role}</div>
              <RichText richText={description.json} />
            </main>
          </div>
          <div className="toggle">
            <div className="toggle-icon">{selected ? '-' : '+'}</div>
          </div>
        </div>
        <SmoothCollapse expanded={selected} heightTransition="0.4s">
          <div className="me">
            {me && (
              <>
                <div className="sub-header">
                  What I did {formatProjectDates(startdate, enddate)} for{' '}
                  {client}
                </div>
                <RichText richText={me.json} />
              </>
            )}
            {city && (
              <>
                <div className="sub-header">City</div>
                <p>{city}</p>
              </>
            )}
            {tags && (
              <>
                <div className="sub-header">Buzz words</div>
                <p className="tags">{tags?.join(', ')}</p>
              </>
            )}
          </div>
        </SmoothCollapse>
      </article>

      <style jsx>{`
        article {
          position: relative;
          cursor: pointer;
          padding: 50px 0;
          width: 100%;
          margin-bottom: 6em;
          transition: background-color 0.5s linear;
          background: ${selected ? 'rgba(0, 0, 0, 0.05)' : 'transparent'};
          border: 2px dashed ${selected ? 'rgba(0, 0, 0, 0.15)' : 'transparent'};
        }

        article:hover {
          background: rgba(0, 0, 0, 0.05);
        }

        .scroll-section {
          position: absolute;
          top: -50px;
        }

        .content {
          display: flex;
          flex-direction: ${odd ? 'row-reverse' : 'row'};
          justify-content: space-between;
          align-items: stretch;
          padding-left: ${odd ? undefined : '50px'};
          padding-right: ${odd ? '50px' : undefined};
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
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: ${odd ? undefined : '2em'};
          margin-right: ${odd ? '2em' : undefined};
          color: var(--primary-text-color);
        }

        header {
          opacity: 0.5;
          font-size: 1.4em;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--primary-text-color);
        }

        main {
          font-size: 1em;
          margin-top: 10px;
        }

        .sub-header {
          margin-top: 30px;
          opacity: 0.5;
          font-size: 1.2em;
          font-weight: 700;
        }

        .toggle {
          margin-top: -50px;
          min-width: 50px;
          text-align: center;
        }

        .toggle-icon {
          font-size: 2em;
          opacity: 0.4;
          transform: scale(0) rotate(-540deg);
          transition: all 0.4s ease;
        }

        article:hover .toggle-icon {
          transform: scale(1) rotate(0);
        }

        .me {
          margin: 0 50px;
        }

        .tags {
          font-family: SpaceMono;
          opacity: 0.5;
          font-size: 0.8em;
        }

        /* Most of the Smartphones Mobiles (Portrait) */
        @media (min-width: 320px) and (max-width: 480px) {
          article {
            border-width: 1px;
            padding: 20px;
          }

          .content {
            padding: 0;
            flex-direction: column;
            align-items: center;
          }

          .image {
            width: 100%;
          }

          .details {
            margin: 0;
          }

          header {
            opacity: 0.5;
            font-size: 1.8em;
            text-transform: uppercase;
            text-align: center;
          }

          main {
            font-size: 1.4em;
            text-align: justify;
          }

          .me {
            margin: 0;
            font-size: 1.4em;
            text-align: justify;
          }

          .toggle {
            display: none;
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
            min-width: 400px;
          }
        }

        /* Desktops */
        @media (min-width: 1281px) {
          .details {
            min-width: 600px;
          }
        }
      `}</style>
    </Fade>
  )
}
