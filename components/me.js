import React from 'react'

import { MeType } from '../types'

export function Me({ me }) {
  return (
    <section className="me" data-cy="me">
      <div className="meName">
        {me.name.split('').map((char, i) => (
          <span key={i} style={{ animationDelay: `${i / 10}s` }}>
            {char}
          </span>
        ))}
      </div>
      <div>{me.title}</div>

      <style jsx>{`
        @keyframes colorChange {
          0% {
            color: var(--primary-text-color);
          }
          50% {
            color: var(--secondary-text-color);
          }
          100% {
            color: var(--primary-text-color);
          }
        }

        @keyframes wave {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .me {
          height: 90vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          animation: colorChange 4s ease-in 3s infinite;
          font-size: 1.8em;
          color: var(--primary-text-color);
        }

        .meName {
          font-size: 5em;
        }

        .meName span {
          display: table-cell;
          animation: wave 2s infinite;
        }

        /* Most of the Smartphones Mobiles (Portrait) */
        @media (min-width: 320px) and (max-width: 480px) {
          .meName {
            font-size: 3em;
          }
        }
      `}</style>
    </section>
  )
}
Me.propTypes = {
  me: MeType,
}
