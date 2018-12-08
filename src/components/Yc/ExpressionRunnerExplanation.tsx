import { css } from 'emotion'
import React from 'react'
import { Strong } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import InlineBackground from 'src/components/Yc/InlineBackground'
import locale from 'src/lib/locale'
import { colors } from 'src/lib/theme'
import { SteppedExpressionContainer } from 'src/types/yc/ExpressionContainerTypes'
import { CallStates } from 'src/types/yc/ExpressionTypes'

interface ExpressionRunnerExplanationProps {
  expressionContainer: SteppedExpressionContainer
  isDone: boolean
  currentStep: number
  currentSubstep: number
  isPlaying: boolean
  numSecondsRemaining: number
  showAllShowSteps?: boolean
}

const stateToExplanation = ({
  state,
  matchExists,
  currentStep,
  currentSubstep,
  showAllShowSteps
}: {
  state: CallStates
  matchExists?: boolean
  currentStep: number
  currentSubstep: number
  showAllShowSteps?: boolean
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
        return <>Removed!</>
      } else {
        return <>消えました！</>
      }
    }
    case 'active': {
      if (locale === 'en') {
        return <>We’ll focus on these…</>
      } else {
        return <>この部分をやっていきます</>
      }
    }
    case 'showFuncBound': {
      if (locale === 'en') {
        return (
          <>
            <BottomRightBadge bottomRightBadgeType="funcBound" inline />{' '}
            Rightmost on bottom row
          </>
        )
      } else {
        return (
          <>
            下段の一番右は
            <BottomRightBadge bottomRightBadgeType="funcBound" inline />
          </>
        )
      }
    }
    case 'showFuncUnbound': {
      if (locale === 'en') {
        return (
          <>
            <BottomRightBadge bottomRightBadgeType="funcUnbound" inline /> “Eat
            Later” list
          </>
        )
      } else {
        return (
          <>
            あとで食べるものリスト{' '}
            <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />
          </>
        )
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
            下段の一番左は
            <BottomRightBadge bottomRightBadgeType="funcArg" inline />
          </>
        )
      }
    }
    case 'showCallArg': {
      if (locale === 'en') {
        if (showAllShowSteps) {
          return (
            <>
              <BottomRightBadge bottomRightBadgeType="callArg" inline /> Top row
            </>
          )
        } else {
          return (
            <>
              Showing{' '}
              <BottomRightBadge bottomRightBadgeType="funcBound" inline />{' '}
              <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />{' '}
              <BottomRightBadge bottomRightBadgeType="funcArg" inline />{' '}
              <BottomRightBadge bottomRightBadgeType="callArg" inline />
            </>
          )
        }
      } else {
        if (showAllShowSteps) {
          return (
            <>
              上段は
              <BottomRightBadge bottomRightBadgeType="callArg" inline />
            </>
          )
        } else {
          return (
            <>
              <BottomRightBadge bottomRightBadgeType="funcBound" inline />{' '}
              <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />{' '}
              <BottomRightBadge bottomRightBadgeType="funcArg" inline />{' '}
              <BottomRightBadge bottomRightBadgeType="callArg" inline />{' '}
              はこうなります
            </>
          )
        }
      }
    }
    case 'betaReducePreviewBefore': {
      if (locale === 'en') {
        return matchExists ? (
          <>
            Highlighting matches <InlineBackground bgPattern="star" />
          </>
        ) : (
          <>
            No matches in{' '}
            <BottomRightBadge bottomRightBadgeType="funcBound" inline />
          </>
        )
      } else {
        return matchExists ? (
          <>
            <InlineBackground bgPattern="star" /> を食べます
          </>
        ) : (
          <>
            食べられる料理が{' '}
            <BottomRightBadge bottomRightBadgeType="funcBound" inline />{' '}
            にありません
          </>
        )
      }
    }
    case 'betaReducePreviewAfter': {
      if (locale === 'en') {
        return (
          <>
            Matches replaced <Emoji>🆕</Emoji> with{' '}
            <BottomRightBadge bottomRightBadgeType="callArg" inline />
          </>
        )
      } else {
        return (
          <>
            <BottomRightBadge bottomRightBadgeType="callArg" inline />{' '}
            と入れ替わります <Emoji>🆕</Emoji>
          </>
        )
      }
    }
    case 'betaReducePreviewCrossed': {
      if (locale === 'en') {
        return (
          <>
            Removing <BottomRightBadge bottomRightBadgeType="callArg" inline />{' '}
            and <BottomRightBadge bottomRightBadgeType="funcArg" inline />
          </>
        )
      } else {
        return (
          <>
            <BottomRightBadge bottomRightBadgeType="callArg" inline /> と
            <BottomRightBadge bottomRightBadgeType="funcArg" inline />{' '}
            が消えます
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
            <BottomRightBadge bottomRightBadgeType="funcBound" inline />{' '}
            に同じ料理がある)
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
            <BottomRightBadge bottomRightBadgeType="funcBound" inline /> become
            new dish
          </>
        )
      } else {
        return (
          <>
            <Emoji>🔀</Emoji> <Strong>シャッフルタイム</Strong>:{' '}
            <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />{' '}
            <BottomRightBadge bottomRightBadgeType="funcBound" inline />{' '}
            が新しい料理に
          </>
        )
      }
    }
    default: {
      return ''
    }
  }
}

const ExpressionRunnerExplanation: React.SFC<
  ExpressionRunnerExplanationProps
> = ({
  expressionContainer,
  currentStep,
  currentSubstep,
  isDone,
  numSecondsRemaining,
  isPlaying,
  showAllShowSteps
}) => (
  <>
    {isPlaying ? (
      locale === 'en' ? (
        <>
          <Strong
            className={css`
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
            className={css`
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
        <Strong>
          {locale === 'en' ? 'Step ' : 'ステップ'}
          {currentStep}
          {locale === 'en' ? '.' : '–'}
          {currentSubstep}:
        </Strong>{' '}
        {isDone ? (
          locale === 'en' ? (
            <>
              Done! <Emoji>👍</Emoji>
            </>
          ) : (
            <>
              終了！
              <Emoji>👍</Emoji>
            </>
          )
        ) : (
          stateToExplanation({
            state: expressionContainer.previouslyChangedExpressionState,
            currentStep,
            currentSubstep,
            matchExists: expressionContainer.matchExists,
            showAllShowSteps
          })
        )}
      </>
    )}
  </>
)

export default ExpressionRunnerExplanation
