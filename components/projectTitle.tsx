import { useProjectPageData } from '../providers/ProjectPageDataProvider'
import { styled } from '../stitches.config'
import { formatProjectDates } from '../utils/projectHelper'
import { Spacer } from './spacer'

const TitleWrapper = styled('div', {
  overflowY: 'hidden',

  '@bp1': {
    maxWidth: '100%',
    minHeight: '120px',
  },

  '@bp2': {
    maxWidth: '70%',
    height: '400px',
  },

  '@bp3': {
    maxWidth: '60%',
    height: '440px',
  },

  '@bp4': {
    maxWidth: '60%',
    height: '480px',
  },

  '@bp5': {
    maxWidth: '50%',
    height: '480px',
  },
})

const SectionTitle = styled('h1', {
  color: '$color10',
  textShadow:
    '1px 1px 10px rgba(17, 17, 17, 0.2), 1px 1px 10px rgba(17, 17, 17, 0.2)',
  letterSpacing: '-1.5px',
  lineHeight: '120%',
  transition: 'font-size 0.8s ease-in-out',
  fontFamily: 'Playfair Display, Helvetica Neue, Helvetica, Arial, sans-serif;',
  fontWeight: 700,

  '@bp1': {
    fontSize: '$fontSize8',
  },

  '@bp2': {
    fontSize: '$fontSize9',
  },

  '@bp3': {
    fontSize: '$fontSize10',
  },

  '@bp4': {
    fontSize: '$fontSize11',
  },

  '@bp5': {
    fontSize: '$fontSize11',
  },
})

const Info = styled('div', {
  fontSize: '$fontSize2',

  strong: {
    color: '$colorful4',
  },

  '@bp1': {
    fontSize: '$fontSize1',
  },
})

export const ProjectTitle: React.FC = () => {
  const { data } = useProjectPageData()
  const { title, role, city, startdate, enddate } = data?.project || {}

  return (
    <TitleWrapper>
      <SectionTitle>{title}</SectionTitle>
      <Spacer size="small" />
      <Info>
        <strong>{role}</strong> {formatProjectDates(startdate, enddate)} in{' '}
        <strong>{city}</strong>
      </Info>
    </TitleWrapper>
  )
}
