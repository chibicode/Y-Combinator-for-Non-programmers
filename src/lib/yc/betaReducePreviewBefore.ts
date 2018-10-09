import { ImmediatelyExecutableCallExpression } from 'src/types/yc/ExecutableExpressionTypes'
import {
  isPrioritizedCallExpression,
  isPrioritizedFunctionExpression,
  isPrioritizedVariableExpression,
  PrioritizedExpression,
  PrioritizedFunctionExpression,
  PrioritizedVariableExpression
} from 'src/types/yc/PrioritizedExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'

function helper<E extends PrioritizedExpression>({
  expression,
  from,
  to
}: {
  expression: E
  from: VariableNames
  to: PrioritizedVariableExpression | PrioritizedFunctionExpression
}): E {
  if (isPrioritizedVariableExpression(expression)) {
    if (expression.name === from) {
      // See: https://github.com/Microsoft/TypeScript/pull/13288#issuecomment-367396818
      return Object.assign({}, expression, { willBeBetaReduced: true })
    } else {
      return expression
    }
  } else if (isPrioritizedCallExpression(expression)) {
    return Object.assign({}, expression, {
      arg: helper({
        expression: expression.arg,
        from,
        to
      }),
      func: helper({
        expression: expression.func,
        from,
        to
      })
    })
  } else if (isPrioritizedFunctionExpression(expression)) {
    return Object.assign({}, expression, {
      body: helper({
        expression: expression.body,
        from,
        to
      })
    })
  } else {
    throw new Error()
  }
}

export default function betaReducePreviewBefore(
  expression: ImmediatelyExecutableCallExpression
): ImmediatelyExecutableCallExpression {
  const newExpression = { ...expression }
  newExpression.func.body = helper({
    expression: expression.func.body,
    from: expression.func.arg.name,
    to: expression.arg
  })
  return newExpression
}
