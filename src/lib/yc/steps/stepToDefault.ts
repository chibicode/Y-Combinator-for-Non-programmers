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
  VariableExpression
} from 'src/types/yc/ExpressionTypes'

export function toDefault(e: VariableExpression): StepVariable<'default'>
export function toDefault(e: FunctionExpression): StepFunction<'default'>
export function toDefault(e: CallExpression): NonExecutableStepCall<'default'>
// This is necessary - otherwise if you pass in VariableExpression | FunctionExpression
// it will think of it as Expression instead.
export function toDefault(
  e: VariableExpression | FunctionExpression
): StepVariable<'default'> | StepFunction<'default'>
export function toDefault(e: Expression): StepChild<'default'>
export function toDefault(e: Expression): StepChild<'default'> {
  if (isVariable(e)) {
    return { ...e, highlightType: 'default', badgeType: 'none' }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: toDefault(e.arg),
      body: toDefault(e.body)
    }
  } else {
    return {
      ...e,
      state: 'default',
      arg: toDefault(e.arg),
      func: toDefault(e.func)
    }
  }
}

const stepToDefault = (e: ExecutableCall): ExecutableStepCall<'default'> => ({
  ...e,
  state: 'default',
  arg: toDefault(e.arg),
  func: toDefault(e.func)
})

export default stepToDefault
