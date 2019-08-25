/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { colors, spaces, radii, maxWidths } from 'src/lib/theme'
import { useSpring, animated } from 'react-spring'

const ProgressBar = ({
  percent,
  fromPercent,
  speed
}: {
  percent: number
  fromPercent: number
  speed?: number
}) => {
  const props = useSpring({
    width: `${percent}%`,
    from: { width: `${fromPercent}%` },
    config: { duration: speed }
  })
  return (
    <div
      css={css`
        border: 1px solid ${colors('indigo400')};
        height: ${spaces(0.25)};
        border-radius: ${radii(0.25)};
        background: ${colors('white')};
        margin: ${spaces(0.25)} auto ${spaces(1)};
        max-width: ${maxWidths('xxxs')};
      `}
    >
      <animated.div
        css={css`
          height: 100%;
          background: ${colors('indigo200')};
        `}
        style={props}
      />
    </div>
  )
}

export default ProgressBar
