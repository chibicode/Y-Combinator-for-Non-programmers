import resetExpression from 'src/lib/yc/resetExpression'
import {
  NeedsPrioritizeExpressionContainer,
  NeedsResetExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'
import { InactiveExpression } from 'src/types/yc/ExpressionTypes'

export default function resetExpressionContainer(
  expressionContainer: NeedsResetExpressionContainer
): NeedsPrioritizeExpressionContainer<InactiveExpression> {
  return {
    containerState: 'needsPrioritize',
    expression: resetExpression(expressionContainer.expression),
    previouslyChangedExpressionState: 'inactive'
  }
}
