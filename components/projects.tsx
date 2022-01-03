import React, { useEffect, useRef, useState } from 'react'
import RichText from '@madebyconnor/rich-text-to-jsx'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { styled } from '../stitches.config'
import { useData } from '../providers/DataContextProvider'
import { ProjectsType, ProjectType } from '../types'
import { formatProjectDates } from '../utils/projectHelper'
import { event } from '../utils/gtag'
import { Spacer } from './spacer'

type ProjectMaybe = ProjectType | undefined

export const Projects: React.FC = () => {
  const { data } = useData()
  const [selectedProject, setSelectedProject] = useState<ProjectMaybe>()

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
    <section data-cy="projects">
      {data?.projects.items.map((project) => (
        <>
          <Project
            key={project.title}
            project={project}
            onSelect={handleOnSelect}
          />
          <Spacer size="medium" />
        </>
      ))}
    </section>
  )
}

interface ProjectProps {
  project: ProjectType
  onSelect: (project: ProjectType) => void
}

const ProjectContainer = styled(motion.article, {
  height: 'max(calc(100vw / 3), 50vh)',
  width: '100%',
  display: 'grid',
  backgroundColor: '$color3',
  borderRadius: '$radii5',
  gridTemplateRows: '0.2fr 0.8fr',
  gridTemplateColumns: 'auto',
  gridTemplateAreas: `
    'project-header'
    'project-image'
  `,

  '@bp1': {
    padding: '$space4',
  },

  '@bp2': {
    padding: '$space8 $space12',
  },
})

const ProjectHeader = styled('h2', {
  gridArea: 'project-header',
  fontFamily: 'Playfair Display, Helvetica Neue, Helvetica, Arial, sans-serif;',
  color: '$color12',
  textAlign: 'right',

  '@bp1': {
    fontSize: '$fontSize3',
    textAlign: 'center',
  },

  '@bp2': {
    fontSize: '$fontSize6',
  },

  '@bp3': {
    fontSize: '$fontSize7',
  },

  '@bp4': {
    fontSize: '$fontSize8',
  },

  '@bp5': {
    fontSize: '$fontSize9',
  },
})

const projectVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
}

const Project: React.FC<ProjectProps> = ({ project, onSelect }) => {
  const {
    title,
    titleShort,
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

  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const handleOnClick = () => {
    onSelect(project)
    // TODO: Navigate to project page
  }

  return (
    <ProjectContainer
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={projectVariants}
      onClick={handleOnClick}
    >
      <ProjectHeader>{titleShort}</ProjectHeader>
    </ProjectContainer>
  )
}
