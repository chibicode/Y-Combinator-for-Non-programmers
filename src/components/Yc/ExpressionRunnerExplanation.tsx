import { css } from 'emotion'
import React from 'react'
import { Strong } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiBadge from 'src/components/Yc/EmojiBadge'
import InlineBackground from 'src/components/Yc/InlineBackground'
import InlinePrioritiesLabel from 'src/components/Yc/InlinePrioritiesLabel'
import locale from 'src/lib/locale'
import { colors, fontSizes, lineHeights, spaces } from 'src/lib/theme'
import {
  PreviouslyChangedExpressionState,
  SteppedExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'

interface ExpressionRunnerExplanationProps {
  expressionContainer: SteppedExpressionContainer
  isDone: boolean
  currentStep: number
  currentSubstep: number
  hideLeftMostPrioritiesExplanation: boolean
}

const stateToExplanation = ({
  state,
  matchExists,
  currentStep,
  currentSubstep,
  hideLeftMostPrioritiesExplanation
}: {
  state: PreviouslyChangedExpressionState
  matchExists?: boolean
  currentStep: number
  currentSubstep: number
  hideLeftMostPrioritiesExplanation: boolean
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
    case 'readyToHighlight': {
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
            {!hideLeftMostPrioritiesExplanation && 'である一番外側'}
            の部分を白色に
          </>
        )
      }
    }
    case 'funcBodyJustHighlighted': {
      if (locale === 'en') {
        return (
          <>
            Highlighting <EmojiBadge badgeType="funcBody" inline />
          </>
        )
      } else {
        return (
          <>
            <EmojiBadge badgeType="funcBody" inline /> はこちら
          </>
        )
      }
    }
    case 'funcArgJustHighlighted': {
      if (locale === 'en') {
        return (
          <>
            Highlighting <EmojiBadge badgeType="funcArg" inline />
          </>
        )
      } else {
        return (
          <>
            <EmojiBadge badgeType="funcArg" inline /> はこちら
          </>
        )
      }
    }
    case 'callArgJustHighlighted': {
      if (locale === 'en') {
        return (
          <>
            Highlighting <EmojiBadge badgeType="callArg" inline />
          </>
        )
      } else {
        return (
          <>
            <EmojiBadge badgeType="callArg" inline /> はこちら
          </>
        )
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
            No matches <Emoji>😭</Emoji>
          </>
        )
      } else {
        return matchExists ? (
          <>
            <InlineBackground bgPattern="star" /> を食べます
          </>
        ) : (
          <>
            食べられる料理がありません <Emoji>😭</Emoji>
          </>
        )
      }
    }
    case 'betaReducePreviewAfter': {
      if (locale === 'en') {
        return matchExists ? (
          <>
            Matches replaced <Emoji>🆕</Emoji>
          </>
        ) : (
          <>
            Nothing to replace <Emoji>😭</Emoji>
          </>
        )
      } else {
        return matchExists ? (
          <>
            食べたら次の料理に <Emoji>🆕</Emoji>
          </>
        ) : (
          <>
            だから、何も食べません <Emoji>😭</Emoji>
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
  hideLeftMostPrioritiesExplanation
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
        matchExists: expressionContainer.matchExists
      })
    )}
  </div>
)

export default ExpressionRunnerExplanation
