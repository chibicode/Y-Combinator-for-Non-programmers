import { useState, useEffect } from 'react'
import usePrevious from 'src/hooks/usePrevious'

const useScrollAdjuster = ({
  controlsRef,
  shouldAdjustScroll,
  setShouldAdjustScroll
}: {
  controlsRef: React.MutableRefObject<HTMLDivElement | null>
  shouldAdjustScroll: boolean
  setShouldAdjustScroll: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [offsetTop, setOffsetTop] = useState<number | undefined>(undefined)
  const previousOffsetTop = usePrevious(offsetTop)
  useEffect(() => {
    if (shouldAdjustScroll) {
      if (previousOffsetTop) {
        window.scroll(
          0,
          window.pageYOffset +
            controlsRef.current!.offsetTop -
            previousOffsetTop
        )
      }
      setOffsetTop(controlsRef.current!.offsetTop)
      setShouldAdjustScroll(false)
    }
  }, [
    controlsRef,
    previousOffsetTop,
    shouldAdjustScroll,
    setShouldAdjustScroll
  ])
}

export default useScrollAdjuster
