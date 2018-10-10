import { css } from 'emotion'
import React from 'react'
import { Strong } from 'src/components/ContentTags'
import { colors, fontSizes, spaces } from 'src/lib/theme'
import { SteppedExpressionContainer } from 'src/types/yc/ExpressionContainerTypes'

interface ExpressionRunnerExplanationProps {
  expressionContainer: SteppedExpressionContainer
  isDone: boolean
  currentStep: number
}

const ExpressionRunnerExplanation: React.SFC<
  ExpressionRunnerExplanationProps
> = ({ currentStep }) => (
  <div
    className={css`
      text-align: center;
      margin: ${spaces(0.75)} -2px 0 -2px;
      font-size: ${fontSizes(0.85)};
      color: ${colors('indigo300')};
    `}
  >
    <Strong>Step {currentStep}:</Strong> Hello World
  </div>
)

export default ExpressionRunnerExplanation
