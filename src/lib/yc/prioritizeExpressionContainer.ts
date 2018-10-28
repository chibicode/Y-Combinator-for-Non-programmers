import prioritizeExpression from 'src/lib/yc/prioritizeExpression'
import { ContainerWithState } from 'src/types/yc/ExpressionContainerTypes'
import { Expression } from 'src/types/yc/ExpressionTypes'

export default function prioritizeExpressionContainer<E extends Expression>(
  expressionContainer: ContainerWithState<'needsPrioritize', E>
): ContainerWithState<'prioritized', E> {
  return {
    containerState: 'prioritized',
    previouslyChangedExpressionState:
      expressionContainer.previouslyChangedExpressionState,
    expression: prioritizeExpression<E>(expressionContainer.expression)
  }
}
