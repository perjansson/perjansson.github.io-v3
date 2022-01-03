import React, { useEffect, useRef, useState } from 'react'
import {
  useViewportScroll,
  useTransform,
  useReducedMotion,
  motion,
} from 'framer-motion'

import useWindowSize from '../hooks/useWindowSize'
import { styled } from '../stitches.config'

const Container = styled('div', {
  height: '100%',
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
})

const ParallaxContent = styled(motion.div, {
  height: 'auto',
  width: '100%',
})

export const ParallaxEffect: React.FC = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)

  const [inputStart, setInputStart] = useState(0)
  const [inputEnd, setInputEnd] = useState(0)

  const { width, height } = useWindowSize() || {}
  const isLandscape = width && height ? width >= height : true
  const shouldReduceMotion = useReducedMotion()

  const { scrollY } = useViewportScroll()
  const { yOutput, scaleOutput } = isLandscape
    ? { yOutput: 100, scaleOutput: 1.1 }
    : { yOutput: 35, scaleOutput: 1.0 }
  const y = useTransform(scrollY, [inputStart, inputEnd], [-yOutput, yOutput])
  const scale = useTransform(
    scrollY,
    [inputStart, inputEnd],
    [scaleOutput, scaleOutput + 0.2]
  )

  useEffect(() => {
    if (!width || !parallaxRef.current || !containerRef.current) {
      return
    }

    const parallaxElement = parallaxRef.current
    const elementTop =
      parallaxElement.getBoundingClientRect().top + window.scrollY ||
      window.pageYOffset
    const elementBottom =
      parallaxElement.getBoundingClientRect().bottom + window.scrollY ||
      window.pageYOffset
    const clientHeight = window.innerHeight

    const newInputStart = Math.max(elementTop - clientHeight, 0)
    const newInputEnd = elementBottom

    setInputStart(newInputStart)
    setInputEnd(newInputEnd)
  }, [width])

  if (shouldReduceMotion) {
    return <>{children}</>
  }

  return (
    <Container ref={containerRef}>
      <ParallaxContent
        ref={parallaxRef}
        style={{
          y,
          scale,
        }}
      >
        {children}
      </ParallaxContent>
    </Container>
  )
}
