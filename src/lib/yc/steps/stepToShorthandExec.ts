import {
  ExecutableCallShorthand,
  StepChild,
  NumberExpression
} from 'src/types/yc/ExpressionTypes'
import { isNumber, isVariable } from 'src/lib/yc/expressionTypeGuards'
import toDefault from 'src/lib/yc/toDefault'

function pred<E extends NumberExpression>(number: E): E {
  const inner = number.body.body
  if (isVariable(inner)) {
    return number
  } else {
    return {
      ...number,
      body: {
        ...number.body,
        body: number.body.arg
      }
    }
  }
}

const stepToShorthandExec = (
  e: ExecutableCallShorthand
): StepChild<'default'> => {
  if (isNumber<NumberExpression & StepChild>(e.arg)) {
    if (e.func.name === 'pred') {
      return toDefault(pred<NumberExpression & StepChild>(e.arg))
    }
  }
  return toDefault(e)
}

export default stepToShorthandExec
