import { useEffect, useCallback, useRef } from 'react'

const useTimeout = (callback: () => void, timeout: number = 0): (() => void) => {
  const timeoutIdRef = useRef<NodeJS.Timeout>()

  const cancel = useCallback(() => {
    const timeoutId = timeoutIdRef.current
    if (timeoutId) {
      timeoutIdRef.current = undefined
      clearTimeout(timeoutId)
    }
  }, [timeoutIdRef])

  useEffect(() => {
    timeoutIdRef.current = setTimeout(callback, timeout)
    return cancel
  }, [callback, timeout, cancel])

  return cancel
}

export default useTimeout
