import {
  ExecutableCallShorthand,
  VariableShorthandNumber,
  StepVariableShorthandNumber
} from 'src/types/ExpressionTypes'
import toDefault from 'scripts/lib/toDefault'

export default function stepToShorthandComputed(
  e: ExecutableCallShorthand
): StepVariableShorthandNumber<'default'> {
  const result: VariableShorthandNumber = {
    ...e.arg,
    shorthandNumber:
      e.arg.shorthandNumber + (e.func.shorthandFunc === 'add' ? 1 : -1)
  }
  return toDefault(result)
}
