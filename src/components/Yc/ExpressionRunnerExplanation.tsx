/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Strong } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import TopBadge from 'src/components/Yc/TopBadge'
import locale from 'src/lib/locale'
import { colors } from 'src/lib/theme'
import { SteppedExpressionContainer } from 'src/types/yc/ExpressionContainerTypes'
import { CallStates } from 'src/types/yc/ExpressionTypes'
import H from 'src/components/H'
import InlineBackground from 'src/components/Yc/InlineBackground'
import InlinePrioritiesLabel from 'src/components/Yc/InlinePrioritiesLabel'

interface ExpressionRunnerExplanationProps {
  expressionContainer: SteppedExpressionContainer
  isDone: boolean
  currentStep: number
  currentSubstep: number
  isPlaying: boolean
  numSecondsRemaining: number
  showAllShowSteps?: boolean
  hideFuncUnboundBadge?: boolean
  hideRemainingTime: boolean
}

const allAtOnce = (hideFuncUnboundBadge?: boolean) =>
  locale === 'en' ? (
    <>
      Showing <BottomRightBadge bottomRightBadgeType="callArg" inline />{' '}
      <BottomRightBadge bottomRightBadgeType="funcBound" inline />{' '}
      {!hideFuncUnboundBadge && (
        <>
          <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />{' '}
        </>
      )}
      <BottomRightBadge bottomRightBadgeType="funcArg" inline />{' '}
    </>
  ) : (
    <>
      <BottomRightBadge bottomRightBadgeType="callArg" inline />{' '}
      <BottomRightBadge bottomRightBadgeType="funcArg" inline />{' '}
      {!hideFuncUnboundBadge && (
        <>
          <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />{' '}
        </>
      )}
      <BottomRightBadge bottomRightBadgeType="funcBound" inline />{' '}
      の印をつけます
    </>
  )

