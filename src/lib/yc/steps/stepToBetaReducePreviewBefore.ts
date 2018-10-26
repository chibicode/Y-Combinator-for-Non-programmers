import { isFunction, isVariable } from 'src/lib/yc/expressionTypeGuards'
import {
  CallExpression,
  ExecutableCall,
  ExecutableStepCall,
  Expression,
  FunctionExpression,
  NonExecutableStepCall,
  StepChild,
  StepFunction,
  StepVariable,
  VariableExpression,
  VariableWithState
} from 'src/types/yc/ExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'

export function toBetaReducePreviewBefore(
  e: VariableExpression,
  from: VariableNames,
  to: Expression,
  funcSide: boolean
): { result: StepVariable<'betaReducePreviewBefore'>; matchExists: boolean }
export function toBetaReducePreviewBefore(
  e: FunctionExpression,
  from: VariableNames,
  to: Expression,
  funcSide: boolean
): { result: StepFunction<'betaReducePreviewBefore'>; matchExists: boolean }
export function toBetaReducePreviewBefore(
  e: CallExpression,
  from: VariableNames,
  to: Expression,
  funcSide: boolean
): {
  result: NonExecutableStepCall<'betaReducePreviewBefore'>
  matchExists: boolean
}
export function toBetaReducePreviewBefore(
  e: VariableExpression | FunctionExpression,
  from: VariableNames,
  to: Expression,
  funcSide: boolean
):
  | { result: StepVariable<'betaReducePreviewBefore'>; matchExists: boolean }
  | { result: StepFunction<'betaReducePreviewBefore'>; matchExists: boolean }
export function toBetaReducePreviewBefore(
  e: Expression,
  from: VariableNames,
  to: Expression,
  funcSide: boolean
): { result: StepChild<'betaReducePreviewBefore'>; matchExists: boolean }
export function toBetaReducePreviewBefore(
  e: Expression,
  from: VariableNames,
  to: Expression,
  funcSide: boolean
): { result: StepChild<'betaReducePreviewBefore'>; matchExists: boolean } {
  if (isVariable(e)) {
    if (funcSide && e.bound) {
      if (e.name === from) {
        return {
          result: {
            ...e,
            highlightType: 'match',
            badgeType: 'funcBound'
          },
          matchExists: true
        }
      } else {
        return {
          result: {
            ...e,
            highlightType: 'active',
            badgeType: 'funcBound'
          },
          matchExists: false
        }
      }
    } else if (funcSide && !e.bound) {
      return {
        result: {
          ...e,
          highlightType: 'unboundHighlighted',
          badgeType: 'funcUnbound'
        },
        matchExists: false
      }
    } else {
      return {
        result: {
          ...e,
          highlightType: 'active',
          badgeType: 'callArg'
        },
        matchExists: false
      }
    }
  } else if (isFunction(e)) {
    const argHelperResult = toBetaReducePreviewBefore(e.arg, from, to, funcSide)
    const bodyHelperResult = toBetaReducePreviewBefore(
      e.body,
      from,
      to,
      funcSide
    )

    return {
      result: {
        ...e,
        arg: argHelperResult.result,
        body: bodyHelperResult.result
      },
      matchExists: argHelperResult.matchExists || bodyHelperResult.matchExists
    }
  } else {
    const argHelperResult = toBetaReducePreviewBefore(e.arg, from, to, funcSide)
    const funcHelperResult = toBetaReducePreviewBefore(
      e.func,
      from,
      to,
      funcSide
    )
    return {
      result: {
        ...e,
        state: 'default',
        arg: argHelperResult.result,
        func: funcHelperResult.result
      },
      matchExists: argHelperResult.matchExists || funcHelperResult.matchExists
    }
  }
}

const highlightFuncArg = (
  e: VariableExpression
): VariableWithState<'highlightFuncArg'> => ({
  ...e,
  highlightType: 'highlighted',
  badgeType: 'funcArg'
})

const stepToBetaReducePreviewBefore = (
  e: ExecutableCall
): {
  result: ExecutableStepCall<'betaReducePreviewBefore'>
  matchExists: boolean
} => {
  const from = e.func.arg.name
  const to = e.arg
  const argResult = toBetaReducePreviewBefore(e.arg, from, to, false)
  const funcResult = toBetaReducePreviewBefore(e.func.body, from, to, true)

  return {
    result: {
      ...e,
      state: 'betaReducePreviewBefore',
      arg: argResult.result,
      func: {
        ...e.func,
        arg: highlightFuncArg(e.func.arg),
        body: funcResult.result
      }
    },
    matchExists: argResult.matchExists || funcResult.matchExists
  }
}

export default stepToBetaReducePreviewBefore
