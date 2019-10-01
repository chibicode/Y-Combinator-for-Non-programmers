import {
  isFunction,
  isVariable,
  isCall,
  isConditional,
  isBinary
} from 'src/lib/expressionTypeGuards'
import { activeFuncArg } from 'scripts/lib/steps/stepToShowFuncUnbound'
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
  BinaryExpression,
  StepBinary,
  VariableExpression
} from 'src/types/ExpressionTypes'
import { VariableNames } from 'src/types/VariableNames'

function matchBetaReduced(
  e: VariableExpression
): StepVariable<'betaReducePreviewAfter'>
function matchBetaReduced(
  e: FunctionExpression
): StepFunction<'betaReducePreviewAfter'>
function matchBetaReduced(
  e: ConditionalExpression
): StepConditional<'betaReducePreviewAfter'>
function matchBetaReduced(
  e: BinaryExpression
): StepBinary<'betaReducePreviewAfter'>
function matchBetaReduced(
  e: CallExpression
): NonExecutableStepCall<'betaReducePreviewAfter'>
function matchBetaReduced(e: Expression): StepChild<'betaReducePreviewAfter'>
function matchBetaReduced(e: Expression): StepChild<'betaReducePreviewAfter'> {
  if (isVariable(e)) {
    return {
      ...e,
      highlightType: 'highlighted',
      topLeftBadgeType: 'betaReduced',
      bottomRightBadgeType: 'funcBound',
      emphasizePriority: false
    }
  } else if (isFunction(e)) {
    const arg = matchBetaReduced(e.arg)
    const body = matchBetaReduced(e.body)
    return {
      ...e,
      arg,
      body
    }
  } else if (isCall(e)) {
    const arg = matchBetaReduced(e.arg)
    const func = matchBetaReduced(e.func)
    return {
      ...e,
      state: 'default',
      arg,
      func
    }
  } else if (isConditional(e)) {
    const condition = matchBetaReduced(e.condition)
    const trueCase = matchBetaReduced(e.trueCase)
    const falseCase = matchBetaReduced(e.falseCase)
    return {
      ...e,
      state: 'default',
      condition: condition,
      trueCase: trueCase,
      falseCase: falseCase
    }
  } else if (isBinary(e)) {
    const first = matchBetaReduced(e.first)
    const second = matchBetaReduced(e.second)
    return {
      ...e,
      state: 'default',
      first: first,
      second: second
    }
  } else {
    throw new Error()
  }
}

export function toBetaReducePreviewAfter(
  e: VariableExpression,
  fromName: VariableNames,
  to: Expression,
  funcSide: boolean
): StepVariable<'betaReducePreviewAfter'>
export function toBetaReducePreviewAfter(
  e: FunctionExpression,
  fromName: VariableNames,
  to: Expression,
  funcSide: boolean
): StepFunction<'betaReducePreviewAfter'>
export function toBetaReducePreviewAfter(
  e: ConditionalExpression,
  fromName: VariableNames,
  to: Expression,
  funcSide: boolean
): StepConditional<'betaReducePreviewAfter'>
export function toBetaReducePreviewAfter(
  e: BinaryExpression,
  fromName: VariableNames,
  to: Expression,
  funcSide: boolean
): StepBinary<'betaReducePreviewAfter'>
export function toBetaReducePreviewAfter(
  e: CallExpression,
  fromName: VariableNames,
  to: Expression,
  funcSide: boolean
): NonExecutableStepCall<'betaReducePreviewAfter'>
export function toBetaReducePreviewAfter(
  e: VariableExpression | FunctionExpression,
  fromName: VariableNames,
  to: Expression,
  funcSide: boolean
):
  | StepVariable<'betaReducePreviewAfter'>
  | StepFunction<'betaReducePreviewAfter'>
export function toBetaReducePreviewAfter(
  e: Expression,
  fromName: VariableNames,
  to: Expression,
  funcSide: boolean
): StepChild<'betaReducePreviewAfter'>
export function toBetaReducePreviewAfter(
  e: Expression,
  fromName: VariableNames,
  to: Expression,
  funcSide: boolean
): StepChild<'betaReducePreviewAfter'> {
  if (isVariable(e)) {
    if (funcSide && e.bound) {
      if (e.name === fromName) {
        return matchBetaReduced(to)
      } else {
        return {
          ...e,
          highlightType: 'active',
          topLeftBadgeType: 'none',
          bottomRightBadgeType: 'funcBound'
        }
      }
    } else if (funcSide && !e.bound) {
      return {
        ...e,
        highlightType: 'active',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'funcUnbound'
      }
    } else {
      return {
        ...e,
        highlightType: 'betaReduceCallArgHighlighted',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'callArg'
      }
    }
  } else if (isFunction(e)) {
    const arg = toBetaReducePreviewAfter(e.arg, fromName, to, funcSide)
    const body = toBetaReducePreviewAfter(e.body, fromName, to, funcSide)
    return {
      ...e,
      arg,
      body
    }
  } else if (isCall(e)) {
    const arg = toBetaReducePreviewAfter(e.arg, fromName, to, funcSide)
    const func = toBetaReducePreviewAfter(e.func, fromName, to, funcSide)
    return {
      ...e,
      state: 'default',
      arg,
      func
    }
  } else if (isConditional(e)) {
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
      ...e,
      state: 'default',
      condition: condition,
      trueCase: trueCase,
      falseCase: falseCase
    }
  } else if (isBinary(e)) {
    const first = toBetaReducePreviewAfter(e.first, fromName, to, funcSide)
    const second = toBetaReducePreviewAfter(e.second, fromName, to, funcSide)
    return {
      ...e,
      state: 'default',
      first: first,
      second: second
    }
  } else {
    throw new Error()
  }
}

const stepToBetaReducePreviewAfter = (
  e: ExecutableCallRegular
): ExecutableStepCallRegular<'betaReducePreviewAfter'> => {
  const fromName = e.func.arg.name
  const to = e.arg
  const funcBody = toBetaReducePreviewAfter(e.func.body, fromName, to, true)
  const arg = toBetaReducePreviewAfter(e.arg, fromName, to, false)

  return {
    ...e,
    state: 'betaReducePreviewAfter',
    arg,
    func: {
      ...e.func,
      arg: activeFuncArg(e.func.arg),
      body: funcBody
    }
  }
}

export default stepToBetaReducePreviewAfter
