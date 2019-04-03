import { isFunction, isVariable } from 'src/lib/yc/expressionTypeGuards'
import {
  CallExpression,
  ExecutableCall,
  ExecutableStepCall,
  Expression,
  FunctionExpression,
  NonExecutableStepCall,
  StepChild,
  StepFunction,
  StepVariable,
  VariableExpression,
  VariableWithState
} from 'src/types/yc/ExpressionTypes'

function toActive(e: VariableExpression): StepVariable<'active'>
function toActive(e: FunctionExpression): StepFunction<'active'>
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
      topBadgeType: 'none',
      bottomRightBadgeType: 'none'
    }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: toActive(e.arg),
      body: toActive(e.body)
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
): VariableWithState<'emphasizePriority'> => {
  return {
    ...e,
    topBadgeType: 'none',
    bottomRightBadgeType: 'none',
    highlightType: 'activeEmphasizePriority'
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
  } else {
    return {
      ...e,
      arg: emphasizeArgPriorityCallExpression(e.arg)
    }
  }
}

const stepToActive = (e: ExecutableCall): ExecutableStepCall<'active'> => ({
  ...e,
  state: 'active',
  arg: isFunction(e.arg)
    ? toExecutableActiveFunction(e.arg)
    : isVariable(e.arg)
    ? variableToEmphasize(e.arg)
    : emphasizeArgPriorityCallExpression(toActive(e.arg)),
  func: toExecutableActiveFunction(e.func)
})

export default stepToActive
