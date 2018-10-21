import resetExpression from 'src/lib/yc/resetExpression'
import {
  NeedsPrioritizeExpressionContainer,
  NeedsResetExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'
import { DefaultStateExpression } from 'src/types/yc/ExpressionTypes'

export default function resetExpressionContainer(
  expressionContainer: NeedsResetExpressionContainer
): NeedsPrioritizeExpressionContainer<DefaultStateExpression> {
  return {
    containerState: 'needsPrioritize',
    expression: resetExpression(expressionContainer.expression),
    previouslyChangedExpressionState: 'inactive'
  }
}
