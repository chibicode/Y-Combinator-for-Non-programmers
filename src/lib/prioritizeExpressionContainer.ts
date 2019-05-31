import prioritizeExpression from 'src/lib/prioritizeExpression'
import { ContainerWithState } from 'src/types/ExpressionContainerTypes'
import { Expression } from 'src/types/ExpressionTypes'

export default function prioritizeExpressionContainer<E extends Expression>(
  expressionContainer: ContainerWithState<'needsPrioritize', E>
): ContainerWithState<'ready', E> {
  return {
    containerState: 'ready',
    previouslyChangedExpressionState:
      expressionContainer.previouslyChangedExpressionState,
    expression: prioritizeExpression<E>(expressionContainer.expression),
    unaryJustExecuted: expressionContainer.unaryJustExecuted
  }
}
