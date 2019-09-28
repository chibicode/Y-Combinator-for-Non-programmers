/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionBox from 'src/components/ExpressionBox'
import ExpressionPriorityContext from 'src/components/ExpressionPriorityContext'
import { BinaryExpression } from 'src/types/ExpressionTypes'

interface BinaryExpressionBoxProps {
  expression: BinaryExpression
}

const BinaryExpressionBox = ({ expression }: BinaryExpressionBoxProps) => {
  const { activePriority } = useContext(ExpressionPriorityContext)
  return (
    <Flex
      css={css`
        flex-direction: column;
        flex: 1;
      `}
    >
      <ExpressionPriorityContext.Provider
        value={{
          activePriority:
            activePriority ||
            (expression.state !== 'default' ? expression.priority : undefined)
        }}
      >
        <FlexCenter>
          <ExpressionBox expression={expression.first} />
        </FlexCenter>
        <FlexCenter>
          <ExpressionBox expression={expression.second} />
        </FlexCenter>
      </ExpressionPriorityContext.Provider>
    </Flex>
  )
}

export default BinaryExpressionBox
