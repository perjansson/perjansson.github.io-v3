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
import { useDarkMode } from '../hooks/useDarkMode'

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

  const isDarkModeUsed = useDarkMode()

  return (
    <section className="tags" data-cy="tags">
      {minFontSize && (
        <>
          <article className="slider">
            <h2 className="text-4xl lg:text-4xl xl:text-6xl 2xl:text-8xl">
              Buzz word cloud
              <br />
              {formatProjectDates(selectedMinYear, maxYear)}
            </h2>
            <Slider
              min={minYear}
              max={maxYear}
              defaultValue={selectedMinYear}
              getAriaLabel={(value) => `Buzzword slider at value: ${value}`}
              step={1}
              onChange={handleSliderChange}
              className="my-4"
            />
            <div className="flex justify-between opacity-70">
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
                alpha: 1,
                luminosity: isDarkModeUsed ? 'light' : 'dark',
              }}
              shuffle
              className="mt-4"
            />
          </article>
        </>
      )}
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
