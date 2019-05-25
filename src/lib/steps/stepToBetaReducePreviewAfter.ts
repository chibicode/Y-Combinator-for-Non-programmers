import { isFunction, isVariable, isCall } from 'src/lib/expressionTypeGuards'
import { activeFuncArg } from 'src/lib/steps/stepToShowFuncUnbound'
import {
  CallExpression,
  ExecutableCallRegular,
  ExecutableStepCallRegular,
  Expression,
  FunctionExpression,
  NonExecutableStepCall,
  ConditionalExpression,
  StepConditional,
  StepChild,
  StepFunction,
  StepVariable,
  VariableExpression
} from 'src/types/yc/ExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'

function matchBetaReduced(
  e: VariableExpression,
  shorthandBinary: VariableExpression['shorthandBinary'],
  shorthandUnary: VariableExpression['shorthandUnary']
): {
  result: StepVariable<'betaReducePreviewAfter'>
  executableUnaryExists: boolean
}
function matchBetaReduced(
  e: FunctionExpression,
  shorthandBinary: VariableExpression['shorthandBinary'],
  shorthandUnary: VariableExpression['shorthandUnary']
): {
  result: StepFunction<'betaReducePreviewAfter'>
  executableUnaryExists: boolean
}
function matchBetaReduced(
  e: ConditionalExpression,
  shorthandBinary: VariableExpression['shorthandBinary'],
  shorthandUnary: VariableExpression['shorthandUnary']
): {
  result: StepConditional<'betaReducePreviewAfter'>
  executableUnaryExists: boolean
}
function matchBetaReduced(
  e: CallExpression,
  shorthandBinary: VariableExpression['shorthandBinary'],
  shorthandUnary: VariableExpression['shorthandUnary']
): {
  result: NonExecutableStepCall<'betaReducePreviewAfter'>
  executableUnaryExists: boolean
}
function matchBetaReduced(
  e: Expression,
  shorthandBinary: VariableExpression['shorthandBinary'],
  shorthandUnary: VariableExpression['shorthandUnary']
): {
  result: StepChild<'betaReducePreviewAfter'>
  executableUnaryExists: boolean
}
function matchBetaReduced(
  e: Expression,
  shorthandBinary: VariableExpression['shorthandBinary'],
  shorthandUnary: VariableExpression['shorthandUnary']
): {
  result: StepChild<'betaReducePreviewAfter'>
  executableUnaryExists: boolean
} {
  if (isVariable(e)) {
    return {
      result: {
        ...e,
        shorthandBinary: e.shorthandBinary || shorthandBinary,
        shorthandUnary: e.shorthandUnary || shorthandUnary,
        highlightType: 'highlighted',
        topLeftBadgeType: 'betaReduced',
        bottomRightBadgeType: 'funcBound',
        emphasizePriority: false
      },
      executableUnaryExists:
        shorthandUnary !== undefined && e.shorthandNumber !== undefined
    }
  } else if (isFunction(e)) {
    const arg = matchBetaReduced(e.arg, shorthandBinary, shorthandUnary)
    const body = matchBetaReduced(e.body, shorthandBinary, shorthandUnary)
    return {
      result: {
        ...e,
        arg: arg.result,
        body: body.result
      },
      executableUnaryExists:
        arg.executableUnaryExists || body.executableUnaryExists
    }
  } else if (isCall(e)) {
    const arg = matchBetaReduced(e.arg, shorthandBinary, shorthandUnary)
    const func = matchBetaReduced(e.func, shorthandBinary, shorthandUnary)
    return {
      result: {
        ...e,
        state: 'default',
        arg: arg.result,
        func: func.result
      },
      executableUnaryExists:
        arg.executableUnaryExists || func.executableUnaryExists
    }
  } else {
    const condition = matchBetaReduced(
      e.condition,
      shorthandBinary,
      shorthandUnary
    )
    const trueCase = matchBetaReduced(
      e.trueCase,
      shorthandBinary,
      shorthandUnary
    )
    const falseCase = matchBetaReduced(
      e.falseCase,
      shorthandBinary,
      shorthandUnary
    )
    return {
      result: {
        ...e,
        condition: condition.result,
        trueCase: trueCase.result,
        falseCase: falseCase.result
      },
      executableUnaryExists:
        condition.executableUnaryExists ||
        trueCase.executableUnaryExists ||
        falseCase.executableUnaryExists
    }
  }
}

