import {
  isFunction,
  isVariable,
  isCall,
  isConditional,
  isBinary,
  isExecutableCallShorthand
} from 'src/lib/expressionTypeGuards'
import {
  CallExpression,
  ExecutableStepCallRegular,
  Expression,
  ExecutableCallRegular,
  FunctionExpression,
  NonExecutableStepCall,
  StepChild,
  StepFunction,
  StepVariable,
  VariableExpression,
  VariableWithEmphasizePriorityAndState,
  ConditionalExpression,
  BinaryExpression,
  StepBinary,
  StepConditional,
  ExecutableCallShorthand,
  ExecutableStepCallShorthand,
  VariableShorthandFunc,
  StepVariableShorthandFunc
} from 'src/types/ExpressionTypes'

function toActive(e: VariableShorthandFunc): StepVariableShorthandFunc<'active'>
function toActive(e: VariableExpression): StepVariable<'active'>
function toActive(e: FunctionExpression): StepFunction<'active'>
function toActive(e: ConditionalExpression): StepConditional<'active'>
function toActive(e: BinaryExpression): StepBinary<'active'>
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
  } else if (isConditional(e)) {
    return {
      ...e,
      state: 'default',
      condition: toActive(e.condition),
      trueCase: toActive(e.trueCase),
      falseCase: toActive(e.falseCase)
    }
  } else if (isBinary(e)) {
    return {
      ...e,
      state: 'default',
      first: toActive(e.first),
      second: toActive(e.second)
    }
  } else {
    throw new Error()
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
  } else if (isCall<NonExecutableStepCall<'active'>>(e.arg)) {
    return {
      ...e,
      arg: emphasizeArgPriorityCallExpression(e.arg)
    }
  } else {
    return e
  }
}

export default function stepToActive(
  e: ExecutableCallRegular
): ExecutableStepCallRegular<'active'>
export default function stepToActive(
  e: ExecutableCallShorthand
): ExecutableStepCallShorthand<'active'>
export default function stepToActive(
  e: ExecutableCallRegular | ExecutableCallShorthand
): ExecutableStepCallRegular<'active'> | ExecutableStepCallShorthand<'active'> {
  if (isExecutableCallShorthand(e)) {
    return {
      ...e,
      state: 'active',
      arg: {
        ...e.arg,
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'none',
        highlightType: 'active',
        emphasizePriority: true
      },
      func: {
        ...e.func,
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'none',
        highlightType: 'active',
        emphasizePriority: true
      }
    }
  } else {
    const arg = isFunction(e.arg)
      ? toExecutableActiveFunction(e.arg)
      : isVariable(e.arg)
      ? variableToEmphasize(e.arg)
      : isCall(e.arg)
      ? emphasizeArgPriorityCallExpression(toActive(e.arg))
      : toActive(e.arg)
    return {
      ...e,
      state: 'active',
      arg,
      func: toExecutableActiveFunction(e.func)
    }
  }
}
