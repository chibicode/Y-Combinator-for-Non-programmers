import {
  ActiveChild,
  ActiveFunction,
  ExecutableActiveCall,
  ExecutableActiveFunction,
  ExecutableInactiveCall,
  InactiveChild,
  InactiveFunction,
  NonExecutableActiveCall,
  NonExecutableInactiveCall,
  ExecutableShowFuncBoundCall,
  ShowFuncBoundArgFunction,
  VariableExpression,
  FunctionExpression,
  CallExpression,
  Expression,
  VariableUiStates,
  InactiveVariable,
  ActiveVariable,
  EmphasizePriorityOneVariable,
  HighlightFuncBoundVariable,
  ShowFuncBoundFuncChild,
  Bound,
  Unbound
} from 'src/types/yc/ExpressionTypes'
import { isBound, isFunction, isVariable } from './expressionTypeGuards'

function allInactiveToActive(x: Bound<InactiveVariable>): Bound<ActiveVariable>
function allInactiveToActive(
  x: Unbound<InactiveVariable>
): Unbound<ActiveVariable>
function allInactiveToActive(x: InactiveFunction): ActiveFunction
function allInactiveToActive(
  x: NonExecutableInactiveCall
): NonExecutableActiveCall
function allInactiveToActive(x: InactiveChild): ActiveChild
function allInactiveToActive(x: InactiveChild): ActiveChild {
  if (isVariable(x)) {
    if (isBound(x)) {
      return { ...x, highlightType: 'active', bound: true }
    } else {
      return { ...x, highlightType: 'active', bound: false }
    }
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
  x: Bound<InactiveVariable>
): Bound<EmphasizePriorityOneVariable>
function inactiveVariableToEmphasize(
  x: Unbound<InactiveVariable>
): Unbound<EmphasizePriorityOneVariable>
function inactiveVariableToEmphasize(
  x: InactiveVariable
): EmphasizePriorityOneVariable {
  if (isBound(x)) {
    return {
      ...x,
      highlightType: 'activeEmphasizePriorityOne',
      bound: true
    }
  } else {
    return {
      ...x,
      highlightType: 'activeEmphasizePriorityOne',
      bound: false
    }
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

// function allActiveToHighlightFuncBound(
//   x: ActiveVariable
// ): HighlightFuncBoundVariable
// // function allActiveToHighlightFuncBound(x: InactiveFunction): ActiveFunction
// // function allActiveToHighlightFuncBound(
// //   x: NonExecutableInactiveCall
// // ): NonExecutableActiveCall
// // function allActiveToHighlightFuncBound(x: InactiveChild): ActiveChild
// function allActiveToHighlightFuncBound(x: ActiveChild): ShowFuncBoundFuncChild {
//   if (isVariable(x)) {
//     return {
//       ...x,
//       highlightType: 'highlighted',
//       badgeType: 'funcBound'
//     }
//   } else if (isFunction(x)) {
//     return {
//       ...x,
//       arg: allActiveToHighlightFuncBound(x.arg),
//       body: allActiveToHighlightFuncBound(x.body)
//     }
//   } else {
//     return {
//       ...x,
//       arg: allActiveToHighlightFuncBound(x.arg),
//       func: allActiveToHighlightFuncBound(x.func)
//     }
//   }
// }

// const activeToShowFuncBoundArg = (e: ExecutableActiveFunction): ShowFuncBoundArgFunction => {

// }

// const activeToShowFuncBound = (e: ExecutableActiveCall): ExecutableShowFuncBoundCall => {
//   e.
// }
