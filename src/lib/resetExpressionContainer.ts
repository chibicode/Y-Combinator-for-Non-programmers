import omit from 'lodash/omit'
import {
  ExpressionContainer,
  UnprioritizedExpressionContainer
} from 'src/types/ExpressionContainerTypes'
import {
  Expression,
  isCallExpression,
  isFunctionExpression,
  isVariableExpression
} from 'src/types/ExpressionTypes'

function resetExpression<E extends Expression>(expression: E): E {
  if (isVariableExpression(expression)) {
    // See: https://github.com/Microsoft/TypeScript/pull/13288#issuecomment-367396818
    return Object.assign({}, expression, {
      state: 'default'
    })
  } else if (isCallExpression(expression)) {
    return omit(
      Object.assign({}, expression, {
        state: 'default',
        arg: resetExpression(expression.arg),
        func: resetExpression(expression.func)
      }),
      'priority'
    )
  } else if (isFunctionExpression(expression)) {
    return Object.assign({}, expression, {
      state: 'default',
      arg: resetExpression(expression.arg),
      body: resetExpression(expression.body)
    })
  }
  // See: https://github.com/Microsoft/TypeScript/issues/20235
  throw new Error()
}

export default function resetExpressionContainer(
  expressionContainer: ExpressionContainer
): UnprioritizedExpressionContainer {
  return {
    prioritized: false,
    needsReset: false,
    expression: resetExpression(expressionContainer.expression)
  }
}
