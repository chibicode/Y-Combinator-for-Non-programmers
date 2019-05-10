import {
  ExecutableCallRegular,
  StepChild,
  Expression
} from 'src/types/yc/ExpressionTypes'
import {
  isFunction,
  isCall,
  isShorthandFunction
} from 'src/lib/yc/expressionTypeGuards'
import toDefault from 'src/lib/yc/toDefault'

function isZero(number: Expression, args: Expression[]): Expression {
  if (isFunction(number)) {
    const numberBody = number.body
    if (isFunction(numberBody)) {
      const numberBodyBody = numberBody.body
      if (isCall(numberBodyBody)) {
        return args[1]
      } else {
        return args[0]
      }
    }
  }
  throw new Error()
}

const stepToShorthandArgResult = (
  e: ExecutableCallRegular
): StepChild<'default'> => {
  if (isShorthandFunction(e.arg) && e.arg.name === 'isZero') {
    return toDefault(isZero(e.func, e.arg.args))
  }
  throw new Error()
}

export default stepToShorthandArgResult
