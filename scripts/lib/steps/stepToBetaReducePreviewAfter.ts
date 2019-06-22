import { isFunction, isVariable, isCall } from 'src/lib/expressionTypeGuards'
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
  VariableExpression
} from 'src/types/ExpressionTypes'
import { VariableNames } from 'src/types/VariableNames'

function matchBetaReduced(
  e: VariableExpression,
  shorthandUnary: VariableExpression['shorthandUnary']
): StepVariable<'betaReducePreviewAfter'>
function matchBetaReduced(
  e: FunctionExpression,
  shorthandUnary: VariableExpression['shorthandUnary']
): StepFunction<'betaReducePreviewAfter'>
function matchBetaReduced(
  e: ConditionalExpression,
  shorthandUnary: VariableExpression['shorthandUnary']
): StepConditional<'betaReducePreviewAfter'>
function matchBetaReduced(
  e: CallExpression,
  shorthandUnary: VariableExpression['shorthandUnary']
): NonExecutableStepCall<'betaReducePreviewAfter'>
function matchBetaReduced(
  e: Expression,
  shorthandUnary: VariableExpression['shorthandUnary']
): StepChild<'betaReducePreviewAfter'>
function matchBetaReduced(
  e: Expression,
  shorthandUnary: VariableExpression['shorthandUnary']
): StepChild<'betaReducePreviewAfter'> {
  if (isVariable(e)) {
    return {
      ...e,
      shorthandUnary: e.shorthandUnary || shorthandUnary,
      highlightType: 'highlighted',
      topLeftBadgeType: 'betaReduced',
      bottomRightBadgeType: 'funcBound',
      emphasizePriority: false
    }
  } else if (isFunction(e)) {
    const arg = matchBetaReduced(e.arg, shorthandUnary)
    const body = matchBetaReduced(e.body, shorthandUnary)
    return {
      ...e,
      arg,
      body
    }
  } else if (isCall(e)) {
    const arg = matchBetaReduced(e.arg, shorthandUnary)
    const func = matchBetaReduced(e.func, shorthandUnary)
    return {
      ...e,
      state: 'default',
      arg,
      func
    }
  } else {
    const condition = matchBetaReduced(e.condition, shorthandUnary)
    const trueCase = matchBetaReduced(e.trueCase, shorthandUnary)
    const falseCase = matchBetaReduced(e.falseCase, shorthandUnary)
    return {
      ...e,
      state: 'default',
      condition: condition,
      trueCase: trueCase,
      falseCase: falseCase
    }
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
        return matchBetaReduced(to, e.shorthandUnary)
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
      ...e,
      state: 'default',
      condition: condition,
      trueCase: trueCase,
      falseCase: falseCase
    }
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
