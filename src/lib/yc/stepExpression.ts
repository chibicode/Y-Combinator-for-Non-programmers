import {
  ActiveChild,
  ActiveFunction,
  ActiveVariable,
  CallExpression,
  DefaultCall,
  DefaultChild,
  DefaultExpression,
  DefaultFunction,
  DefaultVariable,
  EmphasizePriorityOneVariable,
  ExecutableActiveCall,
  ExecutableActiveFunction,
  ExecutableDefaultCall,
  ExecutableShowFuncBoundCall,
  Expression,
  FunctionExpression,
  HighlightFuncBoundVariable,
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

function toDefault(x: VariableExpression): DefaultVariable
function toDefault(x: FunctionExpression): DefaultFunction
function toDefault(x: CallExpression): DefaultCall
function toDefault(x: Expression): DefaultExpression
function toDefault(x: Expression): DefaultExpression {
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

const stepToActive = (e: ExecutableDefaultCall): ExecutableActiveCall => {
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

  return {
    ...e,
    state: 'active',
    arg: isFunction<DefaultFunction>(e.arg)
      ? defaultToExecutableActiveFunction(e.arg)
      : defaultVariableToEmphasize(e.arg),
    func: defaultToExecutableActiveFunction(e.func)
  }
}

// function boundActiveToHighlightFuncBound(
//   x: ActiveVariable
// ): HighlightFuncBoundVariable
// function boundActiveToHighlightFuncBound(
//   x: ActiveFunction
// ): ShowFuncBoundFuncFunction
// function boundActiveToHighlightFuncBound(
//   x: NonExecutableActiveCall
// ): NonExecutableShowFuncBoundFuncCall
// function boundActiveToHighlightFuncBound(x: ActiveChild): ShowFuncBoundFuncChild
// function boundActiveToHighlightFuncBound(
//   x: ActiveChild
// ): ShowFuncBoundFuncChild {
//   if (isVariable(x) && x.bound) {
//     return {
//       ...x,
//       bound: true,
//       highlightType: 'highlighted',
//       badgeType: 'funcBound'
//     }
//   } else if (isFunction(x)) {
//     return {
//       ...x,
//       body: boundActiveToHighlightFuncBound(x.body)
//     }
//   } else if (isCall(x) {
//     return {
//       ...x,
//       arg: boundActiveToHighlightFuncBound(x.arg),
//       func: boundActiveToHighlightFuncBound(x.func)
//     }
//   } else {
//     throw new Error()
//   }
// }

// // Highlight every bound variable
// const activeToShowFuncBoundFunc = (
//   e: ExecutableActiveFunction
// ): ShowFuncBoundFuncFunction => {}

// const activeToShowFuncBoundArg = (
//   e: ExecutableActiveFunction
// ): ShowFuncBoundArgFunction => {}

// const activeToShowFuncBound = (
//   e: ExecutableActiveCall
// ): ExecutableShowFuncBoundCall => {
//   return {
//     ...e,
//     state: 'showFuncBound',
//     arg: isVariable<EmphasizePriorityOneVariable>(e.arg)
//       ? {
//           ...e.arg,
//           highlightType: 'active'
//         }
//       : activeToShowFuncBoundArg(e.arg),
//     func: activeToShowFuncBoundFunc(e.func)
//   }
// }
