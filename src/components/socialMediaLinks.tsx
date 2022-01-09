import React, { useMemo } from 'react'

import { useIndexPageData } from '../providers/IndexPageDataProvider'
import { VisuallyHidden } from './visuallyHidden'
import { styled, theme } from '../../stitches.config'
import { ContactType } from '../../types'
import { event } from '../utils/gtag'

import FacebookLogo from '../assets/social-media/facebook.svg'
import GithubLogo from '../assets/social-media/github.svg'
import InstagramLogo from '../assets/social-media/instagram.svg'
import LinkedinLogo from '../assets/social-media/linkedin.svg'
import MediumLogo from '../assets/social-media/medium.svg'
import StackOverflowLogo from '../assets/social-media/stackoverflow.svg'
import TwitterLogo from '../assets/social-media/twitter.svg'

const logos: { [name: string]: any } = {
  facebook: FacebookLogo,
  github: GithubLogo,
  instagram: InstagramLogo,
  linkedin: LinkedinLogo,
  medium: MediumLogo,
  'stack overflow': StackOverflowLogo,
  twitter: TwitterLogo,
}

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
  const { data } = useIndexPageData()
  const socialMediaLinks = useMemo(
    () =>
      data?.me.contacts.items.filter((contact) => contact.medium !== 'Email'),
    [data?.me.contacts.items]
  )

  const handleOnContactClick = (medium: string) => {
    event({
      category: 'user_interaction',
      action: 'contact_click',
      label: medium,
      value: 1,
    })
  }

  return (
    <Container data-cy="social-media">
      {socialMediaLinks?.map((contact, i) => (
        <React.Fragment key={i}>
          <SocialMediaLink
            contact={contact}
            onClick={() => handleOnContactClick(contact.medium)}
          />
        </React.Fragment>
      ))}
    </Container>
  )
}

interface SocialMediaLinkProps {
  contact: ContactType
  onClick: () => void
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  contact,
  onClick,
}) => {
  const Logo = logos[contact.medium.toLowerCase()]

  return (
    <div onClick={onClick}>
      <a
        href={contact.url}
        target="_blank"
        rel="noreferrer noopener"
        onClick={onClick}
      >
        <Logo style={{ fill: '#fff' }} />
        <VisuallyHidden>{contact.medium}</VisuallyHidden>
      </a>
    </div>
  )
}
