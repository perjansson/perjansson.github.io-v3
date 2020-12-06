import React, { memo, useEffect, useMemo, useState } from 'react'
import { TagCloud as ReactTagCloud } from 'react-tagcloud'
import { arrayOf, shape, string } from 'prop-types'

import { isMobile, projectTagsToTagCloudData } from '../utils'

export const TagCloud = memo(({ allTags }) => {
  const data = useMemo(() => projectTagsToTagCloudData(allTags), [allTags])

  const [minTagFontSize, setMinTagFontSize] = useState(undefined)
  useEffect(() => {
    setMinTagFontSize(isMobile() ? 12 : 18)
  }, [])

  return (
    <section className="tags" data-cy="tags">
      {minTagFontSize && (
        <ReactTagCloud
          minSize={minTagFontSize}
          maxSize={minTagFontSize * 3}
          tags={data}
          shuffle
          className="tag-cloud"
        />
      )}
      <style jsx>{`
        .tags {
          max-width: 1100px;
          margin-bottom: 250px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        /* Most of the Smartphones Mobiles (Portrait) */
        @media (min-width: 320px) and (max-width: 480px) {
          .tags {
            max-width: 1100px;
            margin-bottom: 150px;
          }
        }
      `}</style>
    </section>
  )
})

TagCloud.displayName = 'TagCloud'

TagCloud.propTypes = {
  allTags: arrayOf(shape({ tags: arrayOf(string) })),
}
