import {
  isCallExpression,
  isFunctionExpression,
  isVariableExpression
} from 'src/lib/yc/expressionTypeGuards'
import {
  CallExpression,
  Expression,
  FunctionExpression
} from 'src/types/yc/ExpressionTypes'

function helper<E extends Expression>(expression: E): E {
  if (isVariableExpression(expression)) {
    return Object.assign({}, expression, {
      bound: true
    })
  } else if (isFunctionExpression(expression)) {
    return Object.assign({}, expression, {
      arg: { ...expression.arg, bound: false },
      body: helper(expression.body)
    })
  } else if (isCallExpression(expression)) {
    return Object.assign({}, expression, {
      arg: helper(expression.arg),
      func: helper(expression.func)
    })
  } else {
    throw new Error()
  }
}

export default function markBoundVariables<
  E extends FunctionExpression | CallExpression
>(expression: E): E {
  return helper(expression)
}
