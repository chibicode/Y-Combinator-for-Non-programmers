import {
  isFunction,
  isVariable,
  isCall,
  isExecutableCallRegular,
  isExecutableCallShorthand
} from 'src/lib/yc/expressionTypeGuards'
import {
  VariableWithState,
  ShorthandFunctionExpression,
  ShorthandFunctionExpressionWithHighlightType,
  CallExpression,
  ExecutableStepCallShorthandBinary,
  ExecutableStepCallRegular,
  ExecutableCallShorthand,
  ExecutableStepCallShorthand,
  Expression,
  ExecutableCallRegular,
  FunctionExpression,
  NonExecutableStepCall,
  VariableShorthandBinary,
  StepVariableShorthandBinary,
  ExecutableCallShorthandBinary,
  StepChild,
  StepFunction,
  StepVariable,
  VariableExpression,
  StepShorthandFunction
} from 'src/types/yc/ExpressionTypes'

function toActive(
  e: VariableShorthandBinary
): StepVariableShorthandBinary<'active'>
function toActive(e: VariableExpression): StepVariable<'active'>
function toActive(e: FunctionExpression): StepFunction<'active'>
function toActive(
  e: ShorthandFunctionExpression
): StepShorthandFunction<'active'>
function toActive(e: CallExpression): NonExecutableStepCall<'active'>
function toActive(
  e: VariableExpression | FunctionExpression
): StepVariable<'active'> | StepFunction<'active'>
function toActive(e: Expression): StepChild<'active'>
function toActive(e: Expression): StepChild<'active'> {
  if (isVariable(e)) {
    return {
      ...e,
      highlightType: 'active',
      topLeftBadgeType: 'none',
      bottomRightBadgeType: 'none'
    }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: toActive(e.arg),
      body: toActive(e.body)
    }
  } else if (isCall(e)) {
    return {
      ...e,
      state: 'default',
      arg: toActive(e.arg),
      func: toActive(e.func)
    }
  } else {
    return {
      ...e,
      highlightType: 'active'
    }
  }
}

const variableToEmphasize = (
  e: VariableExpression
): VariableWithState<'active'> => {
  return {
    ...e,
    topLeftBadgeType: 'none',
    bottomRightBadgeType: 'none',
    highlightType: 'active',
    emphasizePriority: true
  }
}

const shorthandToEmphasize = (
  e: ShorthandFunctionExpression
): ShorthandFunctionExpressionWithHighlightType<'active'> => {
  return {
    ...e,
    highlightType: 'active',
    emphasizePriority: true
  }
}

const toExecutableActiveFunction = (
  e: FunctionExpression
): StepFunction<'active'> => ({
  ...e,
  arg: variableToEmphasize(e.arg),
  body: toActive(e.body)
})

const emphasizeArgPriorityCallExpression = (
  e: NonExecutableStepCall<'active'>
): NonExecutableStepCall<'active'> => {
  if (isVariable(e.arg)) {
    return {
      ...e,
      arg: variableToEmphasize(e.arg)
    }
  } else if (isFunction(e.arg)) {
    return {
      ...e,
      arg: toExecutableActiveFunction(e.arg)
    }
  } else if (isCall<NonExecutableStepCall<'active'>>(e.arg)) {
    return {
      ...e,
      arg: emphasizeArgPriorityCallExpression(e.arg)
    }
  } else {
    return {
      ...e,
      arg: shorthandToEmphasize(e.arg)
    }
  }
}

export default function stepToActive(
  e: ExecutableCallRegular
): ExecutableStepCallRegular<'active'>
export default function stepToActive(
  e: ExecutableCallShorthandBinary
): ExecutableStepCallShorthandBinary<'active'>
export default function stepToActive(
  e: ExecutableCallShorthand
): ExecutableStepCallShorthand<'active'>
export default function stepToActive(
  e:
    | ExecutableCallRegular
    | ExecutableCallShorthandBinary
    | ExecutableCallShorthand
):
  | ExecutableStepCallRegular<'active'>
  | ExecutableStepCallShorthandBinary<'active'>
  | ExecutableStepCallShorthand<'active'> {
  const arg = isFunction(e.arg)
    ? toExecutableActiveFunction(e.arg)
    : isVariable(e.arg)
    ? variableToEmphasize(e.arg)
    : isCall(e.arg)
    ? emphasizeArgPriorityCallExpression(toActive(e.arg))
    : shorthandToEmphasize(e.arg)
  if (isExecutableCallRegular(e)) {
    return {
      ...e,
      state: 'active',
      arg,
      func: toExecutableActiveFunction(e.func)
    }
  } else if (isExecutableCallShorthand(e)) {
    return {
      ...e,
      state: 'active',
      arg,
      func: shorthandToEmphasize(e.func)
    }
  } else {
    return {
      ...e,
      state: 'active',
      arg,
      func: toActive(e.func)
    }
  }
}
