import { isFunction, isVariable } from 'src/lib/yc/expressionTypeGuards'
import {
  ActiveChild,
  ActiveFunction,
  ActiveVariable,
  DefaultChild,
  DefaultFunction,
  DefaultVariable,
  EmphasizePriorityOneVariable,
  ExecutableActiveCall,
  ExecutableActiveFunction,
  ExecutableDefaultCall,
  NonExecutableActiveCall,
  NonExecutableDefaultCall
} from 'src/types/yc/ExpressionTypes'

function toActive(x: DefaultVariable): ActiveVariable
function toActive(x: DefaultFunction): ActiveFunction
function toActive(x: NonExecutableDefaultCall): NonExecutableActiveCall
function toActive(x: DefaultChild): ActiveChild
function toActive(x: DefaultChild): ActiveChild {
  if (isVariable(x)) {
    return { ...x, highlightType: 'active' }
  } else if (isFunction(x)) {
    return {
      ...x,
      arg: toActive(x.arg),
      body: toActive(x.body)
    }
  } else {
    return {
      ...x,
      arg: toActive(x.arg),
      func: toActive(x.func)
    }
  }
}

const defaultVariableToEmphasize = (
  x: DefaultVariable
): EmphasizePriorityOneVariable => {
  return {
    ...x,
    highlightType: 'activeEmphasizePriorityOne'
  }
}

const defaultToExecutableActiveFunction = (
  x: DefaultFunction
): ExecutableActiveFunction => ({
  ...x,
  arg: defaultVariableToEmphasize(x.arg),
  body: toActive(x.body)
})

const stepToActive = (e: ExecutableDefaultCall): ExecutableActiveCall => ({
  ...e,
  state: 'active',
  arg: isFunction<DefaultFunction>(e.arg)
    ? defaultToExecutableActiveFunction(e.arg)
    : defaultVariableToEmphasize(e.arg),
  func: defaultToExecutableActiveFunction(e.func)
})

export default stepToActive
