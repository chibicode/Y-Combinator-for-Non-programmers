import { css } from 'emotion'
import React from 'react'
import { Strong } from 'src/components/ContentTags'
import { Em } from 'src/components/ContentTags/Inline'
import Emoji from 'src/components/Emoji'
import EmojiBadge from 'src/components/Yc/EmojiBadge'
import InlineBackground from 'src/components/Yc/InlineBackground'
import locale from 'src/lib/locale'
import { colors, fontSizes, spaces } from 'src/lib/theme'
import {
  PreviouslyChangedExpressionState,
  SteppedExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'

interface ExpressionRunnerExplanationProps {
  expressionContainer: SteppedExpressionContainer
  isDone: boolean
  currentStep: number
  currentSubstep: number
}

const stateToExplanation = (
  state: PreviouslyChangedExpressionState,
  currentStep: number,
  currentSubstep: number
) => {
  switch (state) {
    case 'readyToHighlight': {
      if (currentStep === 1 && currentSubstep === 1) {
        if (locale === 'en') {
          return (
            <>
              Let’s begin! <Emoji>🍱</Emoji>
            </>
          )
        } else {
          return ''
        }
      } else {
        return ''
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
        return ''
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
        return ''
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
        return ''
      }
    }
    case 'betaReducePreviewBefore': {
      if (locale === 'en') {
        return (
          <>
            Highlighting matches <InlineBackground bgPattern="star" />
          </>
        )
      } else {
        return ''
      }
    }
    case 'betaReducePreviewAfter': {
      if (locale === 'en') {
        return (
          <>
            Replacing matches <Emoji>🆕</Emoji>
          </>
        )
      } else {
        return ''
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
        return ''
      }
    }
    default: {
      return ''
    }
  }
}

const ExpressionRunnerExplanation: React.SFC<
  ExpressionRunnerExplanationProps
> = ({ expressionContainer, currentStep, currentSubstep, isDone }) => (
  <div
    className={css`
      text-align: center;
      margin: 0 -2px ${spaces(0.75)} -2px;
      font-size: ${fontSizes(0.85)};
      color: ${colors('indigo300')};
    `}
  >
    <Strong>
      Step {currentStep}.{currentSubstep}:
    </Strong>{' '}
    {isDone ? (
      <>
        Done! <Emoji>✅</Emoji>
      </>
    ) : (
      stateToExplanation(
        expressionContainer.previouslyChangedExpressionState,
        currentStep,
        currentSubstep
      )
    )}
  </div>
)

export default ExpressionRunnerExplanation
