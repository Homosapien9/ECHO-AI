'use client'

import { useEffect, useState } from 'react'

export function useBreakpoint(breakpoint = 1024) {
  const [isBelow, setIsBelow] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    const update = () => setIsBelow(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [breakpoint])

  return isBelow
}
