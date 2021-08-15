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
    <header className="header" data-cy="header">
      {contacts.map(({ url, medium }) => (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          key={medium}
          onClick={() => handleOnContactClick(medium)}
        >
          {medium}
        </a>
      ))}

      <style jsx>{`
        .header {
          height: 80px;
          width: 90%;
          margin: auto;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          flex-wrap: wrap;
          font-size: 0.9em;
        }

        .header a::after {
          margin: 0 10px;
          content: '|';
        }

        .header a:last-child:after {
          content: '';
        }

        /* Most of the Smartphones Mobiles (Portrait) */
        @media (min-width: 320px) and (max-width: 480px) {
          .header {
            height: 60px;
            justify-content: center;
          }
        }

        @media (min-width: 481px) and (max-width: 767px) {
          .header {
            height: 60px;
            justify-content: flex-end;
          }
        }

        /* Tablets, Ipads (portrait) */
        @media (min-width: 768px) and (max-width: 1024px) {
          .header {
            height: 60px;
            justify-content: flex-end;
          }
        }

        /* Tablets, Ipads (landscape) */
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
          .header {
            height: 60px;
            justify-content: flex-end;
          }
        }

        /* Laptops, Desktops */
        @media (min-width: 1025px) and (max-width: 1280px) {
          .header {
            height: 60px;
            justify-content: flex-end;
          }
        }

        /* Desktops */
        @media (min-width: 1281px) {
          .header {
            height: 60px;
            justify-content: flex-end;
          }
        }
      `}</style>
    </header>
  )
}
