import { isFunction, isVariable } from 'src/lib/yc/expressionTypeGuards'
import {
  CallExpression,
  ExecutableCall,
  Expression,
  FunctionExpression,
  NonExecutableStepCall,
  StepChild,
  StepFunction,
  StepVariable,
  VariableExpression
} from 'src/types/yc/ExpressionTypes'

function toDefault(e: VariableExpression): StepVariable<'default'>
function toDefault(e: FunctionExpression): StepFunction<'default'>
function toDefault(e: CallExpression): NonExecutableStepCall<'default'>
// This is necessary - otherwise if you pass in VariableExpression | FunctionExpression
// it will think of it as Expression instead.
function toDefault(
  e: VariableExpression | FunctionExpression
): StepVariable<'default'> | StepFunction<'default'>
function toDefault(e: Expression): StepChild<'default'>
function toDefault(e: Expression): StepChild<'default'> {
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

const removeCrossed = (e: ExecutableCall): StepChild<'default'> =>
  toDefault(e.func.body)

export default removeCrossed
