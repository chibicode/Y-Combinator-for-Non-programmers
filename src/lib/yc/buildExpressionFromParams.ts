import {
  isCallExpressionParams,
  isVariableExpressionParams
} from 'src/lib/yc/expressionParamGuards'
import {
  CallExpressionParams,
  ExpressionParams,
  FunctionExpressionParams,
  VariableExpressionParams
} from 'src/types/yc/ExpressionParamTypes'
import {
  DefaultCallExpression,
  DefaultExpression,
  DefaultFunctionExpression,
  DefaultVariableExpression
} from 'src/types/yc/ExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'

function nestCallExpressions(
  expression: CallExpressionParams
): CallExpressionParams
function nestCallExpressions<T extends ExpressionParams>(expression: T): T
function nestCallExpressions(expression: any) {
  if (isCallExpressionParams(expression)) {
    if (expression.length === 2) {
      return [
        nestCallExpressions(expression[0]),
        nestCallExpressions(expression[1])
      ]
    } else {
      return [
        nestCallExpressions(expression.slice(0, expression.length - 1)),
        nestCallExpressions(expression[expression.length - 1])
      ]
    }
  } else {
    return expression
  }
}

const buildVariableExpression = (
  name: VariableNames,
  bound: boolean
): DefaultVariableExpression => ({
  name,
  highlightType: 'default',
  badgeType: 'none',
  type: 'variable',
  argPriorityAgg: [],
  funcPriorityAgg: [],
  bound
})

export default function buildExpressionFromParams(
  expressionParams: VariableExpressionParams
): DefaultVariableExpression
export default function buildExpressionFromParams(
  expressionParams: CallExpressionParams
): DefaultCallExpression
export default function buildExpressionFromParams(
  expressionParams: FunctionExpressionParams
): DefaultFunctionExpression
export default function buildExpressionFromParams(
  expressionParams: ExpressionParams
): DefaultExpression
export default function buildExpressionFromParams(
  expressionParams: ExpressionParams
): DefaultExpression {
  if (isVariableExpressionParams(expressionParams)) {
    return buildVariableExpression(expressionParams, true)
  } else if (isCallExpressionParams(expressionParams)) {
    let nestedCallExpressionParams: CallExpressionParams
    nestedCallExpressionParams =
      expressionParams.length > 2
        ? nestCallExpressions(expressionParams)
        : expressionParams

    return {
      arg: buildExpressionFromParams(nestedCallExpressionParams[1]),
      func: buildExpressionFromParams(nestedCallExpressionParams[0]),
      state: 'default',
      type: 'call',
      priority: 0
    }
  } else {
    return {
      arg: buildVariableExpression(expressionParams.arg, false),
      body: buildExpressionFromParams(expressionParams.body),
      type: 'function'
    }
  }
}
