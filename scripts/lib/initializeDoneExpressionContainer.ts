import initializeExpressionContainer from 'scripts/lib/initializeExpressionContainer'
import { ExpressionParams } from 'src/types/ExpressionParamTypes'
import { ContainerWithState } from 'src/types/ExpressionContainerTypes'

export default function initializeDoneExpressionContainer(
  expressionParams: ExpressionParams
): ContainerWithState<'done'> {
  return {
    ...initializeExpressionContainer(expressionParams),
    containerState: 'done'
  }
}
