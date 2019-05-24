import { isFunction, isVariable } from 'src/lib/yc/expressionTypeGuards'
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
} from 'src/types/yc/ExpressionTypes'

function toCrossed(
  e: VariableExpression,
  isCallArg: boolean
): StepVariable<'betaReducePreviewCrossed'>
function toCrossed(
  e: FunctionExpression,
  isCallArg: boolean
): StepFunction<'betaReducePreviewCrossed'>
function toCrossed(
  e: ConditionalExpression,
  isCallArg: boolean
): StepConditional<'betaReducePreviewCrossed'>
function toCrossed(
  e: CallExpression,
  isCallArg: boolean
): NonExecutableStepCall<'betaReducePreviewCrossed'>
function toCrossed(
  e: VariableExpression | FunctionExpression,
  isCallArg: boolean
):
  | StepFunction<'betaReducePreviewCrossed'>
  | StepVariable<'betaReducePreviewCrossed'>
function toCrossed(
  e: Expression,
  isCallArg: boolean
): StepChild<'betaReducePreviewCrossed'>
function toCrossed(
  e: Expression,
  isCallArg: boolean
): StepChild<'betaReducePreviewCrossed'> {
  if (isVariable(e)) {
    if (isCallArg) {
      return {
        ...e,
        highlightType: 'removed',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'callArg'
      }
    } else if (e.bound) {
      return {
        ...e,
        highlightType: 'active',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'funcBound'
      }
    } else {
      return {
        ...e,
        highlightType: 'active',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'funcUnbound'
      }
    }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: toCrossed(e.arg, isCallArg),
      body: toCrossed(e.body, isCallArg)
    }
  } else {
    return {
      ...e,
      state: 'default',
      arg: toCrossed(e.arg, isCallArg),
      func: toCrossed(e.func, isCallArg)
    }
  }
}

const removeFuncArg = (
  e: VariableExpression
): VariableWithState<'removedFuncArg'> => ({
  ...e,
  highlightType: 'removed',
  topLeftBadgeType: 'none',
  bottomRightBadgeType: 'funcArg'
})

const stepToBetaReducePreviewCrossed = (
  e: ExecutableCallRegular
): ExecutableStepCallRegular<'betaReducePreviewCrossed'> => ({
  ...e,
  state: 'betaReducePreviewCrossed',
  arg: toCrossed(e.arg, true),
  func: {
    ...e.func,
    arg: removeFuncArg(e.func.arg),
    body: toCrossed(e.func.body, false)
  }
})

export default stepToBetaReducePreviewCrossed
