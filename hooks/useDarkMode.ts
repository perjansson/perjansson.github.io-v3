import { useEffect, useState } from 'react'

export const useDarkMode = () => {
  const supportMatchMedia =
    typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined'

  const [media, setMedia] = useState(false)

  useEffect(() => {
    if (!supportMatchMedia) return

    const queryList = window.matchMedia('(prefers-color-scheme: dark)')
    const updateMatch = () => {
      setMedia(queryList.matches)
    }

    updateMatch()

    if (queryList.addEventListener) {
      queryList.addEventListener('change', updateMatch)
      return () => {
        queryList.removeEventListener('change', updateMatch)
      }
    }
  }, [supportMatchMedia])

  return media
}
