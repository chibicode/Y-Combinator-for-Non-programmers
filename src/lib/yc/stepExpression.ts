import { isCall, isFunction, isVariable } from 'src/lib/yc/expressionTypeGuards'
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
  ExecutableCall,
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

function toShowFuncBoundFunc(x: DefaultVariable): HighlightFuncBoundVariable
function toShowFuncBoundFunc(x: DefaultFunction): ShowFuncBoundFuncFunction
function toShowFuncBoundFunc(
  x: NonExecutableDefaultCall
): NonExecutableShowFuncBoundFuncCall
function toShowFuncBoundFunc(x: DefaultChild): ShowFuncBoundFuncChild
function toShowFuncBoundFunc(x: DefaultChild): ShowFuncBoundFuncChild {
  if (isVariable(x)) {
    if (x.bound) {
      return {
        ...x,
        bound: true,
        highlightType: 'highlighted',
        badgeType: 'funcBound'
      }
    } else {
      throw new Error()
    }
  } else if (isFunction(x)) {
    return {
      ...x,
      arg: { ...x.arg, highlightType: 'active' },
      body: toShowFuncBoundFunc(x.body)
    }
  } else {
    return {
      ...x,
      arg: toShowFuncBoundFunc(x.arg),
      func: toShowFuncBoundFunc(x.func)
    }
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
