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
  InactiveCallExpression,
  InactiveExpression,
  InactiveFunctionExpression,
  InactiveVariableExpression
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
): InactiveVariableExpression => ({
  name,
  highlightType: 'inactive',
  badgeType: 'none',
  type: 'variable',
  argPriorityAgg: [],
  funcPriorityAgg: [],
  bound
})

export default function buildExpressionFromParams(
  expressionParams: VariableExpressionParams
): InactiveVariableExpression
export default function buildExpressionFromParams(
  expressionParams: CallExpressionParams
): InactiveCallExpression
export default function buildExpressionFromParams(
  expressionParams: FunctionExpressionParams
): InactiveFunctionExpression
export default function buildExpressionFromParams(
  expressionParams: ExpressionParams
): InactiveExpression
export default function buildExpressionFromParams(
  expressionParams: ExpressionParams
): InactiveExpression {
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
      state: 'inactive',
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
