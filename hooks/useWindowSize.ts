import { useState, useEffect } from 'react'
import { debounce } from 'lodash'

export type ScreenType = 'mobile' | 'tablet' | 'laptop' | 'desktop'

interface WindowSize {
  width: number
  height: number
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>()

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    handleResize()

    const debouncedHandleResize = debounce(handleResize, 250)

    window.addEventListener('resize', debouncedHandleResize)
    if (window.screen?.orientation) {
      window.screen.orientation.addEventListener(
        'change',
        debouncedHandleResize
      )
    } else {
      window.addEventListener('orientationchange', debouncedHandleResize)
    }

    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
      if (window.screen?.orientation) {
        window.screen.orientation.removeEventListener(
          'change',
          debouncedHandleResize
        )
      } else {
        window.removeEventListener('orientationchange', debouncedHandleResize)
      }
    }
  }, [])

  return windowSize
}

export default useWindowSize
