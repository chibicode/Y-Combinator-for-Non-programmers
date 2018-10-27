import resetExpression from 'src/lib/yc/resetExpression'
import {
  NeedsPrioritizeExpressionContainer,
  NeedsResetExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'
import { StepChild } from 'src/types/yc/ExpressionTypes'

export default function resetExpressionContainer(
  expressionContainer: NeedsResetExpressionContainer
): NeedsPrioritizeExpressionContainer<StepChild<'default'>> {
  return {
    containerState: 'needsPrioritize',
    expression: resetExpression(expressionContainer.expression),
    previouslyChangedExpressionState: 'default'
  }
}
