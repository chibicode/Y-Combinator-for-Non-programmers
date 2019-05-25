import prioritizeExpression from 'src/lib/prioritizeExpression'
import { ContainerWithState } from 'src/types/yc/ExpressionContainerTypes'
import { Expression } from 'src/types/yc/ExpressionTypes'

export default function prioritizeExpressionContainer<E extends Expression>(
  expressionContainer: ContainerWithState<'needsPrioritize', E>
): ContainerWithState<'ready', E> {
  return {
    containerState: 'ready',
    previouslyChangedExpressionState:
      expressionContainer.previouslyChangedExpressionState,
    expression: prioritizeExpression<E>(expressionContainer.expression)
  }
}
