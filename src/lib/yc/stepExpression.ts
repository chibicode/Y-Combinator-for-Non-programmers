import {
  ActiveChild,
  ActiveFunction,
  ActiveVariable,
  CallExpression,
  EmphasizePriorityOneVariable,
  ExecutableActiveCall,
  ExecutableActiveFunction,
  ExecutableDefaultCall,
  ExecutableShowFuncBoundCall,
  Expression,
  FunctionExpression,
  HighlightFuncBoundVariable,
  DefaultChild,
  DefaultFunction,
  DefaultVariable,
  NonExecutableActiveCall,
  NonExecutableDefaultCall,
  NonExecutableShowFuncBoundFuncCall,
  ShowFuncBoundArgFunction,
  ShowFuncBoundFuncChild,
  ShowFuncBoundFuncFunction,
  VariableExpression,
  VariableUiStates
} from 'src/types/yc/ExpressionTypes'
import { isCall, isFunction, isVariable } from './expressionTypeGuards'

function allDefaultToActive(x: DefaultVariable): ActiveVariable
function allDefaultToActive(x: DefaultFunction): ActiveFunction
function allDefaultToActive(
  x: NonExecutableDefaultCall
): NonExecutableActiveCall
function allDefaultToActive(x: DefaultChild): ActiveChild
function allDefaultToActive(x: DefaultChild): ActiveChild {
  if (isVariable(x)) {
    return { ...x, highlightType: 'active' }
  } else if (isFunction(x)) {
    return {
      ...x,
      arg: allDefaultToActive(x.arg),
      body: allDefaultToActive(x.body)
    }
  } else {
    return {
      ...x,
      arg: allDefaultToActive(x.arg),
      func: allDefaultToActive(x.func)
    }
  }
}

function defaultVariableToEmphasize(
  x: DefaultVariable
): EmphasizePriorityOneVariable {
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
  body: allDefaultToActive(x.body)
})

const defaultCallToActive = (
  e: ExecutableDefaultCall
): ExecutableActiveCall => {
  return {
    ...e,
    state: 'active',
    arg: isFunction<DefaultFunction>(e.arg)
      ? defaultToExecutableActiveFunction(e.arg)
      : defaultVariableToEmphasize(e.arg),
    func: defaultToExecutableActiveFunction(e.func)
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
