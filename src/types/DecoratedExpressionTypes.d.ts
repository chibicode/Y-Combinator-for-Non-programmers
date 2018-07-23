import { FunctionExpression } from 'types/ExpressionTypes'

export type DecoratedExpression = {
  value:
    | {
        arg: DecoratedExpression
        body: DecoratedExpression
      }
    | string
    | DecoratedExpression[]
  state: {}
}