const stateToExplanation = ({
  state,
  matchExists,
  currentStep,
  currentSubstep,
  showAllShowSteps,
  hideFuncUnboundBadge
}: {
  state: CallStates
  matchExists?: boolean
  currentStep: number
  currentSubstep: number
  showAllShowSteps?: boolean
  hideFuncUnboundBadge?: boolean
}) => {
  if (currentStep === 1 && currentSubstep === 1) {
    if (locale === 'en') {
      return (
        <>
          Let’s begin! <Emoji>🍱</Emoji>
        </>
      )
    } else {
      return (
        <>
          スタート！
          <Emoji>🍱</Emoji>
        </>
      )
    }
  }
  switch (state) {
    case 'default': {
      if (locale === 'en') {
        return <>…</>
      } else {
        return (
          <>
            <InlinePrioritiesLabel>2</InlinePrioritiesLabel> が{' '}
            <InlinePrioritiesLabel>1</InlinePrioritiesLabel> に
          </>
        )
      }
    }
    case 'active': {
      if (locale === 'en') {
        return <>…</>
      } else {
        return (
          <>
            白色 <InlineBackground bgColor={'white'} /> の部分に注目します
          </>
        )
      }
    }
    case 'showFuncBound': {
      if (locale === 'en') {
        if (showAllShowSteps) {
          return (
            <>
              <BottomRightBadge bottomRightBadgeType="funcBound" inline />{' '}
              Rightmost on bottom row
            </>
          )
        } else {
          return allAtOnce(hideFuncUnboundBadge)
        }
      } else {
        if (showAllShowSteps) {
          return (
            <>
              下段の一番右は{' '}
              <BottomRightBadge bottomRightBadgeType="funcBound" inline />
            </>
          )
        } else {
          return allAtOnce(hideFuncUnboundBadge)
        }
      }
    }
    case 'showFuncUnbound': {
      if (locale === 'en') {
        if (showAllShowSteps) {
          return (
            <>
              <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />{' '}
              Middle items on bottom row
            </>
          )
        } else {
          return allAtOnce(hideFuncUnboundBadge)
        }
      } else {
        if (showAllShowSteps) {
          return (
            <>
              下段の真ん中は{' '}
              <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />
            </>
          )
        } else {
          return allAtOnce(hideFuncUnboundBadge)
        }
      }
    }
    case 'showFuncArg': {
      if (locale === 'en') {
        return (
          <>
            <BottomRightBadge bottomRightBadgeType="funcArg" inline /> Leftmost
            on bottom row
          </>
        )
      } else {
        return (
          <>
            下段の一番左は{' '}
            <BottomRightBadge bottomRightBadgeType="funcArg" inline />
          </>
        )
      }
    }
    case 'showCallArg': {
      if (locale === 'en') {
        return (
          <>
            <BottomRightBadge bottomRightBadgeType="callArg" inline /> Top row
          </>
        )
      } else {
        return (
          <>
            上段は <BottomRightBadge bottomRightBadgeType="callArg" inline />
          </>
        )
      }
    }
    case 'betaReducePreviewBefore': {
      if (locale === 'en') {
        return matchExists ? (
          <>
            There’s a match <TopBadge topBadgeType="match" inline /> between{' '}
            <BottomRightBadge bottomRightBadgeType="funcArg" inline /> and{' '}
            <BottomRightBadge bottomRightBadgeType="funcBound" inline />
          </>
        ) : (
          <>
            There’s no match <TopBadge topBadgeType="unmatch" inline /> between{' '}
            <BottomRightBadge bottomRightBadgeType="funcArg" inline /> and{' '}
            <BottomRightBadge bottomRightBadgeType="funcBound" inline />
          </>
        )
      } else {
        return matchExists ? (
          <>
            <BottomRightBadge bottomRightBadgeType="funcArg" inline /> と{' '}
            <BottomRightBadge bottomRightBadgeType="funcBound" inline /> に一致{' '}
            <TopBadge topBadgeType="match" inline /> する料理があります
          </>
        ) : (
          <>
            <BottomRightBadge bottomRightBadgeType="funcArg" inline /> と{' '}
            <BottomRightBadge bottomRightBadgeType="funcBound" inline />{' '}
            が一致しませんでした <TopBadge topBadgeType="unmatch" inline />
          </>
        )
      }
    }
    case 'betaReducePreviewAfter': {
      if (locale === 'en') {
        return (
          <>
            Matched <TopBadge topBadgeType="match" inline />{' '}
            <BottomRightBadge bottomRightBadgeType="funcBound" inline /> becomes
            the same as{' '}
            <BottomRightBadge bottomRightBadgeType="callArg" inline />
          </>
        )
      } else {
        return (
          <>
            <BottomRightBadge bottomRightBadgeType="callArg" inline />
            の料理を一致した
            <BottomRightBadge bottomRightBadgeType="funcBound" inline />
            の部分にコピペ <Emoji>↘</Emoji>
          </>
        )
      }
    }
    case 'betaReducePreviewCrossed': {
      if (locale === 'en') {
        return (
          <>
            <Emoji>💥</Emoji> Remove{' '}
            <BottomRightBadge bottomRightBadgeType="callArg" inline /> and{' '}
            <BottomRightBadge bottomRightBadgeType="funcArg" inline />
          </>
        )
      } else {
        return (
          <>
            <BottomRightBadge bottomRightBadgeType="callArg" inline /> と{' '}
            <BottomRightBadge bottomRightBadgeType="funcArg" inline />{' '}
            が消えます <Emoji>💥</Emoji>
          </>
        )
      }
    }
    case 'needsAlphaConvert': {
      if (locale === 'en') {
        return (
          <>
            <Emoji>🔀</Emoji> <Strong>Shuffle Time</Strong> (same item in{' '}
            <BottomRightBadge bottomRightBadgeType="callArg" inline />{' '}
            <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />{' '}
            <BottomRightBadge bottomRightBadgeType="funcBound" inline />)
          </>
        )
      } else {
        return (
          <>
            <Emoji>🔀</Emoji> <Strong>シャッフルタイム</Strong> (
            <BottomRightBadge bottomRightBadgeType="callArg" inline />{' '}
            <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />{' '}
            <BottomRightBadge bottomRightBadgeType="funcBound" inline /> が同じ)
          </>
        )
      }
    }
    case 'alphaConvertDone': {
      if (locale === 'en') {
        return (
          <>
            <Emoji>🔀</Emoji> <Strong>Shuffle Time</Strong>:{' '}
            <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />{' '}
            <BottomRightBadge bottomRightBadgeType="funcBound" inline /> become{' '}
            <TopBadge topBadgeType="conflictResolved" inline />
          </>
        )
      } else {
        return (
          <>
            <Emoji>🔀</Emoji> <Strong>シャッフルタイム</Strong>:{' '}
            <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />{' '}
            <BottomRightBadge bottomRightBadgeType="funcBound" inline /> が{' '}
            <TopBadge topBadgeType="conflictResolved" inline /> に
          </>
        )
      }
    }
    default: {
      return ''
    }
  }
}

const ExpressionRunnerExplanation = ({
  expressionContainer,
  currentStep,
  currentSubstep,
  isDone,
  numSecondsRemaining,
  isPlaying,
  showAllShowSteps,
  hideFuncUnboundBadge,
  hideRemainingTime
}: ExpressionRunnerExplanationProps) => (
  <>
    {isPlaying && !hideRemainingTime && !isDone ? (
      locale === 'en' ? (
        <>
          <Strong
            css={css`
              color: ${colors('pink400')};
            `}
          >
            {numSecondsRemaining}
          </Strong>{' '}
          second
          {numSecondsRemaining > 1 ? 's' : ''} left… <Emoji>▶️</Emoji>
        </>
      ) : (
        <>
          <Emoji>▶️</Emoji> 残り{' '}
          <Strong
            css={css`
              color: ${colors('pink400')};
            `}
          >
            {numSecondsRemaining}
          </Strong>{' '}
          秒…
        </>
      )
    ) : (
      <>
        {isDone ? (
          <H args={{ name: 'done' }} highlightType="none" />
        ) : (
          !hideRemainingTime &&
          stateToExplanation({
            state: expressionContainer.previouslyChangedExpressionState,
            currentStep,
            currentSubstep,
            matchExists: expressionContainer.matchExists,
            showAllShowSteps,
            hideFuncUnboundBadge
          })
        )}
      </>
    )}
  </>
)

export default ExpressionRunnerExplanation
