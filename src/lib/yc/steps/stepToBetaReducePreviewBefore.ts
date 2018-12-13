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
  funcSide: boolean
): {
  nextExpression: StepVariable<'betaReducePreviewBefore'>
  matchExists: boolean
}
export function toBetaReducePreviewBefore(
  e: FunctionExpression,
  from: VariableNames,
  funcSide: boolean
): {
  nextExpression: StepFunction<'betaReducePreviewBefore'>
  matchExists: boolean
}
export function toBetaReducePreviewBefore(
  e: CallExpression,
  from: VariableNames,
  funcSide: boolean
): {
  nextExpression: NonExecutableStepCall<'betaReducePreviewBefore'>
  matchExists: boolean
}
export function toBetaReducePreviewBefore(
  e: VariableExpression | FunctionExpression,
  from: VariableNames,
  funcSide: boolean
):
  | {
      nextExpression: StepVariable<'betaReducePreviewBefore'>
      matchExists: boolean
    }
  | {
      nextExpression: StepFunction<'betaReducePreviewBefore'>
      matchExists: boolean
    }
export function toBetaReducePreviewBefore(
  e: Expression,
  from: VariableNames,
  funcSide: boolean
): {
  nextExpression: StepChild<'betaReducePreviewBefore'>
  matchExists: boolean
}
export function toBetaReducePreviewBefore(
  e: Expression,
  from: VariableNames,
  funcSide: boolean
): {
  nextExpression: StepChild<'betaReducePreviewBefore'>
  matchExists: boolean
} {
  if (isVariable(e)) {
    if (funcSide && e.bound) {
      if (e.name === from) {
        return {
          nextExpression: {
            ...e,
            highlightType: 'highlighted',
            topRightBadgeType: 'match',
            bottomRightBadgeType: 'funcBound'
          },
          matchExists: true
        }
      } else {
        return {
          nextExpression: {
            ...e,
            highlightType: 'highlighted',
            topRightBadgeType: 'unmatch',
            bottomRightBadgeType: 'funcBound'
          },
          matchExists: false
        }
      }
    } else if (funcSide && !e.bound) {
      return {
        nextExpression: {
          ...e,
          highlightType: 'active',
          topRightBadgeType: 'none',
          bottomRightBadgeType: 'funcUnbound'
        },
        matchExists: false
      }
    } else {
      return {
        nextExpression: {
          ...e,
          highlightType: 'active',
          topRightBadgeType: 'none',
          bottomRightBadgeType: 'callArg'
        },
        matchExists: false
      }
    }
  } else if (isFunction(e)) {
    const argHelperResult = toBetaReducePreviewBefore(e.arg, from, funcSide)
    const bodyHelperResult = toBetaReducePreviewBefore(e.body, from, funcSide)

    return {
      nextExpression: {
        ...e,
        arg: argHelperResult.nextExpression,
        body: bodyHelperResult.nextExpression
      },
      matchExists: argHelperResult.matchExists || bodyHelperResult.matchExists
    }
  } else {
    const argHelperResult = toBetaReducePreviewBefore(e.arg, from, funcSide)
    const funcHelperResult = toBetaReducePreviewBefore(e.func, from, funcSide)
    return {
      nextExpression: {
        ...e,
        state: 'default',
        arg: argHelperResult.nextExpression,
        func: funcHelperResult.nextExpression
      },
      matchExists: argHelperResult.matchExists || funcHelperResult.matchExists
    }
  }
}

const funcArg = (
  e: VariableExpression
): VariableWithState<'matchFuncArgHighlighted'> => ({
  ...e,
  highlightType: 'highlighted',
  topRightBadgeType: 'match',
  bottomRightBadgeType: 'funcArg'
})

const stepToBetaReducePreviewBefore = (
  e: ExecutableCall
): {
  nextExpression: ExecutableStepCall<'betaReducePreviewBefore'>
  matchExists: boolean
} => {
  const from = e.func.arg.name
  const argResult = toBetaReducePreviewBefore(e.arg, from, false)
  const funcResult = toBetaReducePreviewBefore(e.func.body, from, true)
  const matchExists = argResult.matchExists || funcResult.matchExists

  return {
    nextExpression: {
      ...e,
      state: 'betaReducePreviewBefore',
      arg: argResult.nextExpression,
      func: {
        ...e.func,
        arg: funcArg(e.func.arg),
        body: funcResult.nextExpression
      }
    },
    matchExists
  }
}

export default stepToBetaReducePreviewBefore
