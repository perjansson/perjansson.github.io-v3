import React, { useEffect, useRef, useState } from 'react'
import RichText from '@madebyconnor/rich-text-to-jsx'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import useDimensions from 'react-cool-dimensions'

import { styled } from '../stitches.config'
import { useData } from '../providers/DataContextProvider'
import { ProjectsType, ProjectType } from '../types'
import { formatProjectDates } from '../utils/projectHelper'
import { event } from '../utils/gtag'
import { Spacer } from './spacer'
import { ContentfulImage } from './contentfulImage'

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
  width: '100%',
  display: 'grid',
  backgroundColor: '$color3',
  borderRadius: '$radii5',
  gridTemplateRows: '0.05fr 0.05fr 0.9fr',
  gridTemplateColumns: 'auto',
  gridTemplateAreas: `
    'role'
    'title'
    'asset'
  `,
  cursor: 'pointer',

  '@bp1': {
    padding: '$space6',
    height: '100%',
  },

  '@bp2': {
    padding: '$space12',
  },
})

const Role = styled('div', {
  color: '$color8',
  textTransform: 'uppercase',

  '@bp1': {
    fontSize: '$fontSize1',
    lineHeight: '18px',
    textAlign: 'left',
  },

  '@bp2': {
    fontSize: '$fontSize3',
    fontWeight: '600',
    textAlign: 'right',
  },
})

const Title = styled('h2', {
  gridArea: 'title',
  fontFamily: 'Playfair Display, Helvetica Neue, Helvetica, Arial, sans-serif;',
  color: '$color12',
  textAlign: 'right',

  '@bp1': {
    fontSize: '$fontSize7',
    lineHeight: '32px',
    textAlign: 'left',
  },

  '@bp2': {
    fontSize: '$fontSize7',
  },

  '@bp3': {
    fontSize: '$fontSize8',
  },

  '@bp4': {
    fontSize: '$fontSize9',
  },
})

const AssetWrapper = styled('div', {
  gridArea: 'asset',
  marginTop: '$space10',
  position: 'relative',
  placeSelf: 'center',
  display: 'flex',
  justifyContent: 'center',
  transform: 'scale(1)',
  transition: 'transform 200ms ease-out',

  [`${ProjectContainer}:hover &`]: {
    transform: 'scale(1.05)',
  },

  '> div': {
    position: 'unset !important',
  },

  img: {
    objectFit: 'cover',
  },

  '@bp1': {
    width: '250px',
    height: '320px',
    marginTop: '$space5',
  },

  '@bp2': {
    width: '500px',
    height: '300px',
  },

  '@bp3': {
    width: '640px',
    height: '400px',
  },

  '@bp4': {
    width: '1000px',
    height: '600px',
  },
})

const Asset = styled(ContentfulImage, {
  background: '$color13 border-box !important',
  filter: 'brightness(0.7)',
  transition: 'filter 200ms ease-in-out',

  [`${ProjectContainer}:hover &`]: {
    filter: 'brightness(1)',
  },

  '@bp1': {
    border: '$space$space4 solid transparent !important',
    borderRadius: '$radii3',
  },

  '@bp2': {
    border: '$space$space6 solid transparent !important',
    borderRadius: '$radii4',
  },

  '@bp4': {
    border: '$space$space10 solid transparent !important',
    borderRadius: '$radii6',
  },
})

const projectVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: (progress: number) => progress * progress,
    },
  },
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
  const { observe, width, height } = useDimensions<HTMLDivElement | null>()
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
      <Role>
        {role} at {client}
      </Role>
      <Title>{titleShort}</Title>
      <AssetWrapper ref={observe}>
        <Asset
          src={asset.url}
          layout="fixed"
          width={`${Math.round(width)}px`}
          height={`${Math.round(height)}px`}
        ></Asset>
      </AssetWrapper>
    </ProjectContainer>
  )
}
