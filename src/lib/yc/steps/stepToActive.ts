import {
  isFunction,
  isVariable,
  isExecutableCallRegular,
  isShorthandFunction
} from 'src/lib/yc/expressionTypeGuards'
import {
  CallExpression,
  ExecutableCallRegular,
  ShorthandFunctionExpression,
  StepShorthandFunction,
  ExecutableStepCallShorthand,
  ExecutableStepCallRegular,
  Expression,
  ExecutableCall,
  FunctionExpression,
  NonExecutableStepCall,
  ExecutableCallShorthand,
  StepChild,
  StepFunction,
  StepVariable,
  VariableExpression,
  VariableWithEmphasizePriorityAndState
} from 'src/types/yc/ExpressionTypes'

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
  } else if (isShorthandFunction(e)) {
    return {
      ...e,
      highlightType: 'active',
      emphasizePriority: true,
      args: e.args.map(arg => toActive(arg))
    }
  } else {
    return {
      ...e,
      state: 'default',
      arg: toActive(e.arg),
      func: toActive(e.func)
    }
  }
}

const variableToEmphasize = (
  e: VariableExpression
): VariableWithEmphasizePriorityAndState<'active'> => {
  return {
    ...e,
    topLeftBadgeType: 'none',
    bottomRightBadgeType: 'none',
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
  } else if (isShorthandFunction(e.arg)) {
    return e
  } else {
    return {
      ...e,
      arg: emphasizeArgPriorityCallExpression(e.arg)
    }
  }
}

export default function stepToActive(
  e: ExecutableCallRegular
): ExecutableStepCallRegular<'active'>
export default function stepToActive(
  e: ExecutableCallShorthand
): ExecutableStepCallShorthand<'active'>
export default function stepToActive(
  e: ExecutableCall
): ExecutableStepCallRegular<'active'> | ExecutableStepCallShorthand<'active'> {
  const arg = isFunction(e.arg)
    ? toExecutableActiveFunction(e.arg)
    : isVariable(e.arg)
    ? variableToEmphasize(e.arg)
    : isShorthandFunction(e.arg)
    ? toActive(e.arg)
    : emphasizeArgPriorityCallExpression(toActive(e.arg))
  if (isExecutableCallRegular(e)) {
    return {
      ...e,
      state: 'active',
      arg,
      func: toExecutableActiveFunction(e.func)
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
