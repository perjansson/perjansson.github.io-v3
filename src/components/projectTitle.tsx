import { useProjectPageData } from '../providers/ProjectPageDataProvider'
import { styled } from '../../stitches.config'
import { formatProjectDates } from '../utils/projectHelper'
import { Spacer } from './spacer'

const Container = styled('div', {
  gridArea: 'project-title',
  overflowY: 'hidden',
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
  marginLeft: '$space1',
  fontSize: '$fontSize2',
  color: '$color13',

  '@bp1': {
    fontSize: '$fontSize1',
  },
})

export const ProjectTitle: React.FC = () => {
  const { data } = useProjectPageData()
  const { title, client, role, city, startdate, enddate } = data?.project || {}

  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      <Spacer size="small" />
      <Info>
        <p>
          <strong>{role}</strong> at <strong>{client}</strong>{' '}
          {formatProjectDates(startdate, enddate)}
        </p>
        <p>
          <strong>{city}</strong>
        </p>
      </Info>
    </Container>
  )
}
