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

function toActive(x: VariableExpression): StepVariable<'active'>
function toActive(x: FunctionExpression): StepFunction<'active'>
function toActive(x: CallExpression): NonExecutableStepCall<'active'>
function toActive(
  x: VariableExpression | FunctionExpression
): StepVariable<'active'> | StepFunction<'active'>
function toActive(x: Expression): StepChild<'active'>
function toActive(x: Expression): StepChild<'active'> {
  if (isVariable(x)) {
    return { ...x, highlightType: 'active', badgeType: 'none' }
  } else if (isFunction(x)) {
    return {
      ...x,
      arg: toActive(x.arg),
      body: toActive(x.body)
    }
  } else {
    return {
      ...x,
      state: 'default',
      arg: toActive(x.arg),
      func: toActive(x.func)
    }
  }
}

const variableToEmphasize = (
  x: VariableExpression
): VariableWithState<'emphasizePriority'> => {
  return {
    ...x,
    badgeType: 'none',
    highlightType: 'activeEmphasizePriorityOne'
  }
}

const toExecutableActiveFunction = (
  x: FunctionExpression
): StepFunction<'active'> => ({
  ...x,
  arg: variableToEmphasize(x.arg),
  body: toActive(x.body)
})

const stepToActive = (e: ExecutableCall): ExecutableStepCall<'active'> => ({
  ...e,
  state: 'active',
  arg: isFunction(e.arg)
    ? toExecutableActiveFunction(e.arg)
    : variableToEmphasize(e.arg),
  func: toExecutableActiveFunction(e.func)
})

export default stepToActive
