import { useRef, useEffect } from 'react'
import distanceFromTop from 'src/lib/distanceFromTop'

function useCardScroll<E extends HTMLElement>(dep?: any) {
  const skipNextRef = useRef(false)
  const domRef = useRef<E>(null)
  useEffect(() => {
    if (!skipNextRef.current) {
      skipNextRef.current = true
    } else {
      if (domRef.current) {
        if (window.pageYOffset < distanceFromTop(domRef.current)) {
          window.scrollTo({
            top: distanceFromTop(domRef.current),
            left: 0,
            behavior: 'smooth'
          })
        }
      }
    }
  }, [dep])

  return domRef
}

export default useCardScroll
