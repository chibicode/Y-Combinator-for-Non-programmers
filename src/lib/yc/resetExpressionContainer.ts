import resetExpression from 'src/lib/yc/resetExpression'
import { ContainerWithState } from 'src/types/yc/ExpressionContainerTypes'
import { StepChild } from 'src/types/yc/ExpressionTypes'

export default function resetExpressionContainer(
  expressionContainer: ContainerWithState<'needsReset'>
): ContainerWithState<'needsPrioritize', StepChild<'default'>> {
  return {
    containerState: 'needsPrioritize',
    expression: resetExpression(expressionContainer.expression),
    previouslyChangedExpressionState: 'default'
  }
}
