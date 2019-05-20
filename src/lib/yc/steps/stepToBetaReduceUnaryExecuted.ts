import {
  ExecutableCallRegular,
  ExecutableStepCallRegular,
  StepChild,
  CallExpression,
  Expression,
  FunctionExpression,
  NonExecutableStepCall,
  StepVariableShorthandNonUnaryNumber,
  StepFunction,
  StepVariable,
  VariableExpression,
  VariableShorthandUnaryNumber,
  ShorthandFunctionExpression,
  StepShorthandFunction
} from 'src/types/yc/ExpressionTypes'
import {
  isFunction,
  isVariable,
  isCall,
  isVariableShorthandUnary,
  isVariableShorthandNumber
} from 'src/lib/yc/expressionTypeGuards'

function toBetaReduceUnaryExecuted(
  e: VariableShorthandUnaryNumber
): StepVariableShorthandNonUnaryNumber<'betaReducePreviewUnaryExecuted'>
function toBetaReduceUnaryExecuted(
  e: VariableExpression
): StepVariable<'betaReducePreviewUnaryExecuted'>
function toBetaReduceUnaryExecuted(
  e: FunctionExpression
): StepFunction<'betaReducePreviewUnaryExecuted'>
function toBetaReduceUnaryExecuted(
  e: ShorthandFunctionExpression
): StepShorthandFunction<'betaReducePreviewUnaryExecuted'>
function toBetaReduceUnaryExecuted(
  e: CallExpression
): NonExecutableStepCall<'betaReducePreviewUnaryExecuted'>
function toBetaReduceUnaryExecuted(
  e: VariableExpression | FunctionExpression
):
  | StepVariable<'betaReducePreviewUnaryExecuted'>
  | StepFunction<'betaReducePreviewUnaryExecuted'>
function toBetaReduceUnaryExecuted(
  e: Expression
): StepChild<'betaReducePreviewUnaryExecuted'>
function toBetaReduceUnaryExecuted(
  e: Expression
): StepChild<'betaReducePreviewUnaryExecuted'> {
  if (isVariable(e)) {
    if (isVariableShorthandUnary(e) && isVariableShorthandNumber(e)) {
      return {
        ...e,
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'none',
        highlightType: 'active',
        shorthandNumber: e.shorthandNumber > 1 ? e.shorthandNumber - 1 : 0,
        shorthandUnary: undefined
      }
    } else {
      return {
        ...e,
        highlightType: 'active',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'none'
      }
    }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: toBetaReduceUnaryExecuted(e.arg),
      body: toBetaReduceUnaryExecuted(e.body)
    }
  } else if (isCall(e)) {
    return {
      ...e,
      state: 'default',
      arg: toBetaReduceUnaryExecuted(e.arg),
      func: toBetaReduceUnaryExecuted(e.func)
    }
  } else {
    return {
      ...e,
      highlightType: 'default'
    }
  }
}

const stepToBetaReduceUnaryExecuted = (
  e: ExecutableCallRegular
): ExecutableStepCallRegular<'betaReducePreviewUnaryExecuted'> => ({
  ...e,
  state: 'betaReducePreviewUnaryExecuted',
  arg: toBetaReduceUnaryExecuted(e.arg),
  func: toBetaReduceUnaryExecuted(e.func)
})

export default stepToBetaReduceUnaryExecuted
