import React from 'react'
import RichText from '@madebyconnor/rich-text-to-jsx'

import { MeType } from '../types'

interface MeProps {
  me: MeType
}

export const Me: React.FC<MeProps> = ({ me }) => {
  return (
    <>
      <section
        className="container h-80v flex flex-col justify-center items-center animate-color-change"
        data-cy="me"
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-12xl 2xl:text-16xl font-extrabold whitespace-nowrap">
          {me.name.split('').map((char, i) => (
            <span
              key={i}
              className="table-cell animate-wave"
              style={{ animationDelay: `${i / 10}s` }}
            >
              {char}
            </span>
          ))}
        </h1>
        <div className="text-xl md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-8xl font-extrabold whitespace-nowrap">
          {me.title}
        </div>
      </section>
      <section>
        <h2 className="text-xl md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-8xl">
          About me
        </h2>
        <div className="leading-5 md:leading-6 lg:leading-9">
          <RichText richText={me.long.json} />
        </div>
      </section>
    </>
  )
}
