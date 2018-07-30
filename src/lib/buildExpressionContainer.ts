import { UnprioritizedExpressionContainer } from 'src/types/ExpressionContainerTypes'
import {
  CallExpressionParams,
  ExpressionParams,
  FunctionExpressionParams,
  isCallExpressionParams,
  isFunctionExpressionParams,
  isVariableExpressionParams,
  VariableExpressionParams
} from 'src/types/ExpressionParams'
import {
  CallExpression,
  Expression,
  FunctionExpression,
  VariableExpression
} from 'src/types/ExpressionTypes'

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

function buildExpressionRecurser(
  expressionParams: VariableExpressionParams
): VariableExpression
function buildExpressionRecurser(
  expressionParams: CallExpressionParams
): CallExpression
function buildExpressionRecurser(
  expressionParams: FunctionExpressionParams
): FunctionExpression
function buildExpressionRecurser(expressionParams: ExpressionParams): Expression
function buildExpressionRecurser(expressionParams: ExpressionParams) {
  if (isVariableExpressionParams(expressionParams)) {
    return {
      value: expressionParams,
      state: 'default',
      type: 'variable'
    }
  } else if (isCallExpressionParams(expressionParams)) {
    let nestedCallExpressionParams: CallExpressionParams
    nestedCallExpressionParams =
      expressionParams.length > 2
        ? nestCallExpressions(expressionParams)
        : expressionParams

    return {
      value: {
        arg: buildExpressionRecurser(nestedCallExpressionParams[1]),
        func: buildExpressionRecurser(nestedCallExpressionParams[0])
      },
      state: 'default',
      type: 'call'
    }
  } else if (isFunctionExpressionParams(expressionParams)) {
    return {
      value: {
        arg: buildExpressionRecurser(expressionParams.arg),
        body: buildExpressionRecurser(expressionParams.body)
      },
      state: 'default',
      type: 'function'
    }
  }
}

export default function buildExpressionContainer(
  expressionParams: VariableExpressionParams
): UnprioritizedExpressionContainer<VariableExpression>
export default function buildExpressionContainer(
  expressionParams: CallExpressionParams
): UnprioritizedExpressionContainer<CallExpression>
export default function buildExpressionContainer(
  expressionParams: FunctionExpressionParams
): UnprioritizedExpressionContainer<FunctionExpression>
export default function buildExpressionContainer(
  expressionParams: ExpressionParams
) {
  return {
    expression: buildExpressionRecurser(expressionParams),
    prioritized: false,
    needsReset: false
  }
}
