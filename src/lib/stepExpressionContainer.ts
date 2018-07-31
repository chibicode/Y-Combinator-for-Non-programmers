import prioritizeExpressionContainer from 'src/lib/prioritizeExpressionContainer'
import resetExpressionContainer from 'src/lib/resetExpressionContainer'
import {
  ExpressionContainer,
  isNeedsResetExpressionContainer,
  NeedsResetExpressionContainer,
  PrioritizedExpressionContainer
} from 'src/types/ExpressionContainerTypes'

export default function stepExpressionContainer(
  e: NeedsResetExpressionContainer
): PrioritizedExpressionContainer
export default function stepExpressionContainer(
  e: ExpressionContainer
): ExpressionContainer
export default function stepExpressionContainer(e: ExpressionContainer) {
  if (isNeedsResetExpressionContainer(e)) {
    return prioritizeExpressionContainer(resetExpressionContainer(e))
  } else {
    return e
  }
}
