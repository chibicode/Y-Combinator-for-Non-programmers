/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { InlineHeader } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import locale from 'src/lib/locale'
import { colors } from 'src/lib/theme'

interface ExpressionRunnerTimerProps {
  isDone: boolean
  isPlaying: boolean
  numSecondsRemaining: number
  hideRemainingTime: boolean
}

const ExpressionRunnerTimer = ({
  isDone,
  numSecondsRemaining,
  isPlaying,
  hideRemainingTime
}: ExpressionRunnerTimerProps) => (
  <>
    {isPlaying &&
      !hideRemainingTime &&
      !isDone &&
      (locale === 'en' ? (
        <>
          <InlineHeader
            css={css`
              color: ${colors('pink400')};
            `}
          >
            {numSecondsRemaining}
          </InlineHeader>{' '}
          second
          {numSecondsRemaining > 1 ? 's' : ''} left… <Emoji>▶️</Emoji>
        </>
      ) : (
        <>
          <Emoji>▶️</Emoji> 残り{' '}
          <InlineHeader
            css={css`
              color: ${colors('pink400')};
            `}
          >
            {numSecondsRemaining}
          </InlineHeader>{' '}
          秒…
        </>
      ))}
  </>
)

export default ExpressionRunnerTimer
