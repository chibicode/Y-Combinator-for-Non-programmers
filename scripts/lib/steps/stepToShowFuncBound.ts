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
  StepConditional,
  ConditionalExpression,
  BinaryExpression,
  StepBinary,
  NonExecutableStepCall,
  StepChild,
  StepFunction,
  StepVariable,
  VariableExpression
} from 'src/types/ExpressionTypes'

export function toShowFuncBound(
  e: VariableExpression,
  funcSide: boolean,
  highlight: boolean
): StepVariable<'showFuncBound'>
export function toShowFuncBound(
  e: FunctionExpression,
  funcSide: boolean,
  highlight: boolean
): StepFunction<'showFuncBound'>
export function toShowFuncBound(
  e: ConditionalExpression,
  funcSide: boolean,
  highlight: boolean
): StepConditional<'showFuncBound'>
export function toShowFuncBound(
  e: BinaryExpression,
  funcSide: boolean,
  highlight: boolean
): StepBinary<'showFuncBound'>
export function toShowFuncBound(
  e: CallExpression,
  funcSide: boolean,
  highlight: boolean
): NonExecutableStepCall<'showFuncBound'>
export function toShowFuncBound(
  e: VariableExpression | FunctionExpression,
  funcSide: boolean,
  highlight: boolean
): StepVariable<'showFuncBound'> | StepFunction<'showFuncBound'>
export function toShowFuncBound(
  e: Expression,
  funcSide: boolean,
  highlight: boolean
): StepChild<'showFuncBound'>
export function toShowFuncBound(
  e: Expression,
  funcSide: boolean,
  highlight: boolean
): StepChild<'showFuncBound'> {
  if (isVariable(e)) {
    if (funcSide) {
      if (e.bound) {
        if (highlight) {
          return {
            ...e,
            highlightType: 'highlighted',
            topLeftBadgeType: 'none',
            bottomRightBadgeType: 'funcBound'
          }
        } else {
          return {
            ...e,
            highlightType: 'active',
            topLeftBadgeType: 'none',
            bottomRightBadgeType: 'funcBound'
          }
        }
      } else {
        return {
          ...e,
          highlightType: 'active',
          topLeftBadgeType: 'none',
          bottomRightBadgeType: 'none'
        }
      }
    } else {
      return {
        ...e,
        highlightType: 'active',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'callArg'
      }
    }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: toShowFuncBound(e.arg, funcSide, highlight),
      body: toShowFuncBound(e.body, funcSide, highlight)
    }
  } else if (isCall(e)) {
    return {
      ...e,
      state: 'default',
      arg: toShowFuncBound(e.arg, funcSide, highlight),
      func: toShowFuncBound(e.func, funcSide, highlight)
    }
  } else if (isConditional(e)) {
    return {
      ...e,
      state: 'default',
      condition: toShowFuncBound(e.condition, funcSide, highlight),
      trueCase: toShowFuncBound(e.trueCase, funcSide, highlight),
      falseCase: toShowFuncBound(e.falseCase, funcSide, highlight)
    }
  } else if (isBinary(e)) {
    return {
      ...e,
      state: 'default',
      first: toShowFuncBound(e.first, funcSide, highlight),
      second: toShowFuncBound(e.second, funcSide, highlight)
    }
  } else {
    throw new Error()
  }
}

const stepToShowFuncBound = (
  e: ExecutableCallRegular,
  highlight: boolean
): ExecutableStepCallRegular<'showFuncBound'> => ({
  ...e,
  state: 'showFuncBound',
  arg: toShowFuncBound(e.arg, false, highlight),
  func: {
    ...e.func,
    arg: activeFuncArg(e.func.arg),
    body: toShowFuncBound(e.func.body, true, highlight)
  }
})

export default stepToShowFuncBound
