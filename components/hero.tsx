import { useCallback, useEffect, useState } from 'react'
import RichText from '@madebyconnor/rich-text-to-jsx'
import { motion, useMotionValue, useTransform } from 'framer-motion'

import { styled } from '../stitches.config'
import { useData } from '../providers/DataContextProvider'
import { Sparkles } from './sparkle'
import { SocialMediaLinks } from './socialMediaLinks'
import { ContentfulImage } from './contentfulImage'

const Container = styled(motion.div, {
  width: '100%',
  display: 'grid',
  fontSize: '$fontSize9',
  gridTemplateRows: 'auto',
  gridTemplateColumns: '1.5fr 1fr',
  gridTemplateAreas: `
    'title profile-image'
    'social-media-links profile-image'
  `,
  columnGap: '$space16',

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
})

const TitleContainer = styled('div', {
  gridArea: 'title',
})

const Title = styled('h1', {
  background:
    'linear-gradient(271deg, $colorful3 30%, $colorful4 50%, $colorful1 70%, $colorful3 94%)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  color: '$cultured',
  fontSize: '$fontSize9',
  letterSpacing: '-1.5px',
  lineHeight: '110%',
  transition: 'font-size 0.8s ease-in-out',
  fontFamily: 'Playfair Display, Helvetica Neue, Helvetica, Arial, sans-serif;',
  fontWeight: 700,

  '@bp1': {
    fontSize: '$fontSize9',
  },

  '@bp2': {
    fontSize: '$fontSize10',
  },

  '@bp3': {
    fontSize: '$fontSize11',
  },

  '@bp4': {
    fontSize: '$fontSize12',
  },

  '@bp5': {
    fontSize: '$fontSize13',
  },
})

const Subtitle = styled('div', {
  color: '$cultured',
  lineHeight: '1.4',
  transition: 'font-size 0.8s ease-in-out',
  fontFamily: 'Nunito, sans-serif',

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
  background: 'linear-gradient(45deg, $colorful3, $colorful4) border-box',

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

const PerspectiveContent = styled(motion.div)

export const Hero: React.FC = () => {
  const { data } = useData()

  const [angle] = useState(10)
  const y = useMotionValue(0.5)
  const x = useMotionValue(0.5)
  const rotateY = useTransform(x, [0, 1], [-angle, angle], { clamp: true })
  const rotateX = useTransform(y, [0, 1], [angle, -angle], { clamp: true })

  const handleOnPointerMove = useCallback(
    (e: any) => {
      const bounds = e.currentTarget.getBoundingClientRect()
      const xValue = (e.clientX - bounds.x) / e.currentTarget.clientWidth
      const yValue = (e.clientY - bounds.y) / e.currentTarget.clientHeight
      x.set(xValue, true)
      y.set(yValue, true)
    },
    [x, y]
  )

  useEffect(() => {
    document.body.addEventListener('pointermove', handleOnPointerMove)
    return () => window.removeEventListener('pointermove', handleOnPointerMove)
  }, [handleOnPointerMove])

  const profileImageUrl = `${data!.me.profileImage.url}`

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
        <Subtitle>
          <RichText richText={data?.me.short.json} />
        </Subtitle>
        <Spacer />
      </TitleContainer>
      <SocialMediaContainer>
        <SocialMediaLinks />
      </SocialMediaContainer>
      <PerspectiveWrapper>
        <PerspectiveContent style={{ rotateY, rotateX }}>
          <ProfileImage
            src={profileImageUrl}
            placeholder="blur"
            blurDataURL="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"
            layout="intrinsic"
            loading="eager"
            priority
            width={469}
            height={520}
            alt="Profile image"
          />
        </PerspectiveContent>
      </PerspectiveWrapper>
    </Container>
  )
}
