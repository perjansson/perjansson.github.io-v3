import React, { KeyboardEvent, useEffect } from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import useDimensions from 'react-cool-dimensions'
import { FocusScope, useFocusManager } from '@react-aria/focus'

import {
  cursorHoverDark,
  cursorHover,
  styled,
  theme,
} from '../../stitches.config'
import { useIndexPageData } from '../providers/IndexPageDataProvider'
import { ProjectType } from '../../types'
import { event } from '../utils/gtag'
import { Spacer } from './spacer'
import { ContentfulImage } from './contentfulImage'
import { ParallaxEffect } from './parallaxEffect'
import { Sparkles } from './sparkle'

const Title = styled('h2', {
  color: '$color12',
  fontSize: '$fontSize8',
  transition: 'font-size 0.8s ease-in-out',

  '@bp1': {
    fontSize: '$fontSize7',
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

  '@bp5': {
    fontSize: '$fontSize10',
  },
})

export const Projects: React.FC = () => {
  const { data } = useIndexPageData()

  const handleOnSelect = (project: ProjectType) => {
    event({
      category: 'user_interaction',
      action: 'project_selected',
      label: project.title,
      value: 1,
    })
  }

  return (
    <>
      <Title>
        Check out some projects I&apos;ve done as a consultant or freelancer
      </Title>
      <Spacer size="large" />
      <FocusScope>
        <section data-cy="projects">
          {data?.projects.items.map((project) => (
            <React.Fragment key={project.titleShort + project.client}>
              <Project project={project} onSelect={handleOnSelect} />
              <Spacer size="medium" />
            </React.Fragment>
          ))}
        </section>
      </FocusScope>
    </>
  )
}

const ProjectContainer = styled(motion.article, {
  width: '100%',
  display: 'grid',
  backgroundColor: '$color3',
  borderRadius: '$radii5',

  '@bp1': {
    padding: '$space8 $space2',
    height: '100%',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '0.05fr 0.05fr 0.05fr 0.9fr',
    gridTemplateAreas: `
      'role'
      'title'
      'tech'
      'asset'
    `,
  },

  '@bp2': {
    padding: '$space14',
    gridTemplateColumns: '0.7fr 1.3fr',
    gridTemplateRows: '0.05fr 0.05fr 0.9fr',
    gridTemplateAreas: `
      'tech role'
      'tech title'
      'asset asset'
    `,
  },
})

const Role = styled('div', {
  gridArea: 'role',
  color: '$color8',
  textTransform: 'uppercase',
  fontWeight: '$bold',
  textAlign: 'right',

  '@bp1': {
    textAlign: 'center',
    fontSize: '$fontSize1',
  },

  '@bp2': {
    fontSize: '$fontSize3',
  },

  '@bp3': {
    fontSize: '$fontSize5',
  },
})

const ProjectTitle = styled('h2', {
  gridArea: 'title',
  color: '$color12',
  textAlign: 'right',

  '@bp1': {
    textAlign: 'center',
    fontSize: '$fontSize6',
  },

  '@bp2': {
    fontSize: '$fontSize6',
  },

  '@bp3': {
    fontSize: '$fontSize7',
  },

  '@bp4': {
    fontSize: '$fontSize9',
  },
})

const Tech = styled('div', {
  gridArea: 'tech',
  color: '$color7',
  fontWeight: 'bold',
  textAlign: 'left',

  '@bp1': {
    marginTop: '$space1',
    fontSize: '$fontSize1',
    textAlign: 'center',
  },

  '@bp2': {
    fontSize: '$fontSize3',
  },

  '@bp3': {
    fontSize: '$fontSize5',
  },
})

const AssetWrapper = styled('div', {
  gridArea: 'asset',
  marginTop: '$space14',
  position: 'relative',
  placeSelf: 'center',
  display: 'flex',
  justifyContent: 'center',
  transform: 'scale(1)',
  transition: 'transform 200ms ease-out',

  [`${ProjectContainer}:hover &`]: {
    transform: 'scale(1.03)',
  },

  '@bp1': {
    marginTop: '$space6',
    width: '310px',
    height: '320px',
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

const Border = styled('div', {
  height: '100%',
  width: '100%',
  background: '$color13 border-box !important',

  '> div': {
    position: 'unset !important',
    borderRadius: '$radii3',
  },

  img: {
    objectFit: 'cover',
  },

  '&:hover': {
    cursor: cursorHoverDark,
  },

  '@bp1': {
    border: '$space$space1 solid transparent !important',
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

const Asset = styled(ContentfulImage, {
  filter: 'brightness(0.7)',
  transition: 'filter 200ms ease-in-out',
  cursor: cursorHover,

  [`${ProjectContainer}:hover &`]: {
    filter: 'brightness(1)',
  },
})

const Anchor = styled('a', {
  display: 'flex',
  borderRadius: '$radii5',
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

interface ProjectProps {
  project: ProjectType
  onSelect: (project: ProjectType) => void
}

const Project: React.FC<ProjectProps> = ({ project, onSelect }) => {
  const { titleShort, client, role, tech, asset, assetPlaceholder } = project
  const { observe, width, height } = useDimensions<HTMLDivElement>()
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const focusManager = useFocusManager()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const handleOnClick = () => {
    onSelect(project)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
    switch (event.key) {
      case 'ArrowDown':
        focusManager.focusNext()
        break
      case 'ArrowUp':
        focusManager.focusPrevious()
        break
    }
  }

  const imageWidth = Math.round(width)
  const imageHeight = Math.round(height)

  const placeholderProps: object =
    assetPlaceholder && imageWidth > 0 && imageHeight > 0
      ? { placeholder: 'blur', blurDataURL: assetPlaceholder }
      : {}

  return (
    <Link href={`/projects/${project.sys.id}`} passHref>
      <Anchor onKeyDown={onKeyDown}>
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
          <ProjectTitle>{titleShort}</ProjectTitle>
          <Tech>
            <Sparkles color={theme.colors.color11.value}>
              {tech?.join(', ')}
            </Sparkles>
          </Tech>
          <AssetWrapper ref={observe}>
            <Border>
              <ParallaxEffect>
                <Asset
                  src={asset.url}
                  {...placeholderProps}
                  alt={`Project image for ${role} at ${client}`}
                  layout="fixed"
                  width={imageWidth}
                  height={imageHeight}
                />
              </ParallaxEffect>
            </Border>
          </AssetWrapper>
        </ProjectContainer>
      </Anchor>
    </Link>
  )
}
