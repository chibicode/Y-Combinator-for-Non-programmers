import {
  isCallExpressionParams,
  isVariableExpressionParams,
  isHighlightedVariableExpressionParams,
  isFunctionExpressionParams
} from 'src/lib/yc/expressionParamGuards'
import {
  CallExpressionParams,
  ExpressionParams,
  FunctionExpressionParams,
  VariableExpressionParams,
  HighlightedVariableExpressionParams,
  ShorthandFunctionExpressionParams
} from 'src/types/yc/ExpressionParamTypes'
import {
  NonExecutableStepCall,
  StepChild,
  StepFunction,
  StepShorthandFunction,
  StepVariable
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
  bound: boolean,
  highlightType: 'default' | 'initialHighlighted'
): StepVariable => ({
  name,
  highlightType,
  topLeftBadgeType: 'none',
  bottomRightBadgeType: 'none',
  type: 'variable',
  argPriorityAgg: [],
  funcPriorityAgg: [],
  emphasizePriority: false,
  bound,
  alphaConvertCount: 0
})

export default function buildExpressionFromParams(
  expressionParams: VariableExpressionParams
): StepVariable
export default function buildExpressionFromParams(
  expressionParams: HighlightedVariableExpressionParams
): StepVariable
export default function buildExpressionFromParams(
  expressionParams: CallExpressionParams
): NonExecutableStepCall
export default function buildExpressionFromParams(
  expressionParams: FunctionExpressionParams
): StepFunction
export default function buildExpressionFromParams(
  expressionParams: ShorthandFunctionExpressionParams
): StepShorthandFunction
export default function buildExpressionFromParams(
  expressionParams: ExpressionParams
): StepChild
export default function buildExpressionFromParams(
  expressionParams: ExpressionParams
): StepChild {
  if (isVariableExpressionParams(expressionParams)) {
    return buildVariableExpression(expressionParams, true, 'default')
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
  } else if (isHighlightedVariableExpressionParams(expressionParams)) {
    return buildVariableExpression(
      expressionParams.name,
      true,
      'initialHighlighted'
    )
  } else if (isFunctionExpressionParams(expressionParams)) {
    if (isHighlightedVariableExpressionParams(expressionParams.arg)) {
      return {
        arg: buildVariableExpression(
          expressionParams.arg.name,
          false,
          'initialHighlighted'
        ),
        body: buildExpressionFromParams(expressionParams.body),
        type: 'function',
        meta: expressionParams.meta
      }
    } else {
      return {
        arg: buildVariableExpression(expressionParams.arg, false, 'default'),
        body: buildExpressionFromParams(expressionParams.body),
        type: 'function',
        meta: expressionParams.meta
      }
    }
  } else {
    return {
      type: 'shorthandFunction',
      name: expressionParams.shorthand,
      highlightType: 'default'
    }
  }
}
