import React, { memo, useEffect, useMemo, useState } from 'react'
import { TagCloud as ReactTagCloud } from 'react-tagcloud'
import Slider from '@reach/slider'
import '@reach/slider/styles.css'

import {
  formatProjectDates,
  isMobile,
  projectTagsToTagCloudData,
  sortProjectsOnStartDate,
  yearFromIsoDate,
} from '../utils'
import { ProjectsType } from '../types'

export const TagCloud = memo(({ projects }) => {
  const [firstProjectYear, lastProjectYear] = useMemo(() => {
    const [firstProject, ...restOfProjects] = sortProjectsOnStartDate(projects)
    return [
      yearFromIsoDate(firstProject.startdate),
      yearFromIsoDate(restOfProjects[restOfProjects.length - 1].startdate),
    ]
  }, [projects])

  const [minYear] = useState(firstProjectYear)
  const [selectedMinYear, setSelectedMinYear] = useState(
    Math.max(minYear, lastProjectYear - 5)
  )
  const [maxYear] = useState(lastProjectYear)

  const data = useMemo(
    () => projectTagsToTagCloudData(projects, selectedMinYear, maxYear),
    [projects, selectedMinYear, maxYear]
  )

  const [minTagFontSize, setMinTagFontSize] = useState(undefined)
  useEffect(() => {
    setMinTagFontSize(isMobile() ? 12 : 18)
  }, [])

  const handleSliderChange = (newMinYear) => {
    if (newMinYear !== selectedMinYear) {
      setSelectedMinYear(newMinYear)
    }
  }

  return (
    <section className="tags" data-cy="tags">
      {minTagFontSize && (
        <>
          <article className="slider">
            <header>
              Buzz word cloud {formatProjectDates(selectedMinYear, maxYear)}
            </header>
            <Slider
              min={minYear}
              max={maxYear}
              defaultValue={selectedMinYear}
              step={1}
              onChange={handleSliderChange}
            />
            <div className="slider-controls">
              <div>{minYear}</div>
              <div>{maxYear}</div>
            </div>
          </article>
          <article>
            <ReactTagCloud
              minSize={minTagFontSize}
              maxSize={minTagFontSize * 3}
              tags={data}
              shuffle
              className="tag-cloud"
            />
          </article>
        </>
      )}
      <style jsx>{`
        header {
          opacity: 0.7;
          font-size: 1.8em;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--primary-text-color);
          text-align: center;
          margin-bottom: 20px;
        }

        .tags {
          max-width: 1100px;
          margin-bottom: 250px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .slider {
          margin-top: 50px;
          width: 100%;
        }

        .slider-controls {
          margin-top: 20px;
          height: 50px;
          display: flex;
          justify-content: space-between;
          color: var(--primary-text-color);
          font-size: 0.9em;
          opacity: 0.7;
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
  projects: ProjectsType,
}
