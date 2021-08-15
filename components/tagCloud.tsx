import React, { memo, useEffect, useMemo, useState } from 'react'
import { TagCloud as ReactTagCloud } from 'react-tagcloud'
import Slider from '@reach/slider'
import '@reach/slider/styles.css'

import {
  formatProjectDates,
  projectTagsToTagCloudData,
  sortProjectsOnStartDate,
  yearFromIsoDate,
} from '../utils/projectHelper'
import isMobile from '../utils/isMobile'
import { ProjectsType } from '../types'
import { event } from '../utils/gtag'

const TAG_CLOUD_INITIAL_YEARS_OF_HISTORY = 5
const MIN_FONT_SIZE = {
  mobile: 12,
  nonMobile: 18,
}

interface TagCloudProps {
  projects: ProjectsType
}

export const TagCloud: React.FC<TagCloudProps> = memo(({ projects }) => {
  const [firstProjectStartYear, lastProjectStartYear] = useMemo<
    [number | undefined, number | undefined]
  >(() => {
    const [firstProject, ...restOfProjects] = sortProjectsOnStartDate(projects)
    return [
      yearFromIsoDate(firstProject.startdate),
      yearFromIsoDate(restOfProjects[restOfProjects.length - 1].startdate),
    ]
  }, [projects])

  const tagCloudLastYear = lastProjectStartYear || new Date().getFullYear()

  const [minYear] = useState(firstProjectStartYear)
  const [selectedMinYear, setSelectedMinYear] = useState(
    Math.max(
      minYear || 0,
      tagCloudLastYear - TAG_CLOUD_INITIAL_YEARS_OF_HISTORY
    )
  )
  const [maxYear] = useState(tagCloudLastYear)

  const data = useMemo(
    () => projectTagsToTagCloudData(projects, selectedMinYear, maxYear),
    [projects, selectedMinYear, maxYear]
  )

  const [minFontSize, setMinFontSize] = useState<number>(MIN_FONT_SIZE.mobile)
  useEffect(() => {
    setMinFontSize(isMobile() ? MIN_FONT_SIZE.mobile : MIN_FONT_SIZE.nonMobile)
  }, [])

  const handleSliderChange = (newMinYear: number) => {
    if (newMinYear !== selectedMinYear) {
      setSelectedMinYear(newMinYear)

      event({
        category: 'user_interaction',
        action: 'tag_cloud_min_date_change',
        label: newMinYear + '',
        value: 1,
      })
    }
  }

  return (
    <section className="tags" data-cy="tags">
      {minFontSize && (
        <>
          <article className="slider">
            <header className="text-2xl mb-4 text-center">
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
              colorOptions={{
                count: 1,
                hue: 'green',
                luminosity: 'light',
                alpha: 1,
              }}
              shuffle
            />
          </article>
        </>
      )}
      <style jsx>{`
        .tags {
          max-width: 1100px;
          margin-bottom: 250px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: var(--primary-text-color);
          font-size: 1.8em;
        }

        header {
          color: var(--primary-text-color);
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
