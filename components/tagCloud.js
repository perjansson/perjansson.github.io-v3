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

const TAG_CLOUD_INITIAL_YEARS_OF_HISTORY = 5
const MIN_FONT_SIZE = {
  mobile: 12,
  nonMobile: 18,
}

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
    Math.max(minYear, lastProjectYear - TAG_CLOUD_INITIAL_YEARS_OF_HISTORY)
  )
  const [maxYear] = useState(lastProjectYear)

  const data = useMemo(
    () => projectTagsToTagCloudData(projects, selectedMinYear, maxYear),
    [projects, selectedMinYear, maxYear]
  )

  const [minFontSize, setMinFontSize] = useState(undefined)
  useEffect(() => {
    setMinFontSize(isMobile() ? MIN_FONT_SIZE.mobile : MIN_FONT_SIZE.nonMobile)
  }, [])

  const handleSliderChange = (newMinYear) => {
    if (newMinYear !== selectedMinYear) {
      setSelectedMinYear(newMinYear)
    }
  }

  return (
    <section className="tags" data-cy="tags">
      {minFontSize && (
        <>
          <article className="slider">
            <header>
              Buzz word cloud
              <br />
              {formatProjectDates(selectedMinYear, maxYear)}
            </header>
            <Slider
              min={minYear}
              max={maxYear}
              defaultValue={selectedMinYear}
              getAriaLabel={(value) => `Buzzword slider at value: ${value}`}
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
              minSize={minFontSize}
              maxSize={minFontSize * 3}
              tags={data}
              shuffle
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

      <style global jsx>{`
        [data-reach-slider-handle],
        [data-reach-slider-track] {
          background: var(--slider-active-color);
        }

        [data-reach-slider-handle] {
          border: 2px solid var(--slider-inactive-color);
          width: 24px;
          height: 24px;
          border-radius: 20px;
        }

        [data-reach-slider-range] {
          background: var(--slider-inactive-color);
        }
      `}</style>
    </section>
  )
})

TagCloud.displayName = 'TagCloud'

TagCloud.propTypes = {
  projects: ProjectsType,
}
