import { useData } from '../providers/DataContextProvider'
import RichText from '@madebyconnor/rich-text-to-jsx'

import { styled } from '../stitches.config'
import { Sparkles } from './sparkle'
import { SocialMediaLinks } from './socialMediaLinks'

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

const ProfileImage = styled('img', {
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
    maxWidth: '100%',
    height: '100%',
    maxHeight: '348px',
    justifySelf: 'end',
    objectFit: 'cover',
  },

  '@bp2': {
    width: '335px',
    height: '436px',
  },

  '@bp3': {
    width: '402px',
    height: '523px',
  },

  '@bp4': {
    width: '469px',
    height: '610px',
  },
})

export const Hero: React.FC = () => {
  const { data } = useData()

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
      <ProfileImage src="/images/profile-2x.png" />
    </Container>
  )
}
