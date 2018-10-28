import findNextCallExpressionAndParent from 'src/lib/yc/findNextCallExpressionAndParent'
import prioritizeExpression from 'src/lib/yc/prioritizeExpression'
import { ContainerWithState } from 'src/types/yc/ExpressionContainerTypes'
import { Expression } from 'src/types/yc/ExpressionTypes'

export default function prioritizeExpressionContainer<E extends Expression>(
  expressionContainer: ContainerWithState<'needsPrioritize', E>
): ContainerWithState<'ready', E> {
  const expression = prioritizeExpression<E>(expressionContainer.expression)
  return {
    containerState: 'ready',
    previouslyChangedExpressionState:
      expressionContainer.previouslyChangedExpressionState,
    expression,
    findResult: findNextCallExpressionAndParent(expression)
  }
}
