import {
  isCallExpressionParams,
  isVariableExpressionParams,
  isHighlightedVariableExpressionParams,
  isFunctionExpressionParams,
  isVariableShorthandNumberParams,
  isConditionalParams,
  isVariableShorthandFuncParams,
  isQuestionShorthandNumberAfterConvertParams,
  isRepeatExpressionParams
} from 'scripts/lib/expressionParamGuards'
import {
  CallExpressionParams,
  ExpressionParams,
  FunctionExpressionParams,
  VariableExpressionParams,
  HighlightedVariableExpressionParams,
  VariableShorthandNumberParams,
  ConditionalExpressionParams,
  RepeatExpressionParams,
  QuestionShorthandNumberAfterConvertParams,
  VariableShorthandFuncParams,
  BinaryExpressionParams
} from 'src/types/ExpressionParamTypes'
import {
  NonExecutableStepCall,
  StepChild,
  StepFunction,
  StepVariable,
  StepVariableShorthandNumber,
  StepConditional,
  StepBinary,
  RepeatExpression
} from 'src/types/ExpressionTypes'
import { VariableNames } from 'src/types/VariableNames'

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
  bound
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
  expressionParams: VariableShorthandNumberParams
): StepVariableShorthandNumber
export default function buildExpressionFromParams(
  expressionParams: ConditionalExpressionParams
): StepConditional
export default function buildExpressionFromParams(
  expressionParams: BinaryExpressionParams
): StepBinary
export default function buildExpressionFromParams(
  expressionParams: RepeatExpressionParams
): RepeatExpression
export default function buildExpressionFromParams(
  expressionParams: QuestionShorthandNumberAfterConvertParams
): StepVariable
export default function buildExpressionFromParams(
  expressionParams: VariableShorthandFuncParams
): StepVariable
export default function buildExpressionFromParams(
  expressionParams: ExpressionParams
): StepChild
export default function buildExpressionFromParams(
  expressionParams: ExpressionParams
): StepChild {
  if (isVariableExpressionParams(expressionParams)) {
    return buildVariableExpression(expressionParams, true, 'default')
  } else if (isCallExpressionParams(expressionParams)) {
    const nestedCallExpressionParams: CallExpressionParams =
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
        type: 'function'
      }
    } else {
      return {
        arg: buildVariableExpression(expressionParams.arg, false, 'default'),
        body: buildExpressionFromParams(expressionParams.body),
        type: 'function'
      }
    }
  } else if (isVariableShorthandNumberParams(expressionParams)) {
    return {
      ...buildVariableExpression(
        'shorthandNumber',
        true,
        expressionParams.initialHighlight ? 'initialHighlighted' : 'default'
      ),
      shorthandNumber: expressionParams.shorthandNumber,
      shorthandNumberAfterConvert: expressionParams.shorthandNumberAfterConvert
    }
  } else if (isConditionalParams(expressionParams)) {
    return {
      type: 'conditional',
      state: 'default',
      checkType: expressionParams.checkType,
      condition: buildExpressionFromParams(expressionParams.condition),
      trueCase: buildExpressionFromParams(expressionParams.trueCase),
      falseCase: buildExpressionFromParams(expressionParams.falseCase),
      priority: 0
    }
  } else if (isVariableShorthandFuncParams(expressionParams)) {
    return {
      ...buildVariableExpression(
        'shorthandFunc',
        true,
        expressionParams.initialHighlight ? 'initialHighlighted' : 'default'
      ),
      shorthandFunc: expressionParams.shorthandFunc
    }
  } else if (isQuestionShorthandNumberAfterConvertParams(expressionParams)) {
    return {
      ...buildVariableExpression(
        'blankNumber',
        true,
        expressionParams.initialHighlight ? 'initialHighlighted' : 'default'
      ),
      shorthandNumberAfterConvert: expressionParams.shorthandNumberAfterConvert
    }
  } else if (isRepeatExpressionParams(expressionParams)) {
    return {
      type: 'repeat',
      count: expressionParams.count,
      countVariable: expressionParams.countVariable,
      child: buildExpressionFromParams(expressionParams.child)
    }
  } else {
    return {
      type: 'binary',
      binaryType: expressionParams.binaryType,
      first: buildExpressionFromParams(expressionParams.first),
      second: buildExpressionFromParams(expressionParams.second),
      state: 'default',
      priority: 0
    }
  }
}
