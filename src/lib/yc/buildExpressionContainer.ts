import { NeedsPrioritizeExpressionContainer } from 'src/types/yc/ExpressionContainerTypes'
import {
  CallExpressionParams,
  ExpressionParams,
  FunctionExpressionParams,
  isCallExpressionParams,
  isFunctionExpressionParams,
  isVariableExpressionParams,
  VariableExpressionParams
} from 'src/types/yc/ExpressionParamTypes'
import {
  DefaultStateCallExpression,
  DefaultStateExpression,
  DefaultStateFunctionExpression,
  DefaultStateVariableExpression
} from 'src/types/yc/ExpressionTypes'

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
): DefaultStateVariableExpression
function buildExpressionRecurser(
  expressionParams: CallExpressionParams
): DefaultStateCallExpression
function buildExpressionRecurser(
  expressionParams: FunctionExpressionParams
): DefaultStateFunctionExpression
function buildExpressionRecurser(
  expressionParams: ExpressionParams
): DefaultStateExpression
function buildExpressionRecurser(expressionParams: ExpressionParams) {
  if (isVariableExpressionParams(expressionParams)) {
    return {
      name: expressionParams,
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
      arg: buildExpressionRecurser(nestedCallExpressionParams[1]),
      func: buildExpressionRecurser(nestedCallExpressionParams[0]),
      state: 'default',
      type: 'call'
    }
  } else if (isFunctionExpressionParams(expressionParams)) {
    return {
      arg: buildExpressionRecurser(expressionParams.arg),
      body: buildExpressionRecurser(expressionParams.body),
      state: 'default',
      type: 'function'
    }
  }
}

export default function buildExpressionContainer(
  expressionParams: VariableExpressionParams
): NeedsPrioritizeExpressionContainer<DefaultStateVariableExpression>
export default function buildExpressionContainer(
  expressionParams: CallExpressionParams
): NeedsPrioritizeExpressionContainer<DefaultStateCallExpression>
export default function buildExpressionContainer(
  expressionParams: FunctionExpressionParams
): NeedsPrioritizeExpressionContainer<DefaultStateFunctionExpression>
export default function buildExpressionContainer(
  expressionParams: ExpressionParams
): NeedsPrioritizeExpressionContainer<DefaultStateExpression>
export default function buildExpressionContainer(
  expressionParams: ExpressionParams
) {
  return {
    expression: buildExpressionRecurser(expressionParams),
    containerState: 'needsPrioritize'
  }
}
