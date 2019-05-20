import {
  ExecutableCallShorthand,
  StepChild
} from 'src/types/yc/ExpressionTypes'
import {
  isVariableShorthandNumber,
  isShorthandFunction,
  isCall
} from 'src/lib/yc/expressionTypeGuards'
import toDefault from 'src/lib/yc/toDefault'

const stepToShorthandResult = (
  e: ExecutableCallShorthand
): StepChild<'default'> | ExecutableCallShorthand => {
  if (isVariableShorthandNumber(e.arg)) {
    if (e.arg.shorthandNumber === 0) {
      return toDefault(e.arg)
    } else {
      return toDefault({
        ...e.arg,
        shorthandNumber: e.arg.shorthandNumber - 1
      })
    }
  } else if (isCall(e.arg) && isShorthandFunction(e.arg.func)) {
    // TODO: Change from -1 to -2...
  }
}

export default stepToShorthandResult
