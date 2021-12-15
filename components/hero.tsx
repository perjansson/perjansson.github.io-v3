import { useData } from '../providers/DataContextProvider'
import RichText from '@madebyconnor/rich-text-to-jsx'
import { styled } from '../stitches.config'

const Container = styled('div', {
  height: '75vh',
  width: '100%',
  display: 'grid',
  gridTemplateRows: '1.4fr 1fr',
  gridTemplateColumns: 'auto',
  gridTemplateAreas: `
    'title'
    'profile-image'
  `,
  gap: '$space8',
  padding: '$space5',

  '@bp1': {
    marginTop: '$space20',
    fontSize: '$fontSize9',
    gridTemplateRows: 'auto',
    gridTemplateColumns: '1.5fr 1fr',
    gridTemplateAreas: "'title profile-image'",
    gap: '$space16',
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
  fontSize: '$fontSize8',
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
})

const Subtitle = styled('div', {
  color: '$cultured',
  fontSize: '$fontSize2',
  lineHeight: '1.4',
  transition: 'font-size 0.8s ease-in-out',
  fontFamily: 'Nunito, sans-serif',

  '@bp1': {
    fontSize: '$fontSize2',
  },

  '@bp2': {
    fontSize: '$fontSize3',
  },

  '@bp3': {
    fontSize: '$fontSize4',
  },

  '@bp4': {
    fontSize: '$fontSize5',
  },
})

const Spacer = styled('div', {
  height: '$space$space8',
})

const ProfileImage = styled('img', {
  gridArea: 'profile-image',
  width: 'calc(100vw - ($space$space5 * 3))',
  height: '100%',
  maxHeight: '350px',
  transition: 'all 0.8s ease-in-out',
  justifySelf: 'center',
  objectFit: 'cover',
  boxSizing: 'content-box',
  borderRadius: '50px',
  border: '10px solid transparent',
  background: 'linear-gradient(45deg, $colorful3, $colorful4) border-box',

  '@bp1': {
    maxHeight: '100%',
    maxWidth: '100%',
    width: '268px',
    height: '349px',
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
        <Title>
          Hi. I'm {data?.me.firstName}.
          <br />A Fullstack Web Developer.
        </Title>
        <Spacer />
        <Subtitle>
          <RichText richText={data?.me.short.json} />
        </Subtitle>
      </TitleContainer>
      <ProfileImage src="/images/profile-2x.png" />
    </Container>
  )
}
