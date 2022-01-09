import { useCallback, useEffect, useRef } from 'react'

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min

export const useRandomInterval = (
  callback: () => void,
  minDelay: number,
  maxDelay: number
) => {
  const timeoutId = useRef<number | null>(null)
  const savedCallback = useRef(callback)
  const clearTimeout = () => {
    if (timeoutId.current) {
      window.clearTimeout(timeoutId.current)
    }
  }

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const handleTick = () => {
      const nextTickAt = random(minDelay, maxDelay)
      timeoutId.current = window.setTimeout(() => {
        savedCallback.current()
        handleTick()
      }, nextTickAt)
    }
    handleTick()

    return clearTimeout
  }, [minDelay, maxDelay])

  const cancel = useCallback(clearTimeout, [])
  return cancel
}
