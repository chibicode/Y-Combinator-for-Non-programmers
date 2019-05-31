import {
  isFunction,
  isVariable,
  isCall,
  isVariableShorthandUnaryNumber
} from 'src/lib/expressionTypeGuards'
import { Expression } from 'src/types/ExpressionTypes'

const checkExecutableUnaryExists = (e: Expression): boolean => {
  if (isVariable(e)) {
    return isVariableShorthandUnaryNumber(e)
  } else if (isFunction(e)) {
    return (
      checkExecutableUnaryExists(e.arg) || checkExecutableUnaryExists(e.body)
    )
  } else if (isCall(e)) {
    return (
      checkExecutableUnaryExists(e.arg) || checkExecutableUnaryExists(e.func)
    )
  } else {
    return (
      checkExecutableUnaryExists(e.condition) ||
      checkExecutableUnaryExists(e.trueCase) ||
      checkExecutableUnaryExists(e.falseCase)
    )
  }
}

export default checkExecutableUnaryExists
