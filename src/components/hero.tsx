import { useCallback, useEffect, useState } from 'react'
import RichText from '@madebyconnor/rich-text-to-jsx'
import { motion, useMotionValue, useTransform } from 'framer-motion'

import { styled } from '../../stitches.config'
import { useIndexPageData } from '../providers/IndexPageDataProvider'
import { Sparkles } from './sparkle'
import { SocialMediaLinks } from './socialMediaLinks'
import { ContentfulImage } from './contentfulImage'

const Container = styled(motion.div, {
  width: '100%',
  display: 'grid',
  fontSize: '$fontSize9',

  '@bp1': {
    gridTemplateRows: 'auto',
    gridTemplateColumns: '1fr',
    gridTemplateAreas: `
      'title'
      'profile-image'
      'social-media-links'
    `,
    gap: '$space8',
  },

  '@bp2': {
    gridTemplateRows: 'auto',
    gridTemplateColumns: '1.5fr 1fr',
    gridTemplateAreas: `
    'title profile-image'
    'social-media-links social-media-links'
    `,
    columnGap: '$space16',
  },

  '@bp3': {
    gridTemplateAreas: `
      'title profile-image'
      'social-media-links profile-image'
    `,
  },
})

const TitleContainer = styled('div', {
  gridArea: 'title',
})

const Title = styled('h1', {
  background:
    'linear-gradient(271deg, $colorful3 30%, $colorful4 50%, $colorful1 70%, $colorful3 94%)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  color: '$colorful3',
  transition: 'font-size 0.8s ease-in-out',

  '@bp1': {
    minHeight: '200px',
    fontSize: '$fontSize9',
  },

  '@bp2': {
    height: '210px',
    fontSize: '$fontSize10',
  },

  '@bp3': {
    height: '250px',
    fontSize: '$fontSize11',
  },

  '@bp4': {
    height: '310px',
    fontSize: '$fontSize12',
  },

  '@bp5': {
    height: '360px',
    fontSize: '$fontSize13',
  },
})

const Intro = styled('div', {
  color: '$cultured',
  transition: 'font-size 0.8s ease-in-out',

  '@bp1': {
    fontSize: '$fontSize4',
  },

  '@bp2': {
    fontSize: '$fontSize4',
  },

  '@bp3': {
    fontSize: '$fontSize4',
  },

  '@bp4': {
    fontSize: '$fontSize5',
  },

  '@bp5': {
    fontSize: '$fontSize6',
  },
})

const SocialMediaContainer = styled('div', {
  gridArea: 'social-media-links',
})

const Spacer = styled('div', {
  height: '$space$space8',

  '@bp1': {
    height: '$space$space4',
  },
})

const ProfileImage = styled(ContentfulImage, {
  gridArea: 'profile-image',
  width: 'calc(100vw - ($space$space5 * 3))',
  height: '100%',
  maxWidth: 'min(469px, 100%)',
  maxHeight: '610px',
  transition: 'all 0.8s ease-in-out',
  justifySelf: 'center',
  objectFit: 'cover',
  borderRadius: '$radii5',
  border: '10px solid transparent !important',
  background:
    'linear-gradient(45deg, $colorful3, $colorful4) border-box !important',

  '@bp1': {
    width: '100%',
    maxWidth: '100vw',
    height: '100%',
    maxHeight: '100vw',
    aspectRatio: 1,
    justifySelf: 'end',
    objectFit: 'cover',
  },

  '@bp2': {
    width: '335px',
    height: '440px',
  },

  '@bp3': {
    width: '402px',
    height: '443px',
  },

  '@bp4': {
    width: '469px',
    height: '520px',
  },

  '@bp5': {
    width: '469px',
    height: '520px',
  },
})

const PerspectiveWrapper = styled('div', {
  perspective: 500,
})

export const Hero: React.FC = () => {
  const { data } = useIndexPageData()

  const [angle] = useState(10)
  const y = useMotionValue(0.5)
  const x = useMotionValue(0.5)
  const rotateY = useTransform(x, [0, 1], [-angle, angle], { clamp: true })
  const rotateX = useTransform(y, [0, 1], [angle, -angle], { clamp: true })

  const handleOnPointerMove = useCallback(
    (e: any) => {
      const bounds = e.currentTarget.getBoundingClientRect()
      const xValue = (e.clientX - bounds.x) / e.currentTarget.clientWidth
      const yValue =
        (e.clientY - bounds.y) /
        Math.min(e.currentTarget.clientHeight, window.innerHeight)
      x.set(xValue, true)
      y.set(yValue, true)
    },
    [x, y]
  )

  useEffect(() => {
    document.body.addEventListener('pointermove', handleOnPointerMove)
    return () => window.removeEventListener('pointermove', handleOnPointerMove)
  }, [handleOnPointerMove])

  return (
    <Container>
      <TitleContainer>
        <Sparkles>
          <Title>
            Hi. I&apos;m {data?.me.firstName}.
            <br />A Fullstack Web Developer.
          </Title>
        </Sparkles>
        <Spacer />
        <Intro>
          <RichText richText={data?.me.short.json} />
        </Intro>
        <Spacer />
      </TitleContainer>
      <SocialMediaContainer>
        <SocialMediaLinks />
      </SocialMediaContainer>
      <PerspectiveWrapper>
        <motion.div style={{ rotateY, rotateX }}>
          <ProfileImage
            src={data!.me.profileImage.url}
            layout="intrinsic"
            loading="eager"
            priority
            width={469}
            height={520}
            alt=""
          />
        </motion.div>
      </PerspectiveWrapper>
    </Container>
  )
}
