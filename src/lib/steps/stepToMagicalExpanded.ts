import { isFunction, isVariable, isCall } from 'src/lib/expressionTypeGuards'
import {
  CallExpression,
  ExecutableStepCallRegular,
  Expression,
  FunctionExpression,
  NonExecutableStepCall,
  VariableShorthandBinary,
  StepVariableShorthandBinary,
  StepChild,
  StepFunction,
  StepVariable,
  VariableExpression,
  ConditionalExpression,
  StepConditional,
  ExecutableCallMagical,
  MagicalVariable,
  StepMagicalVariable
} from 'src/types/ExpressionTypes'
import buildExpressionFromParams from 'src/lib/buildExpressionFromParams'
import prioritizeExpression from 'src/lib/prioritizeExpression'

function toMagicalExpanded(
  e: VariableShorthandBinary
): StepVariableShorthandBinary<'magicalExpanded'>
function toMagicalExpanded(
  e: MagicalVariable
): StepMagicalVariable<'magicalExpanded'>
function toMagicalExpanded(
  e: VariableExpression
): StepVariable<'magicalExpanded'>
function toMagicalExpanded(
  e: FunctionExpression
): StepFunction<'magicalExpanded'>
function toMagicalExpanded(
  e: ConditionalExpression
): StepConditional<'magicalExpanded'>
function toMagicalExpanded(
  e: CallExpression
): NonExecutableStepCall<'magicalExpanded'>
function toMagicalExpanded(
  e: VariableExpression | FunctionExpression
): StepVariable<'magicalExpanded'> | StepFunction<'magicalExpanded'>
function toMagicalExpanded(e: Expression): StepChild<'magicalExpanded'>
function toMagicalExpanded(e: Expression): StepChild<'magicalExpanded'> {
  if (isVariable(e)) {
    return {
      ...e,
      highlightType: 'active',
      topLeftBadgeType: 'none',
      bottomRightBadgeType: 'none'
    }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: toMagicalExpanded(e.arg),
      body: toMagicalExpanded(e.body)
    }
  } else if (isCall(e)) {
    return {
      ...e,
      state: 'default',
      arg: toMagicalExpanded(e.arg),
      func: toMagicalExpanded(e.func)
    }
  } else {
    return {
      ...e,
      state: 'default',
      condition: toMagicalExpanded(e.condition),
      trueCase: toMagicalExpanded(e.trueCase),
      falseCase: toMagicalExpanded(e.falseCase)
    }
  }
}

export default function stepToMagicalExpanded(
  e: ExecutableCallMagical
): ExecutableStepCallRegular<'magicalExpanded'> {
  const arg: StepVariable<'magicalExpanded'> = {
    ...e.func,
    isMagical: false,
    highlightType: 'highlighted',
    topLeftBadgeType: 'none',
    bottomRightBadgeType: 'none'
  }
  const body: StepConditional<'magicalExpanded'> = {
    type: 'conditional',
    checkType: 'isZero',
    condition: arg,
    priority: 0,
    state: 'default',
    trueCase: {
      ...buildExpressionFromParams({
        shorthandNumber: 1
      }),
      highlightType: 'highlighted'
    },
    falseCase: {
      type: 'call',
      state: 'default',
      priority: 0,
      func: {
        ...buildExpressionFromParams('question'),
        highlightType: 'highlighted'
      },
      arg: {
        type: 'call',
        state: 'default',
        priority: 0,
        func: {
          ...arg,
          shorthandUnary: 'pred'
        },
        arg: {
          ...e.func,
          highlightType: 'highlighted',
          topLeftBadgeType: 'none',
          bottomRightBadgeType: 'none'
        }
      }
    }
  }

  const func: StepFunction<'magicalExpanded'> = {
    type: 'function',
    arg,
    body
  }

  const result: ExecutableStepCallRegular<'magicalExpanded'> = {
    state: 'magicalExpanded',
    func,
    type: 'call',
    priority: 0,
    arg: toMagicalExpanded(e.arg)
  }

  return prioritizeExpression<ExecutableStepCallRegular<'magicalExpanded'>>(
    result
  )
}
