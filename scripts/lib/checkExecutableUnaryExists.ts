import {
  isFunction,
  isVariable,
  isCall,
  isVariableShorthandUnaryNumber,
  isConditional
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
  } else if (isConditional(e)) {
    return (
      checkExecutableUnaryExists(e.condition) ||
      checkExecutableUnaryExists(e.trueCase) ||
      checkExecutableUnaryExists(e.falseCase)
    )
  } else {
    throw new Error()
  }
}

export default checkExecutableUnaryExists
