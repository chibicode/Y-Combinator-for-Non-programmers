interface NumberExpression {
  type: 'number'
  value: number
}

interface VariableExpression {
  type: 'variable'
  name: string
}

interface FunctionExpression {
  type: 'function'
  args?: string[]
  body: Expression
}

interface SumExpression {
  type: 'sum'
  left: CanReturnNumberExpression
  right: CanReturnNumberExpression
}

interface IfExpression {
  type: 'if'
  compare: '<' | '<=' | '>=' | '>'
  left: CanReturnNumberExpression
  right: CanReturnNumberExpression
  trueCase: Expression
  falseCase: Expression
}

interface CallExpression {
  type: 'call'
  args?: Expression[]
  func: CanReturnFunctionExpression
}

type CanReturnNumberExpression =
  | NumberExpression
  | VariableExpression
  | SumExpression
  | IfExpression
  | CallExpression

type CanReturnFunctionExpression =
  | VariableExpression
  | FunctionExpression
  | IfExpression
  | CallExpression

type Expression = CanReturnNumberExpression | CanReturnFunctionExpression
