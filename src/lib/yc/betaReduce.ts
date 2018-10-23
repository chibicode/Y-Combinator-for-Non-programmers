import { isCall, isVariable } from 'src/lib/yc/expressionTypeGuards'
import {
  ImmediatelyExecutableCallExpression,
  PrioritizedExpression,
  PrioritizedFunctionExpression,
  PrioritizedVariableExpression
} from 'src/types/yc/ExpressionTypes'
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
  if (isVariable(expression)) {
    if (expression.name === from) {
      // See: https://github.com/Microsoft/TypeScript/pull/13288#issuecomment-367396818
      return Object.assign({}, to, { wasJustBetaReduced: true })
    } else {
      return Object.assign({}, expression, { wasJustBetaReduced: false })
    }
  } else if (isCall(expression)) {
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
