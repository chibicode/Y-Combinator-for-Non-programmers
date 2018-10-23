import {
  ActiveChild,
  ActiveFunction,
  ActiveVariable,
  ExecutableActiveCall,
  ExecutableActiveFunction,
  ExecutableActiveVariable,
  ExecutableInactiveCall,
  InactiveCall,
  InactiveChild,
  InactiveFunction,
  InactiveVariable,
  NonExecutableActiveCall,
  NonExecutableInactiveCall
} from 'src/types/yc/ExpressionTypes'
import { isFunction, isVariable } from './expressionTypeGuards'

function allInactiveToActiveVariable(x: InactiveVariable): ActiveVariable
function allInactiveToActiveVariable(x: InactiveFunction): ActiveFunction
function allInactiveToActiveVariable(
  x: NonExecutableInactiveCall
): NonExecutableActiveCall
function allInactiveToActiveVariable(x: InactiveChild): ActiveChild
function allInactiveToActiveVariable(x: InactiveChild) {
  if (isVariable(x)) {
    return {
      ...x,
      highlightType: 'active'
    }
  } else if (isFunction(x)) {
    return {
      ...x,
      arg: allInactiveToActiveVariable(x.arg),
      body: allInactiveToActiveVariable(x.body)
    }
  } else {
    return {
      ...x,
      arg: allInactiveToActiveVariable(x.arg),
      func: allInactiveToActiveVariable(x.func)
    }
  }
}

const inactiveToExecutableActiveVariable = (
  x: InactiveVariable
): ExecutableActiveVariable => ({
  ...x,
  highlightType: 'activeEmphasizePriorityOne'
})

const inactiveToExecutableActiveFunction = (
  x: InactiveFunction
): ExecutableActiveFunction => ({
  ...x,
  arg: inactiveToExecutableActiveVariable(x.arg),
  body: allInactiveToActiveVariable(x.body)
})

const inactiveToActive = (e: ExecutableInactiveCall): ExecutableActiveCall => {
  return {
    ...e,
    state: 'active',
    arg: isFunction<InactiveFunction>(e.arg)
      ? inactiveToExecutableActiveFunction(e.arg)
      : inactiveToExecutableActiveVariable(e.arg),
    func: inactiveToExecutableActiveFunction(e.func)
  }
}
