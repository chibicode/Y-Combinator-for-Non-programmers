import { ImmediatelyExecutableCallExpression } from 'src/types/yc/ExecutableExpressionTypes'
import {
  isCallExpression,
  isVariableExpression
} from 'src/types/yc/ExpressionTypes'
import {
  PrioritizedExpression,
  PrioritizedFunctionExpression,
  PrioritizedVariableExpression
} from 'src/types/yc/PrioritizedExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'

function helper({
  expression,
  from,
  to
}: {
  expression: PrioritizedExpression
  from: VariableNames
  to: PrioritizedVariableExpression | PrioritizedFunctionExpression
}): PrioritizedExpression {
  if (isVariableExpression(expression)) {
    if (expression.name === from) {
      return to
    } else {
      return expression
    }
  } else if (isCallExpression(expression)) {
    return {
      ...expression,
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
    }
  } else {
    return {
      ...expression,
      body: helper({
        expression: expression.body,
        from,
        to
      })
    }
  }
}

export default function betaReduce(
  expression: ImmediatelyExecutableCallExpression
): PrioritizedExpression {
  return helper({
    expression: expression.func.body,
    from: expression.func.arg.name,
    to: expression.arg
  })
}
