import { useRef, useEffect } from 'react'

function usePrevious<S = any>(value: S) {
  const ref = useRef<S>()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export default usePrevious