export function toBetaReducePreviewAfter(
  e: VariableExpression,
  fromName: VariableNames,
  to: Expression,
  funcSide: boolean
): {
  result: StepVariable<'betaReducePreviewAfter'>
  executableUnaryExists: boolean
}
export function toBetaReducePreviewAfter(
  e: FunctionExpression,
  fromName: VariableNames,
  to: Expression,
  funcSide: boolean
): {
  result: StepFunction<'betaReducePreviewAfter'>
  executableUnaryExists: boolean
}
export function toBetaReducePreviewAfter(
  e: ConditionalExpression,
  fromName: VariableNames,
  to: Expression,
  funcSide: boolean
): {
  result: StepConditional<'betaReducePreviewAfter'>
  executableUnaryExists: boolean
}
export function toBetaReducePreviewAfter(
  e: CallExpression,
  fromName: VariableNames,
  to: Expression,
  funcSide: boolean
): {
  result: NonExecutableStepCall<'betaReducePreviewAfter'>
  executableUnaryExists: boolean
}
export function toBetaReducePreviewAfter(
  e: VariableExpression | FunctionExpression,
  fromName: VariableNames,
  to: Expression,
  funcSide: boolean
): {
  result:
    | StepVariable<'betaReducePreviewAfter'>
    | StepFunction<'betaReducePreviewAfter'>
  executableUnaryExists: boolean
}
export function toBetaReducePreviewAfter(
  e: Expression,
  fromName: VariableNames,
  to: Expression,
  funcSide: boolean
): {
  result: StepChild<'betaReducePreviewAfter'>
  executableUnaryExists: boolean
}
export function toBetaReducePreviewAfter(
  e: Expression,
  fromName: VariableNames,
  to: Expression,
  funcSide: boolean
): {
  result: StepChild<'betaReducePreviewAfter'>
  executableUnaryExists: boolean
} {
  if (isVariable(e)) {
    if (funcSide && e.bound) {
      if (e.name === fromName) {
        return matchBetaReduced(to, e.shorthandBinary, e.shorthandUnary)
      } else {
        return {
          result: {
            ...e,
            highlightType: 'active',
            topLeftBadgeType: 'none',
            bottomRightBadgeType: 'funcBound'
          },
          executableUnaryExists: false
        }
      }
    } else if (funcSide && !e.bound) {
      return {
        result: {
          ...e,
          highlightType: 'active',
          topLeftBadgeType: 'none',
          bottomRightBadgeType: 'funcUnbound'
        },
        executableUnaryExists: false
      }
    } else {
      return {
        result: {
          ...e,
          highlightType: 'betaReduceCallArgHighlighted',
          topLeftBadgeType: 'none',
          bottomRightBadgeType: 'callArg'
        },
        executableUnaryExists: false
      }
    }
  } else if (isFunction(e)) {
    const arg = toBetaReducePreviewAfter(e.arg, fromName, to, funcSide)
    const body = toBetaReducePreviewAfter(e.body, fromName, to, funcSide)
    return {
      result: {
        ...e,
        arg: arg.result,
        body: body.result
      },
      executableUnaryExists:
        arg.executableUnaryExists || body.executableUnaryExists
    }
  } else if (isCall(e)) {
    const arg = toBetaReducePreviewAfter(e.arg, fromName, to, funcSide)
    const func = toBetaReducePreviewAfter(e.func, fromName, to, funcSide)
    return {
      result: {
        ...e,
        state: 'default',
        arg: arg.result,
        func: func.result
      },
      executableUnaryExists:
        arg.executableUnaryExists || func.executableUnaryExists
    }
  } else {
    const condition = toBetaReducePreviewAfter(
      e.condition,
      fromName,
      to,
      funcSide
    )
    const trueCase = toBetaReducePreviewAfter(
      e.trueCase,
      fromName,
      to,
      funcSide
    )
    const falseCase = toBetaReducePreviewAfter(
      e.falseCase,
      fromName,
      to,
      funcSide
    )
    return {
      result: {
        ...e,
        condition: condition.result,
        trueCase: trueCase.result,
        falseCase: falseCase.result
      },
      executableUnaryExists:
        condition.executableUnaryExists ||
        trueCase.executableUnaryExists ||
        falseCase.executableUnaryExists
    }
  }
}

const stepToBetaReducePreviewAfter = (
  e: ExecutableCallRegular
): {
  nextExpression: ExecutableStepCallRegular<'betaReducePreviewAfter'>
  executableUnaryExists: boolean
} => {
  const fromName = e.func.arg.name
  const to = e.arg
  const funcBody = toBetaReducePreviewAfter(e.func.body, fromName, to, true)
  const arg = toBetaReducePreviewAfter(e.arg, fromName, to, false)

  return {
    executableUnaryExists:
      arg.executableUnaryExists || funcBody.executableUnaryExists,
    nextExpression: {
      ...e,
      state: 'betaReducePreviewAfter',
      arg: arg.result,
      func: {
        ...e.func,
        arg: activeFuncArg(e.func.arg),
        body: funcBody.result
      }
    }
  }
}

export default stepToBetaReducePreviewAfter
