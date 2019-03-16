import { useRef, useEffect } from 'react'

function useCardScroll<E extends HTMLElement>(dep?: any) {
  const skipNextRef = useRef(false)
  const domRef = useRef<E>(null)
  useEffect(() => {
    if (!skipNextRef.current) {
      skipNextRef.current = true
    } else {
      if (domRef.current) {
        if (window.scrollY < domRef.current.offsetTop) {
          window.scrollTo({
            top: domRef.current.offsetTop,
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
