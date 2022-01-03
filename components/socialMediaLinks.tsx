import { useMemo } from 'react'
import { SocialMediaIconsReact } from 'social-media-icons-react'

import { useData } from '../providers/DataContextProvider'
import { styled, theme } from '../stitches.config'
import { ContactType } from '../types'
import { event } from '../utils/gtag'

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

    '@bp1': {
      width: 28,
      height: 28,
    },

    '@bp2': {
      width: 48,
      height: 48,
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

  const handleOnContactClick = (medium: string) => {
    console.log('### onclick', medium)
    event({
      category: 'user_interaction',
      action: 'contact_click',
      label: medium,
      value: 1,
    })
  }

  return (
    <Container>
      {socialMediaLinks?.map((contact, i) => (
        <SocialMediaLink
          contact={contact}
          key={i}
          onClick={() => handleOnContactClick(contact.medium)}
        />
      ))}
    </Container>
  )
}

const SocialMediaLink = ({
  contact,
  onClick,
}: {
  contact: ContactType
  onClick: () => void
}) => (
  <div onClick={onClick}>
    <SocialMediaIconsReact
      icon={contact.medium.replace(' ', '').toLocaleLowerCase()}
      iconColor={theme.colors.color7.value}
      backgroundColor="transparent"
      borderWidth="0"
      url={contact.url}
    />
  </div>
)
