import React, { useEffect, useRef, useState } from 'react'
import RichText from '@madebyconnor/rich-text-to-jsx'
import {
  AnimatePresence,
  motion,
  useElementScroll,
  useTransform,
  useViewportScroll,
} from 'framer-motion'

import { styled } from '../stitches.config'
import { useData } from '../providers/DataContextProvider'
import { ProjectsType, ProjectType } from '../types'
import { formatProjectDates } from '../utils/projectHelper'
import { event } from '../utils/gtag'

type ProjectMaybe = ProjectType | undefined

const ProjectsContainer = styled('section', {
  height: '90vh',
  width: '100%',
  backgroundColor: '$color3',
  borderRadius: '$radii5',
  overflow: 'auto',
})

const ScrollableContainer = styled('div', {
  width: '100%',
})

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

  const numberOfProjects = data!.projects.items.length
  const ref = useRef<HTMLDivElement>(null)
  const [projectIndex, setProjectIndex] = useState(0)
  const { scrollYProgress } = useElementScroll(ref)
  scrollYProgress.onChange((progress) => {
    const project = Math.min(
      Math.floor(numberOfProjects * progress),
      numberOfProjects - 1
    )
    setProjectIndex(project)
  })

  const project = data!.projects.items[projectIndex]

  return (
    <ProjectsContainer ref={ref} data-cy="projects">
      <ScrollableContainer
        style={{
          height: `calc(125vh * ${numberOfProjects})`,
        }}
      >
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 2 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'sticky',
              top: 0,
              height: '90vh',
              width: '100%',
            }}
          >
            <Project project={project} onSelect={handleOnSelect} />
          </motion.div>
        </AnimatePresence>
      </ScrollableContainer>
    </ProjectsContainer>
  )
}

interface ProjectProps {
  project: ProjectType
  onSelect: (project: ProjectType) => void
}

const ProjectContainer = styled('article', {
  height: '100%',
  width: '100%',
  maxWidth: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
})

const ProjectHeader = styled('h2', {
  fontFamily: 'Playfair Display, Helvetica Neue, Helvetica, Arial, sans-serif;',
  color: '$color12',

  '@bp1': {
    fontSize: '$fontSize0',
  },

  '@bp2': {
    fontSize: '$fontSize1',
  },

  '@bp3': {
    fontSize: '$fontSize2',
  },

  '@bp4': {
    fontSize: '$fontSize3',
  },

  '@bp5': {
    fontSize: '$fontSize4',
  },
})

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

  const handleOnClick = () => {
    onSelect(project)
    // TODO: Navigate to project page
  }

  return (
    <ProjectContainer onClick={handleOnClick}>
      <div style={{ maxHeight: '50vh' }}>
        <ProjectHeader>{titleShort}</ProjectHeader>
      </div>
    </ProjectContainer>
  )
}
