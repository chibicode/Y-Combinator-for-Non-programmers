import {
  ActiveChild,
  ActiveFunction,
  ActiveVariable,
  CallExpression,
  EmphasizePriorityOneVariable,
  ExecutableActiveCall,
  ExecutableActiveFunction,
  ExecutableInactiveCall,
  ExecutableShowFuncBoundCall,
  Expression,
  FunctionExpression,
  HighlightFuncBoundVariable,
  InactiveChild,
  InactiveFunction,
  InactiveVariable,
  NonExecutableActiveCall,
  NonExecutableInactiveCall,
  NonExecutableShowFuncBoundFuncCall,
  ShowFuncBoundArgFunction,
  ShowFuncBoundFuncChild,
  ShowFuncBoundFuncFunction,
  VariableExpression,
  VariableUiStates
} from 'src/types/yc/ExpressionTypes'
import { isCall, isFunction, isVariable } from './expressionTypeGuards'

function allInactiveToActive(x: InactiveVariable): ActiveVariable
function allInactiveToActive(x: InactiveFunction): ActiveFunction
function allInactiveToActive(
  x: NonExecutableInactiveCall
): NonExecutableActiveCall
function allInactiveToActive(x: InactiveChild): ActiveChild
function allInactiveToActive(x: InactiveChild): ActiveChild {
  if (isVariable(x)) {
    return { ...x, highlightType: 'active' }
  } else if (isFunction(x)) {
    return {
      ...x,
      arg: allInactiveToActive(x.arg),
      body: allInactiveToActive(x.body)
    }
  } else {
    return {
      ...x,
      arg: allInactiveToActive(x.arg),
      func: allInactiveToActive(x.func)
    }
  }
}

function inactiveVariableToEmphasize(
  x: InactiveVariable
): EmphasizePriorityOneVariable {
  return {
    ...x,
    highlightType: 'activeEmphasizePriorityOne'
  }
}

const inactiveToExecutableActiveFunction = (
  x: InactiveFunction
): ExecutableActiveFunction => ({
  ...x,
  arg: inactiveVariableToEmphasize(x.arg),
  body: allInactiveToActive(x.body)
})

const inactiveCallToActive = (
  e: ExecutableInactiveCall
): ExecutableActiveCall => {
  return {
    ...e,
    state: 'active',
    arg: isFunction<InactiveFunction>(e.arg)
      ? inactiveToExecutableActiveFunction(e.arg)
      : inactiveVariableToEmphasize(e.arg),
    func: inactiveToExecutableActiveFunction(e.func)
  }
}

function boundActiveToHighlightFuncBound(
  x: ActiveVariable
): HighlightFuncBoundVariable
function boundActiveToHighlightFuncBound(
  x: ActiveFunction
): ShowFuncBoundFuncFunction
function boundActiveToHighlightFuncBound(
  x: NonExecutableActiveCall
): NonExecutableShowFuncBoundFuncCall
function boundActiveToHighlightFuncBound(x: ActiveChild): ShowFuncBoundFuncChild
function boundActiveToHighlightFuncBound(
  x: ActiveChild
): ShowFuncBoundFuncChild {
  if (isVariable(x) && x.bound) {
    return {
      ...x,
      bound: true,
      highlightType: 'highlighted',
      badgeType: 'funcBound'
    }
  } else if (isFunction(x)) {
    return {
      ...x,
      body: boundActiveToHighlightFuncBound(x.body)
    }
  } else if (isCall(x) {
    return {
      ...x,
      arg: boundActiveToHighlightFuncBound(x.arg),
      func: boundActiveToHighlightFuncBound(x.func)
    }
  } else {
    throw new Error()
  }
}

// Highlight every bound variable
const activeToShowFuncBoundFunc = (
  e: ExecutableActiveFunction
): ShowFuncBoundFuncFunction => {}


const activeToShowFuncBoundArg = (
  e: ExecutableActiveFunction
): ShowFuncBoundArgFunction => {}

const activeToShowFuncBound = (
  e: ExecutableActiveCall
): ExecutableShowFuncBoundCall => {
  return {
    ...e,
    state: 'showFuncBound',
    arg: isVariable<EmphasizePriorityOneVariable>(e.arg)
      ? {
          ...e.arg,
          highlightType: 'active'
        }
      : activeToShowFuncBoundArg(e.arg),
    func: activeToShowFuncBoundFunc(e.func)
  }
}
