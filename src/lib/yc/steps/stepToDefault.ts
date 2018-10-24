import { isFunction, isVariable } from 'src/lib/yc/expressionTypeGuards'
import {
  CallExpression,
  DefaultCall,
  DefaultChild,
  DefaultFunction,
  DefaultVariable,
  ExecutableCall,
  ExecutableDefaultCall,
  Expression,
  FunctionExpression,
  VariableExpression
} from 'src/types/yc/ExpressionTypes'

function toDefault(x: VariableExpression): DefaultVariable
function toDefault(x: FunctionExpression): DefaultFunction
function toDefault(x: CallExpression): DefaultCall
// This is necessary - otherwise if you pass in VariableExpression | FunctionExpression
// it will think of it as Expression instead.
function toDefault(
  x: VariableExpression | FunctionExpression
): DefaultFunction | DefaultVariable
function toDefault(x: Expression): DefaultChild
function toDefault(x: Expression): DefaultChild {
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

const stepToDefault = (e: ExecutableCall): ExecutableDefaultCall => ({
  ...e,
  state: 'default',
  arg: toDefault(e.arg),
  func: toDefault(e.func)
})

export default stepToDefault
