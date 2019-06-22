import {
  ExecutableCallRegular,
  ExecutableStepCallRegular
} from 'src/types/ExpressionTypes'
import toDefault from 'scripts/lib/toDefault'

export default function stepToDefault(
  e: ExecutableCallRegular
): ExecutableStepCallRegular<'default'> {
  return {
    ...e,
    state: 'default',
    arg: toDefault(e.arg),
    func: toDefault(e.func)
  }
}
