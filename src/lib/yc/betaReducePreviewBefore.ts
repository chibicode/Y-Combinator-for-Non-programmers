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
}): {
  result: E
  matchExists: boolean
} {
  if (isPrioritizedVariableExpression(expression)) {
    if (expression.name === from) {
      // See: https://github.com/Microsoft/TypeScript/pull/13288#issuecomment-367396818
      return {
        result: Object.assign({}, expression, { willBeBetaReduced: true }),
        matchExists: true
      }
    } else {
      return {
        result: expression,
        matchExists: false
      }
    }
  } else if (isPrioritizedCallExpression(expression)) {
    const argHelperResult = helper({
      expression: expression.arg,
      from,
      to
    })
    const funcHelperResult = helper({
      expression: expression.func,
      from,
      to
    })
    return {
      result: Object.assign({}, expression, {
        arg: argHelperResult.result,
        func: funcHelperResult.result
      }),
      matchExists: argHelperResult.matchExists || funcHelperResult.matchExists
    }
  } else if (isPrioritizedFunctionExpression(expression)) {
    const bodyHelperResult = helper({
      expression: expression.body,
      from,
      to
    })
    return {
      result: Object.assign({}, expression, {
        body: bodyHelperResult.result
      }),
      matchExists: bodyHelperResult.matchExists
    }
  } else {
    throw new Error()
  }
}

export default function betaReducePreviewBefore(
  expression: ImmediatelyExecutableCallExpression
): {
  result: ImmediatelyExecutableCallExpression
  matchExists: boolean
} {
  const newExpression = { ...expression }
  const { result, matchExists } = helper({
    expression: expression.func.body,
    from: expression.func.arg.name,
    to: expression.arg
  })
  newExpression.func.body = result
  return {
    result: newExpression,
    matchExists
  }
}
