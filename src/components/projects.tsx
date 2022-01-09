import React, { useEffect } from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import useDimensions from 'react-cool-dimensions'
import { useFocusRing } from '@react-aria/focus'

import { styled } from '../../stitches.config'
import { useIndexPageData } from '../providers/IndexPageDataProvider'
import { ProjectType } from '../../types'
import { event } from '../utils/gtag'
import { Spacer } from './spacer'
import { ContentfulImage } from './contentfulImage'
import { ParallaxEffect } from './parallaxEffect'
import { AnchorWithinFocusable, Focusable } from './focusable'

const SectionTitle = styled('h2', {
  color: '$color12',
  fontSize: '$fontSize8',
  letterSpacing: '-1.5px',
  lineHeight: '110%',
  transition: 'font-size 0.8s ease-in-out',
  fontWeight: 700,

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
      <SectionTitle>
        Check out some projects I&apos;ve done as a consultant or freelancer
      </SectionTitle>
      <Spacer size="large" />
      <section data-cy="projects">
        {data?.projects.items.map((project) => (
          <React.Fragment key={project.titleShort + project.client}>
            <Project project={project} onSelect={handleOnSelect} />
            <Spacer size="medium" />
          </React.Fragment>
        ))}
      </section>
    </>
  )
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
  color: '$color12',
  textAlign: 'right',

  '@bp1': {
    fontSize: '$fontSize6',
    lineHeight: '32px',
    textAlign: 'left',
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
    transform: 'scale(1.03)',
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

const Asset = styled(ContentfulImage, {
  filter: 'brightness(0.7)',
  transition: 'filter 200ms ease-in-out',

  [`${ProjectContainer}:hover &`]: {
    filter: 'brightness(1)',
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

interface ProjectProps {
  project: ProjectType
  onSelect: (project: ProjectType) => void
}

const Project: React.FC<ProjectProps> = ({ project, onSelect }) => {
  const { titleShort, client, role, asset, assetPlaceholder } = project
  const { observe, width, height } = useDimensions<HTMLDivElement | null>()
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const { isFocusVisible, focusProps } = useFocusRing({ within: true })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const handleOnClick = () => {
    onSelect(project)
  }

  const placeholderProps: any = assetPlaceholder
    ? { placeholder: 'blur', blurDataURL: assetPlaceholder }
    : {}

  return (
    <Focusable isFocusVisible={isFocusVisible} {...focusProps}>
      <Link href={`/projects/${project.sys.id}`} passHref>
        <AnchorWithinFocusable>
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
              <Border>
                <ParallaxEffect>
                  <Asset
                    src={asset.url}
                    {...placeholderProps}
                    alt={`Project image for ${role} at ${client}`}
                    layout="fixed"
                    width={`${Math.round(width)}px`}
                    height={`${Math.round(height)}px`}
                  />
                </ParallaxEffect>
              </Border>
            </AssetWrapper>
          </ProjectContainer>
        </AnchorWithinFocusable>
      </Link>
    </Focusable>
  )
}
