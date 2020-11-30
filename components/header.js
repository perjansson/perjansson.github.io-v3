import React from 'react'
import { arrayOf } from 'prop-types'

import { ContactType } from '../types'

export function Header({ contacts }) {
  return (
    <header className="header" data-cy="header">
      {contacts.map(({ url, medium }) => (
        <a href={url} target="_blank" rel="noopener noreferrer" key={medium}>
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
          color: rgba(255, 255, 255, 0.8);
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
Header.propTypes = {
  contacts: arrayOf(ContactType),
}
