import { isFunction, isVariable, isCall } from 'src/lib/yc/expressionTypeGuards'
import {
  CallExpression,
  ExecutableCallRegular,
  ExecutableStepCallRegular,
  Expression,
  FunctionExpression,
  NonExecutableStepCall,
  StepChild,
  StepFunction,
  StepVariable,
  VariableExpression,
  VariableWithState,
  ShorthandFunctionExpression,
  StepShorthandFunction
} from 'src/types/yc/ExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'

export function toBetaReducePreviewBefore(
  e: VariableExpression,
  fromName: VariableNames,
  funcSide: boolean
): {
  nextExpression: StepVariable<'betaReducePreviewBefore'>
  matchExists: boolean
}
export function toBetaReducePreviewBefore(
  e: FunctionExpression,
  fromName: VariableNames,
  funcSide: boolean
): {
  nextExpression: StepFunction<'betaReducePreviewBefore'>
  matchExists: boolean
}
export function toBetaReducePreviewBefore(
  e: ShorthandFunctionExpression,
  fromName: VariableNames,
  funcSide: boolean
): {
  nextExpression: StepShorthandFunction<'betaReducePreviewBefore'>
  matchExists: boolean
}
export function toBetaReducePreviewBefore(
  e: CallExpression,
  fromName: VariableNames,
  funcSide: boolean
): {
  nextExpression: NonExecutableStepCall<'betaReducePreviewBefore'>
  matchExists: boolean
}
export function toBetaReducePreviewBefore(
  e: VariableExpression | FunctionExpression,
  fromName: VariableNames,
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
  fromName: VariableNames,
  funcSide: boolean
): {
  nextExpression: StepChild<'betaReducePreviewBefore'>
  matchExists: boolean
}
export function toBetaReducePreviewBefore(
  e: Expression,
  fromName: VariableNames,
  funcSide: boolean
): {
  nextExpression: StepChild<'betaReducePreviewBefore'>
  matchExists: boolean
} {
  if (isVariable(e)) {
    if (funcSide && e.bound) {
      if (e.name === fromName) {
        return {
          nextExpression: {
            ...e,
            highlightType: 'highlighted',
            topLeftBadgeType: 'match',
            bottomRightBadgeType: 'funcBound'
          },
          matchExists: true
        }
      } else {
        return {
          nextExpression: {
            ...e,
            highlightType: 'highlighted',
            topLeftBadgeType: 'unmatch',
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
          topLeftBadgeType: 'none',
          bottomRightBadgeType: 'funcUnbound'
        },
        matchExists: false
      }
    } else {
      return {
        nextExpression: {
          ...e,
          highlightType: 'active',
          topLeftBadgeType: 'none',
          bottomRightBadgeType: 'callArg'
        },
        matchExists: false
      }
    }
  } else if (isFunction(e)) {
    const argHelperResult = toBetaReducePreviewBefore(e.arg, fromName, funcSide)
    const bodyHelperResult = toBetaReducePreviewBefore(
      e.body,
      fromName,
      funcSide
    )

    return {
      nextExpression: {
        ...e,
        arg: argHelperResult.nextExpression,
        body: bodyHelperResult.nextExpression
      },
      matchExists: argHelperResult.matchExists || bodyHelperResult.matchExists
    }
  } else if (isCall(e)) {
    const argHelperResult = toBetaReducePreviewBefore(e.arg, fromName, funcSide)
    const funcHelperResult = toBetaReducePreviewBefore(
      e.func,
      fromName,
      funcSide
    )
    return {
      nextExpression: {
        ...e,
        state: 'default',
        arg: argHelperResult.nextExpression,
        func: funcHelperResult.nextExpression
      },
      matchExists: argHelperResult.matchExists || funcHelperResult.matchExists
    }
  } else {
    return {
      nextExpression: {
        ...e,
        highlightType: 'default'
      },
      matchExists: false
    }
  }
}

const funcArg = (
  e: VariableExpression,
  matchExists: boolean
):
  | VariableWithState<'matchFuncArgHighlighted'>
  | VariableWithState<'unmatchFuncArgHighlighted'> =>
  matchExists
    ? {
        ...e,
        highlightType: 'highlighted',
        topLeftBadgeType: 'match',
        bottomRightBadgeType: 'funcArg'
      }
    : {
        ...e,
        highlightType: 'highlighted',
        topLeftBadgeType: 'unmatch',
        bottomRightBadgeType: 'funcArg'
      }

const stepToBetaReducePreviewBefore = (
  e: ExecutableCallRegular
): {
  nextExpression: ExecutableStepCallRegular<'betaReducePreviewBefore'>
  matchExists: boolean
} => {
  const fromName = e.func.arg.name
  const argResult = toBetaReducePreviewBefore(e.arg, fromName, false)
  const funcResult = toBetaReducePreviewBefore(e.func.body, fromName, true)
  const matchExists = argResult.matchExists || funcResult.matchExists

  return {
    nextExpression: {
      ...e,
      state: 'betaReducePreviewBefore',
      arg: argResult.nextExpression,
      func: {
        ...e.func,
        arg: funcArg(e.func.arg, matchExists),
        body: funcResult.nextExpression
      }
    },
    matchExists
  }
}

export default stepToBetaReducePreviewBefore
