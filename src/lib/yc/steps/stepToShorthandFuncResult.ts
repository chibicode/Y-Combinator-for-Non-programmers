import {
  ExecutableCallShorthand,
  StepChild,
  Expression
} from 'src/types/yc/ExpressionTypes'
import { isFunction, isCall } from 'src/lib/yc/expressionTypeGuards'
import toDefault from 'src/lib/yc/toDefault'

function pred(number: Expression): Expression {
  if (isFunction(number)) {
    const numberBody = number.body
    if (isFunction(numberBody)) {
      const numberBodyBody = numberBody.body
      if (isCall(numberBodyBody)) {
        return {
          ...number,
          body: {
            ...numberBody,
            body: numberBodyBody.arg
          }
        }
      }
    }
  }
  return number
}

const stepToShorthandFuncResult = (
  e: ExecutableCallShorthand
): StepChild<'default'> => {
  if (e.func.name === 'pred') {
    return toDefault(pred(e.arg))
  }
  throw new Error()
}

export default stepToShorthandFuncResult
