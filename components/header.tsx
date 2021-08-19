import React from 'react'
import { ContactsType } from '../types'
import { event } from '../utils/gtag'

interface HeaderProps {
  contacts: ContactsType
}

export const Header: React.FC<HeaderProps> = ({ contacts }) => {
  const handleOnContactClick = (medium: string) =>
    event({
      category: 'user_interaction',
      action: 'contact_click',
      label: medium,
      value: 1,
    })

  return (
    <header
      className="header h-40 md:h-20 w-4/5 m-auto flex justify-center xl:justify-end items-end md:items-center flex-wrap text-sm lg:text-lg xl:text-xl"
      data-cy="header"
    >
      {contacts.map(({ url, medium }) => (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          key={medium}
          onClick={() => handleOnContactClick(medium)}
          className="px-6 md:border-r-2 last:border-r-0"
        >
          {medium}
        </a>
      ))}
    </header>
  )
}
