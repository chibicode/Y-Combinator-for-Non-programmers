import populatePriorityAggsAndPrioritizeExpression from 'src/lib/yc/populatePriorityAggsAndPrioritizeExpression'
import {
  NeedsPrioritizeExpressionContainer,
  PrioritizedExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'
import {
  CallExpression,
  Expression,
  FunctionExpression,
  PrioritizedCallExpression,
  PrioritizedExpression,
  PrioritizedFunctionExpression,
  PrioritizedVariableExpression,
  VariableExpression
} from 'src/types/yc/ExpressionTypes'

export default function prioritizeExpressionContainer(
  expressionContainer: NeedsPrioritizeExpressionContainer<VariableExpression>
): PrioritizedExpressionContainer<PrioritizedVariableExpression>
export default function prioritizeExpressionContainer(
  expressionContainer: NeedsPrioritizeExpressionContainer<CallExpression>
): PrioritizedExpressionContainer<PrioritizedCallExpression>
export default function prioritizeExpressionContainer(
  expressionContainer: NeedsPrioritizeExpressionContainer<FunctionExpression>
): PrioritizedExpressionContainer<PrioritizedFunctionExpression>
export default function prioritizeExpressionContainer(
  expressionContainer: NeedsPrioritizeExpressionContainer<Expression>
): PrioritizedExpressionContainer<PrioritizedExpression>
export default function prioritizeExpressionContainer(
  expressionContainer: NeedsPrioritizeExpressionContainer<Expression>
): PrioritizedExpressionContainer<PrioritizedExpression> {
  return {
    containerState: 'prioritized',
    previouslyChangedExpressionState:
      expressionContainer.previouslyChangedExpressionState,
    expression: populatePriorityAggsAndPrioritizeExpression(
      expressionContainer.expression
    )
  }
}
