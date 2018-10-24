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
  ShowFuncBoundArgFunction,
  ShowFuncBoundFuncChild,
  VariableExpression,
  VariableUiStates
} from 'src/types/yc/ExpressionTypes'
import { isFunction, isVariable } from './expressionTypeGuards'

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
