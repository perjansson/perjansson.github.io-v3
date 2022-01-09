import React, { useEffect } from 'react'
import {
  motion,
  useAnimation,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion'

import { styled } from '../../stitches.config'

const Container = styled(motion.header, {
  position: 'fixed',
  top: 0,
  height: '100px',
  width: '100%',
  background:
    'linear-gradient(45deg, $colorful3, $colorful4) border-box !important',
  zIndex: '9999',
  transform: 'translateY(-100vh)',
  transition: 'transform 200ms ease-out',
})

const variants = {
  hidden: {
    y: '-100%',
  },
  visible: {
    y: 0,
  },
}

export const Header: React.FC = () => {
  const controls = useAnimation()
  const { scrollY } = useViewportScroll()

  useEffect(
    () =>
      scrollY.onChange((y) => {
        if (y > 1000) {
          controls.start('visible')
        } else {
          controls.start('hidden')
        }
      }),
    [controls, scrollY]
  )

  return <Container animate={controls} variants={variants}></Container>
}
