import React from 'react'
import RichText from '@madebyconnor/rich-text-to-jsx'

import { MeType } from '../types'

export function Me({ me }) {
  return (
    <>
      <section className="me" data-cy="me">
        <div className="meName">
          {me.name.split('').map((char, i) => (
            <span key={i} style={{ animationDelay: `${i / 10}s` }}>
              {char}
            </span>
          ))}
        </div>
        <div>{me.title}</div>
      </section>
      <section className="description">
        <header>About me</header>
        <div className="content">
          <RichText richText={me.long.json} />
        </div>
      </section>

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
          height: 85vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          animation: colorChange 4s ease-in 5s infinite;
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

        .description {
          max-width: 1100px;
          margin-bottom: 250px;
          color: var(--primary-text-color);
          font-size: 1.8em;
        }

        .description header {
          font-size: 1.8em;
          opacity: 0.85;
          text-align: center;
          margin-bottom: 20px;
        }

        .description .content {
          opacity: 0.7;
          line-height: 1.05;
        }

        /* Most of the Smartphones Mobiles (Portrait) */
        @media (min-width: 320px) and (max-width: 480px) {
          .meName {
            font-size: 3em;
          }

          .description {
            font-size: 1.4em;
            text-align: justify;
            margin-bottom: 25px;
          }
          .description .content {
            line-height: 1.4;
          }
        }
      `}</style>
    </>
  )
}
Me.propTypes = {
  me: MeType,
}
