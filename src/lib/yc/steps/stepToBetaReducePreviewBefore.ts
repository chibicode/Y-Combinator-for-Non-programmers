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
  fromName: VariableNames,
  fromAlphaConverCount: number,
  funcSide: boolean
): {
  nextExpression: StepVariable<'betaReducePreviewBefore'>
  matchExists: boolean
}
export function toBetaReducePreviewBefore(
  e: FunctionExpression,
  fromName: VariableNames,
  fromAlphaConverCount: number,
  funcSide: boolean
): {
  nextExpression: StepFunction<'betaReducePreviewBefore'>
  matchExists: boolean
}
export function toBetaReducePreviewBefore(
  e: CallExpression,
  fromName: VariableNames,
  fromAlphaConverCount: number,
  funcSide: boolean
): {
  nextExpression: NonExecutableStepCall<'betaReducePreviewBefore'>
  matchExists: boolean
}
export function toBetaReducePreviewBefore(
  e: VariableExpression | FunctionExpression,
  fromName: VariableNames,
  fromAlphaConverCount: number,
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
  fromAlphaConverCount: number,
  funcSide: boolean
): {
  nextExpression: StepChild<'betaReducePreviewBefore'>
  matchExists: boolean
}
export function toBetaReducePreviewBefore(
  e: Expression,
  fromName: VariableNames,
  fromAlphaConverCount: number,
  funcSide: boolean
): {
  nextExpression: StepChild<'betaReducePreviewBefore'>
  matchExists: boolean
} {
  if (isVariable(e)) {
    if (funcSide && e.bound) {
      if (e.name === fromName && e.alphaConverCount === fromAlphaConverCount) {
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
    const argHelperResult = toBetaReducePreviewBefore(
      e.arg,
      fromName,
      fromAlphaConverCount,
      funcSide
    )
    const bodyHelperResult = toBetaReducePreviewBefore(
      e.body,
      fromName,
      fromAlphaConverCount,
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
  } else {
    const argHelperResult = toBetaReducePreviewBefore(
      e.arg,
      fromName,
      fromAlphaConverCount,
      funcSide
    )
    const funcHelperResult = toBetaReducePreviewBefore(
      e.func,
      fromName,
      fromAlphaConverCount,
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
  e: ExecutableCall
): {
  nextExpression: ExecutableStepCall<'betaReducePreviewBefore'>
  matchExists: boolean
} => {
  const fromName = e.func.arg.name
  const fromAlphaConverCount = e.func.arg.alphaConverCount
  const argResult = toBetaReducePreviewBefore(
    e.arg,
    fromName,
    fromAlphaConverCount,
    false
  )
  const funcResult = toBetaReducePreviewBefore(
    e.func.body,
    fromName,
    fromAlphaConverCount,
    true
  )
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
