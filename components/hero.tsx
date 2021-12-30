import { useMemo } from 'react'
import { useData } from '../providers/DataContextProvider'
import RichText from '@madebyconnor/rich-text-to-jsx'

import { styled } from '../stitches.config'
import { Sparkles } from './sparkle'
import { SocialMediaLinks } from './socialMediaLinks'
import { ResponsiveImage, ResponsiveImageSrcSet } from './responsiveImage'

const Container = styled('div', {
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

const ProfileImage = styled(ResponsiveImage, {
  gridArea: 'profile-image',
  width: 'calc(100vw - ($space$space5 * 3))',
  height: '100%',
  maxWidth: 'min(469px, 100%)',
  maxHeight: '610px',
  transition: 'all 0.8s ease-in-out',
  justifySelf: 'center',
  objectFit: 'cover',
  borderRadius: '$radii5',
  border: '10px solid transparent',
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

export const Hero: React.FC = () => {
  const { data } = useData()
  const profileImageUrl = `${data!.me.profileImage.url}`
  const profileImageSrcSet = useMemo(
    () => [
      [
        `${profileImageUrl}?w=375&h=375`,
        `${profileImageUrl}?w=750&h=750`,
        `${profileImageUrl}?w=1125&h=1125`,
      ],
      [
        `${profileImageUrl}?w=335&h=440`,
        `${profileImageUrl}?w=670&h=880`,
        `${profileImageUrl}?w=1005&h=1320`,
      ],
      [
        `${profileImageUrl}?w=402&h=469`,
        `${profileImageUrl}?w=804&h=938`,
        `${profileImageUrl}?w=1260&h=1407`,
      ],
      [
        `${profileImageUrl}?w=469&h=520`,
        `${profileImageUrl}?w=938&h=1040`,
        `${profileImageUrl}?w=1407&h=1560`,
      ],
      [
        `${profileImageUrl}?w=469&h=520`,
        `${profileImageUrl}?w=938&h=1040`,
        `${profileImageUrl}?w=1407&h=1560`,
      ],
    ],
    [profileImageUrl]
  ) as ResponsiveImageSrcSet

  return (
    <Container>
      <TitleContainer>
        <Sparkles>
          <Title>
            Hi. I'm {data?.me.firstName}.
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
      <ProfileImage srcSet={profileImageSrcSet} alt="Profile image" />
    </Container>
  )
}
