import omit from 'lodash/omit'
import {
  NeedsPrioritizeExpressionContainer,
  NeedsResetExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'
import {
  Expression,
  isCallExpression,
  isFunctionExpression,
  isVariableExpression
} from 'src/types/yc/ExpressionTypes'

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
  expressionContainer: NeedsResetExpressionContainer
): NeedsPrioritizeExpressionContainer {
  return {
    containerState: 'needsPrioritize',
    expression: resetExpression(expressionContainer.expression),
    previouslyChangedExpressionState: 'default'
  }
}
