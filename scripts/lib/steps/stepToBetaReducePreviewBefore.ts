import {
  isFunction,
  isVariable,
  isCall,
  isConditional
} from 'src/lib/expressionTypeGuards'
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
  ConditionalExpression,
  StepConditional
} from 'src/types/ExpressionTypes'
import { VariableNames } from 'src/types/VariableNames'

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
  e: ConditionalExpression,
  fromName: VariableNames,
  funcSide: boolean
): {
  nextExpression: StepConditional<'betaReducePreviewBefore'>
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
    const arg = toBetaReducePreviewBefore(e.arg, fromName, funcSide)
    const body = toBetaReducePreviewBefore(e.body, fromName, funcSide)

    return {
      nextExpression: {
        ...e,
        arg: arg.nextExpression,
        body: body.nextExpression
      },
      matchExists: arg.matchExists || body.matchExists
    }
  } else if (isCall(e)) {
    const arg = toBetaReducePreviewBefore(e.arg, fromName, funcSide)
    const func = toBetaReducePreviewBefore(e.func, fromName, funcSide)
    return {
      nextExpression: {
        ...e,
        state: 'default',
        arg: arg.nextExpression,
        func: func.nextExpression
      },
      matchExists: arg.matchExists || func.matchExists
    }
  } else if (isConditional(e)) {
    const condition = toBetaReducePreviewBefore(e.condition, fromName, funcSide)
    const trueCase = toBetaReducePreviewBefore(e.trueCase, fromName, funcSide)
    const falseCase = toBetaReducePreviewBefore(e.falseCase, fromName, funcSide)
    return {
      nextExpression: {
        ...e,
        state: 'default',
        condition: condition.nextExpression,
        trueCase: trueCase.nextExpression,
        falseCase: falseCase.nextExpression
      },
      matchExists:
        condition.matchExists || trueCase.matchExists || falseCase.matchExists
    }
  } else {
    throw new Error()
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
