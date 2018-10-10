import { css } from 'emotion'
import React from 'react'
import { Em, Strong } from 'src/components/ContentTags'
import h from 'src/lib/h'
import { spaces } from 'src/lib/theme'
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
    `}
  >
    <Strong>Step {currentStep}:</Strong> Hello World
  </div>
)

export default ExpressionRunnerExplanation
