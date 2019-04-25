import { isFunction, isVariable } from 'src/lib/yc/expressionTypeGuards'
import { activeFuncArg } from 'src/lib/yc/steps/stepToShowFuncUnbound'
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
  VariableExpression
} from 'src/types/yc/ExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'
import prioritizeExpression from 'src/lib/yc/prioritizeExpression'

function matchBetaReduced(
  e: VariableExpression
): StepVariable<'betaReducePreviewAfter'>
function matchBetaReduced(
  e: FunctionExpression
): StepFunction<'betaReducePreviewAfter'>
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
    return {
      ...e,
      arg: matchBetaReduced(e.arg),
      body: matchBetaReduced(e.body)
    }
  } else {
    return {
      ...e,
      state: 'default',
      arg: matchBetaReduced(e.arg),
      func: matchBetaReduced(e.func)
    }
  }
}

export function toBetaReducePreviewAfter(
  e: VariableExpression,
  from: VariableNames,
  to: Expression,
  funcSide: boolean
): StepVariable<'betaReducePreviewAfter'>
export function toBetaReducePreviewAfter(
  e: FunctionExpression,
  from: VariableNames,
  to: Expression,
  funcSide: boolean
): StepFunction<'betaReducePreviewAfter'>
export function toBetaReducePreviewAfter(
  e: CallExpression,
  from: VariableNames,
  to: Expression,
  funcSide: boolean
): NonExecutableStepCall<'betaReducePreviewAfter'>
export function toBetaReducePreviewAfter(
  e: VariableExpression | FunctionExpression,
  from: VariableNames,
  to: Expression,
  funcSide: boolean
):
  | StepVariable<'betaReducePreviewAfter'>
  | StepFunction<'betaReducePreviewAfter'>
export function toBetaReducePreviewAfter(
  e: Expression,
  from: VariableNames,
  to: Expression,
  funcSide: boolean
): StepChild<'betaReducePreviewAfter'>
export function toBetaReducePreviewAfter(
  e: Expression,
  from: VariableNames,
  to: Expression,
  funcSide: boolean
): StepChild<'betaReducePreviewAfter'> {
  if (isVariable(e)) {
    if (funcSide && e.bound) {
      if (e.name === from) {
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
        highlightType: 'highlighted',
        topLeftBadgeType: 'betaReduceCallArg',
        bottomRightBadgeType: 'callArg'
      }
    }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: toBetaReducePreviewAfter(e.arg, from, to, funcSide),
      body: toBetaReducePreviewAfter(e.body, from, to, funcSide)
    }
  } else {
    return {
      ...e,
      state: 'default',
      arg: toBetaReducePreviewAfter(e.arg, from, to, funcSide),
      func: toBetaReducePreviewAfter(e.func, from, to, funcSide)
    }
  }
}

const stepToBetaReducePreviewAfter = (
  e: ExecutableCall
): ExecutableStepCall<'betaReducePreviewAfter'> => {
  const from = e.func.arg.name
  const to = e.arg

  return prioritizeExpression({
    ...e,
    state: 'betaReducePreviewAfter',
    arg: toBetaReducePreviewAfter(e.arg, from, to, false),
    func: {
      ...e.func,
      arg: activeFuncArg(e.func.arg),
      body: toBetaReducePreviewAfter(e.func.body, from, to, true)
    }
  })
}

export default stepToBetaReducePreviewAfter
