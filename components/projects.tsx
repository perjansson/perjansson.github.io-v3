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
  // height: 'max(calc(100vw / 1.65), 50vh)',
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
    fontSize: '$fontSize0',
    textAlign: 'center',
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

const AssetWrapper = styled('div', {
  gridArea: 'asset',
  marginTop: '$space10',
  position: 'relative',
  placeSelf: 'center',
  display: 'flex',
  justifyContent: 'center',

  '> div': {
    position: 'unset !important',
  },

  '@bp1': {
    width: '250px',
    height: '150px',
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
  borderRadius: '$radii5',
  filter: 'grayscale(40%) opacity(80%)',
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
