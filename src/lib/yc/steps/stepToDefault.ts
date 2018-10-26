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

function toDefault(x: VariableExpression): StepVariable<'default'>
function toDefault(x: FunctionExpression): StepFunction<'default'>
function toDefault(x: CallExpression): NonExecutableStepCall<'default'>
// This is necessary - otherwise if you pass in VariableExpression | FunctionExpression
// it will think of it as Expression instead.
function toDefault(
  x: VariableExpression | FunctionExpression
): StepVariable<'default'> | StepFunction<'default'>
function toDefault(x: Expression): StepChild<'default'>
function toDefault(x: Expression): StepChild<'default'> {
  if (isVariable(x)) {
    return { ...x, highlightType: 'default', badgeType: 'none' }
  } else if (isFunction(x)) {
    return {
      ...x,
      arg: toDefault(x.arg),
      body: toDefault(x.body)
    }
  } else {
    return {
      ...x,
      state: 'default',
      arg: toDefault(x.arg),
      func: toDefault(x.func)
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
