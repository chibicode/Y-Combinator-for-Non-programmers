import { css } from 'emotion'
import React from 'react'
import { Strong } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiBadge from 'src/components/Yc/EmojiBadge'
import InlineBackground from 'src/components/Yc/InlineBackground'
import InlinePrioritiesLabel from 'src/components/Yc/InlinePrioritiesLabel'
import locale from 'src/lib/locale'
import { colors, fontSizes, lineHeights, spaces } from 'src/lib/theme'
import { SteppedExpressionContainer } from 'src/types/yc/ExpressionContainerTypes'
import { CallStates } from 'src/types/yc/ExpressionTypes'

interface ExpressionRunnerExplanationProps {
  expressionContainer: SteppedExpressionContainer
  isDone: boolean
  currentStep: number
  currentSubstep: number
  hideLeftMostPrioritiesExplanation: boolean
  isPlaying: boolean
  numSecondsRemaining: number
  showAllShowSteps?: boolean
}

const stateToExplanation = ({
  state,
  matchExists,
  currentStep,
  currentSubstep,
  hideLeftMostPrioritiesExplanation,
  showAllShowSteps
}: {
  state: CallStates
  matchExists?: boolean
  currentStep: number
  currentSubstep: number
  hideLeftMostPrioritiesExplanation: boolean
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
        return (
          <>
            Previous <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
            ’s disappeared
          </>
        )
      } else {
        return (
          <>
            以前の <InlinePrioritiesLabel>1</InlinePrioritiesLabel> が消えました
          </>
        )
      }
    }
    case 'active': {
      if (locale === 'en') {
        return (
          <>
            {!hideLeftMostPrioritiesExplanation && 'Leftmost '}
            <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>
            ’s on top/bottom left
          </>
        )
      } else {
        return (
          <>
            左上と左下が <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>{' '}
            の部分
            {!hideLeftMostPrioritiesExplanation && '(一番左)'}
            を白色に
          </>
        )
      }
    }
    case 'showFuncBound': {
      if (locale === 'en') {
        return (
          <>
            <EmojiBadge badgeType="funcBound" inline /> Rightmost on bottom row
          </>
        )
      } else {
        return (
          <>
            下段の一番右は
            <EmojiBadge badgeType="funcBound" inline />
          </>
        )
      }
    }
    case 'showFuncUnbound': {
      if (locale === 'en') {
        return (
          <>
            <EmojiBadge badgeType="funcUnbound" inline /> “Eat Later” list
          </>
        )
      } else {
        return (
          <>
            あとで食べるものリスト <EmojiBadge badgeType="funcUnbound" inline />
          </>
        )
      }
    }
    case 'showFuncArg': {
      if (locale === 'en') {
        return (
          <>
            <EmojiBadge badgeType="funcArg" inline /> Leftmost on bottom row
          </>
        )
      } else {
        return (
          <>
            下段の一番左は
            <EmojiBadge badgeType="funcArg" inline />
          </>
        )
      }
    }
    case 'showCallArg': {
      if (locale === 'en') {
        if (showAllShowSteps) {
          return (
            <>
              <EmojiBadge badgeType="callArg" inline /> Top row
            </>
          )
        } else {
          return (
            <>
              Showing <EmojiBadge badgeType="funcBound" inline />{' '}
              <EmojiBadge badgeType="funcUnbound" inline />{' '}
              <EmojiBadge badgeType="funcArg" inline />{' '}
              <EmojiBadge badgeType="callArg" inline />
            </>
          )
        }
      } else {
        if (showAllShowSteps) {
          return (
            <>
              上段は
              <EmojiBadge badgeType="callArg" inline />
            </>
          )
        } else {
          return (
            <>
              <EmojiBadge badgeType="funcBound" inline />{' '}
              <EmojiBadge badgeType="funcUnbound" inline />{' '}
              <EmojiBadge badgeType="funcArg" inline />{' '}
              <EmojiBadge badgeType="callArg" inline /> はこうなります
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
            No matches in <EmojiBadge badgeType="funcBound" inline />
          </>
        )
      } else {
        return matchExists ? (
          <>
            <InlineBackground bgPattern="star" /> を食べます
          </>
        ) : (
          <>
            食べられる料理が <EmojiBadge badgeType="funcBound" inline />{' '}
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
            <EmojiBadge badgeType="callArg" inline />
          </>
        )
      } else {
        return (
          <>
            <EmojiBadge badgeType="callArg" inline /> と入れ替わります{' '}
            <Emoji>🆕</Emoji>
          </>
        )
      }
    }
    case 'betaReducePreviewCrossed': {
      if (locale === 'en') {
        return (
          <>
            Removing <EmojiBadge badgeType="callArg" inline /> and{' '}
            <EmojiBadge badgeType="funcArg" inline />
          </>
        )
      } else {
        return (
          <>
            <EmojiBadge badgeType="callArg" inline /> と
            <EmojiBadge badgeType="funcArg" inline /> が消えます
          </>
        )
      }
    }
    case 'needsAlphaConvert': {
      if (locale === 'en') {
        return (
          <>
            <Emoji>🔀</Emoji> <Strong>Shuffle Time</Strong> (same item in{' '}
            <EmojiBadge badgeType="callArg" inline />{' '}
            <EmojiBadge badgeType="funcUnbound" inline />{' '}
            <EmojiBadge badgeType="funcBound" inline />)
          </>
        )
      } else {
        return (
          <>
            <Emoji>🔀</Emoji> <Strong>シャッフルタイム</Strong> (
            <EmojiBadge badgeType="callArg" inline />{' '}
            <EmojiBadge badgeType="funcUnbound" inline />{' '}
            <EmojiBadge badgeType="funcBound" inline /> に同じ料理がある)
          </>
        )
      }
    }
    case 'alphaConvertDone': {
      if (locale === 'en') {
        return (
          <>
            <Emoji>🔀</Emoji> <Strong>Shuffle Time</Strong>:{' '}
            <EmojiBadge badgeType="funcUnbound" inline />{' '}
            <EmojiBadge badgeType="funcBound" inline /> become new dish
          </>
        )
      } else {
        return (
          <>
            <Emoji>🔀</Emoji> <Strong>シャッフルタイム</Strong>:{' '}
            <EmojiBadge badgeType="funcUnbound" inline />{' '}
            <EmojiBadge badgeType="funcBound" inline /> が新しい料理に
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
  hideLeftMostPrioritiesExplanation,
  numSecondsRemaining,
  isPlaying,
  showAllShowSteps
}) => (
  <div
    className={css`
      text-align: center;
      margin: ${spaces('-0.5')} -2px ${spaces(0.5)} -2px;
      font-size: ${fontSizes(0.85)};
      color: ${colors('indigo300')};
      /* Use bigger line height to compensate for badges */
      line-height: ${lineHeights(2)};
    `}
  >
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
          <Emoji>⏩</Emoji> 残り{' '}
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
              Done! <Emoji>✅</Emoji>
            </>
          ) : (
            <>
              終了！
              <Emoji>✅</Emoji>
            </>
          )
        ) : (
          stateToExplanation({
            state: expressionContainer.previouslyChangedExpressionState,
            currentStep,
            currentSubstep,
            hideLeftMostPrioritiesExplanation,
            matchExists: expressionContainer.matchExists,
            showAllShowSteps
          })
        )}
      </>
    )}
  </div>
)

export default ExpressionRunnerExplanation
