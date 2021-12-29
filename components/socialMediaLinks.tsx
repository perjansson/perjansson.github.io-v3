import { useMemo } from 'react'
import { SocialMediaIconsReact } from 'social-media-icons-react'
import { isMobile } from 'react-device-detect'

import { useData } from '../providers/DataContextProvider'
import { styled, theme } from '../stitches.config'
import { ContactType } from '../types'

const Container = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',

  '@bp1': {
    justifyContent: 'center',
  },

  '*:not(:first-child)': {
    marginLeft: '$space4',

    '@bp1': {
      marginLeft: '$space2',
    },
  },

  svg: {
    transition: 'all 150ms ease-out',

    '&:hover': {
      transform: 'scale(1.2)',
      transformOrigin: 'bottom',
      path: {
        fill: theme.colors.colorful3.value,
      },
    },
  },
})

export const SocialMediaLinks: React.FC = () => {
  const { data } = useData()
  const socialMediaLinks = useMemo(
    () =>
      data?.me.contacts.items.filter((contact) => contact.medium !== 'Email'),
    [data?.me.contacts.items]
  )

  return (
    <Container>
      {socialMediaLinks?.map((contact, i) => (
        <SocialMediaLink contact={contact} key={i} />
      ))}
    </Container>
  )
}

const SocialMediaLink = ({ contact }: { contact: ContactType }) => (
  <SocialMediaIconsReact
    icon={contact.medium.replace(' ', '').toLocaleLowerCase()}
    iconColor={theme.colors.color7.value}
    backgroundColor="transparent"
    borderWidth="0"
    url={contact.url}
    size={isMobile ? '28' : '48'}
  />
)
