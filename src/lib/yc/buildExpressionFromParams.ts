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
  DefaultStateCallExpression,
  DefaultStateExpression,
  DefaultStateFunctionExpression,
  DefaultStateVariableExpression
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

const buildDefaultVariableExpression = (
  name: VariableNames,
  bound: boolean
): DefaultStateVariableExpression => ({
  name,
  state: 'default',
  type: 'variable',
  bound
})

export default function buildExpressionFromParams(
  expressionParams: VariableExpressionParams
): DefaultStateVariableExpression
export default function buildExpressionFromParams(
  expressionParams: CallExpressionParams
): DefaultStateCallExpression
export default function buildExpressionFromParams(
  expressionParams: FunctionExpressionParams
): DefaultStateFunctionExpression
export default function buildExpressionFromParams(
  expressionParams: ExpressionParams
): DefaultStateExpression
export default function buildExpressionFromParams(
  expressionParams: ExpressionParams
): DefaultStateExpression {
  if (isVariableExpressionParams(expressionParams)) {
    return {
      name: expressionParams,
      state: 'default',
      type: 'variable',
      bound: true
    }
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
      type: 'call'
    }
  } else {
    return {
      arg: buildDefaultVariableExpression(expressionParams.arg, false),
      body: buildExpressionFromParams(expressionParams.body),
      state: 'default',
      type: 'function'
    }
  }
}
