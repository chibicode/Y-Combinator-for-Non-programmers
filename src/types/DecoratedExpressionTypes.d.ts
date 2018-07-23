import Immutable from 'immutable'
import { FunctionExpression } from 'types/ExpressionTypes'

export type State = Immutable.Map<string, string>

export type FunctionRecordProps = {
  arg: DecoratedExpression
  body: DecoratedExpression
}

export type DecoratedExpressionRecordProps = {
  value:
    | Immutable.Record<FunctionRecordProps>
    | string
    | Immutable.List<DecoratedExpression>
  state: State
}

export type DecoratedExpression = Immutable.Record<
  DecoratedExpressionRecordProps
>
