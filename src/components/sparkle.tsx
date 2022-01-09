import { useState } from 'react'
import { isMobile, isTablet } from 'react-device-detect'
import { useReducedMotion } from 'framer-motion'

import { keyframes, styled, theme } from '../../stitches.config'
import { useRandomInterval } from '../hooks/useRandomInterval'
import { random } from '../utils/random'

const SIZES = {
  min: 10,
  max: 20,
}

const generateSparkle = (color: string) => {
  const sparkle = {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(SIZES.min, SIZES.max) * (isMobile ? 1 : isTablet ? 1.5 : 2),
    style: {
      top: random(0, 100) + '%',
      left: random(0, 100) + '%',
    },
  }

  return sparkle
}

const SparklesContainer = styled('span', {
  display: 'inline-block',
  position: 'relative',
})

const ContentWrapper = styled('strong', {
  position: 'relative',
  zIndex: 1,
  fontWeight: 'bold',
})

interface SparklesProps {
  color?: string
}

export const Sparkles: React.FC<SparklesProps> = ({
  color = theme.colors.colorful6.value,
  children,
  ...rest
}) => {
  const [sparkles, setSparkles] = useState<
    Array<ReturnType<typeof generateSparkle>>
  >([])
  const shouldReduceMotion = useReducedMotion()

  useRandomInterval(
    () => {
      if (shouldReduceMotion) {
        return
      }

      const sparkle = generateSparkle(color)
      const now = Date.now()
      const nextSparkles = sparkles.filter((sp) => {
        const delta = now - sp.createdAt
        return delta < 750
      })
      nextSparkles.push(sparkle)
      setSparkles(nextSparkles)
    },
    50,
    450
  )

  return (
    <SparklesContainer {...rest}>
      {sparkles.map((sparkle) => (
        <Star
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <ContentWrapper>{children}</ContentWrapper>
    </SparklesContainer>
  )
}

const inOutAnimation = keyframes({
  '0%': {
    transform: 'scale(0)',
  },
  '50%': {
    transform: 'scale(1)',
  },
  '100%': {
    transform: 'scale(0)',
  },
})

const spinAnimation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(180deg)',
  },
})

const StarContainer = styled('span', {
  position: 'absolute',
  display: 'block',
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${inOutAnimation} 1000ms forwards`,
  },
})

const StarSvg = styled('svg', {
  display: 'block',
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${spinAnimation} 1500ms linear`,
  },
})

interface SparkleProps {
  size: number
  color: string
  style: object
}

const Star: React.FC<SparkleProps> = ({ size, color, style }) => {
  const path =
    'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z'
  return (
    <StarContainer style={style}>
      <StarSvg width={size} height={size} viewBox="0 0 68 68" fill="none">
        <path d={path} fill={color} />
      </StarSvg>
    </StarContainer>
  )
}
