import {
  isFunction,
  isVariable,
  isShorthandFunction
} from 'src/lib/yc/expressionTypeGuards'
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
  VariableExpression,
  ShorthandFunctionExpression,
  StepShorthandFunction
} from 'src/types/yc/ExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'

function matchBetaReduced(
  e: VariableExpression
): StepVariable<'betaReducePreviewAfter'>
function matchBetaReduced(
  e: FunctionExpression
): StepFunction<'betaReducePreviewAfter'>
function matchBetaReduced(
  e: ShorthandFunctionExpression
): StepShorthandFunction<'betaReducePreviewAfter'>
function matchBetaReduced(
  e: CallExpression
): NonExecutableStepCall<'betaReducePreviewAfter'>
function matchBetaReduced(e: Expression): StepChild<'betaReducePreviewAfter'>
function matchBetaReduced(e: Expression): StepChild<'betaReducePreviewAfter'> {
  if (isVariable(e)) {
    return {
      ...e,
      // argPriorityAgg: [],
      // funcPriorityAgg: [],
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
  } else if (isShorthandFunction(e)) {
    return {
      ...e,
      highlightType: 'default',
      args: e.args.map(arg => matchBetaReduced(arg))
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
  fromName: VariableNames,
  fromalphaConvertCount: number,
  to: Expression,
  funcSide: boolean
): StepVariable<'betaReducePreviewAfter'>
export function toBetaReducePreviewAfter(
  e: FunctionExpression,
  fromName: VariableNames,
  fromalphaConvertCount: number,
  to: Expression,
  funcSide: boolean
): StepFunction<'betaReducePreviewAfter'>
export function toBetaReducePreviewAfter(
  e: ShorthandFunctionExpression,
  fromName: VariableNames,
  fromalphaConvertCount: number,
  to: Expression,
  funcSide: boolean
): StepShorthandFunction<'betaReducePreviewAfter'>
export function toBetaReducePreviewAfter(
  e: CallExpression,
  fromName: VariableNames,
  fromalphaConvertCount: number,
  to: Expression,
  funcSide: boolean
): NonExecutableStepCall<'betaReducePreviewAfter'>
export function toBetaReducePreviewAfter(
  e: VariableExpression | FunctionExpression,
  fromName: VariableNames,
  fromalphaConvertCount: number,
  to: Expression,
  funcSide: boolean
):
  | StepVariable<'betaReducePreviewAfter'>
  | StepFunction<'betaReducePreviewAfter'>
export function toBetaReducePreviewAfter(
  e: Expression,
  fromName: VariableNames,
  fromalphaConvertCount: number,
  to: Expression,
  funcSide: boolean
): StepChild<'betaReducePreviewAfter'>
export function toBetaReducePreviewAfter(
  e: Expression,
  fromName: VariableNames,
  fromalphaConvertCount: number,
  to: Expression,
  funcSide: boolean
): StepChild<'betaReducePreviewAfter'> {
  if (isVariable(e)) {
    if (funcSide && e.bound) {
      if (
        e.name === fromName &&
        e.alphaConvertCount === fromalphaConvertCount
      ) {
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
    return {
      ...e,
      arg: toBetaReducePreviewAfter(
        e.arg,
        fromName,
        fromalphaConvertCount,
        to,
        funcSide
      ),
      body: toBetaReducePreviewAfter(
        e.body,
        fromName,
        fromalphaConvertCount,
        to,
        funcSide
      )
    }
  } else if (isShorthandFunction(e)) {
    return {
      ...e,
      highlightType: 'default',
      args: e.args.map(arg =>
        toBetaReducePreviewAfter(
          arg,
          fromName,
          fromalphaConvertCount,
          to,
          funcSide
        )
      )
    }
  } else {
    return {
      ...e,
      state: 'default',
      arg: toBetaReducePreviewAfter(
        e.arg,
        fromName,
        fromalphaConvertCount,
        to,
        funcSide
      ),
      func: toBetaReducePreviewAfter(
        e.func,
        fromName,
        fromalphaConvertCount,
        to,
        funcSide
      )
    }
  }
}

const stepToBetaReducePreviewAfter = (
  e: ExecutableCall
): ExecutableStepCall<'betaReducePreviewAfter'> => {
  const fromName = e.func.arg.name
  const fromalphaConvertCount = e.func.arg.alphaConvertCount
  const to = e.arg

  return {
    ...e,
    state: 'betaReducePreviewAfter',
    arg: toBetaReducePreviewAfter(
      e.arg,
      fromName,
      fromalphaConvertCount,
      to,
      false
    ),
    func: {
      ...e.func,
      arg: activeFuncArg(e.func.arg),
      body: toBetaReducePreviewAfter(
        e.func.body,
        fromName,
        fromalphaConvertCount,
        to,
        true
      )
    }
  }
}

export default stepToBetaReducePreviewAfter
