import prioritizeExpression from 'scripts/lib/prioritizeExpression'
import {
  ContainerWithState,
  ExpressionContainer
} from 'src/types/ExpressionContainerTypes'
import { Expression } from 'src/types/ExpressionTypes'
import { isContainerWithState } from 'src/lib/expressionContainerGuards'

export default function prioritizeExpressionContainer<E extends Expression>(
  expressionContainer: ContainerWithState<'done', E>,
  applicativeOrder?: boolean
): ContainerWithState<'done', E>
export default function prioritizeExpressionContainer<E extends Expression>(
  expressionContainer: ExpressionContainer<E>,
  applicativeOrder?: boolean
): ContainerWithState<'ready', E>
export default function prioritizeExpressionContainer<E extends Expression>(
  expressionContainer: ExpressionContainer<E>,
  applicativeOrder?: boolean
) {
  return {
    ...expressionContainer,
    containerState: isContainerWithState(expressionContainer, 'done')
      ? 'done'
      : 'ready',
    previouslyChangedExpressionState:
      expressionContainer.previouslyChangedExpressionState,
    expression: prioritizeExpression<E>(
      expressionContainer.expression,
      applicativeOrder
    )
  }
}
