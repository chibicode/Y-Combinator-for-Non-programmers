/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { spaces } from 'src/lib/theme'
import { useState, useRef, useEffect } from 'react'
import locale from 'src/lib/locale'

declare global {
  interface Window {
    twttr: any
    __twttr: any
  }
}

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback: (...args: any[]) => void, delay: number | null) {
  const savedCallback = useRef<(...args: any[]) => void>()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const EMBED_DELAY = 500

const TwitterEmbed = ({ id }: { id: string }) => {
  const wrapperEl = useRef<HTMLDivElement>(null)
  const [twitterLoaded, setTwitterLoaded] = useState(false)
  useInterval(
    () => {
      if (
        window.twttr &&
        window.twttr.widgets &&
        window.twttr.widgets.load &&
        wrapperEl.current
      ) {
        window.twttr.widgets.load(wrapperEl.current)
        setTwitterLoaded(true)
      }
    },
    twitterLoaded ? null : EMBED_DELAY
  )
  return (
    <div
      css={[
        twitterLoaded &&
          css`
            margin: ${spaces(2)} 0;
          `
      ]}
      ref={wrapperEl}
      dangerouslySetInnerHTML={{
        __html: `
      <blockquote
        class="twitter-tweet tw-align-center"
        data-dnt="true"
        data-lang="${locale}"
      >
        <a href="https://twitter.com/chibicode/status/${id}"></a>
      </blockquote>
      `
      }}
    />
  )
}

export default TwitterEmbed
