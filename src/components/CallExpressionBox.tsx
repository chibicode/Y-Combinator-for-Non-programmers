/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { useContext } from 'react'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionBox from 'src/components/ExpressionBox'
import ExpressionPriorityContext from 'src/components/ExpressionPriorityContext'
import { CallExpression } from 'src/types/ExpressionTypes'

interface CallExpressionBoxProps {
  expression: CallExpression
}

const CallExpressionBox = ({ expression }: CallExpressionBoxProps) => {
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
          <ExpressionBox expression={expression.arg} />
        </FlexCenter>
        <FlexCenter>
          <ExpressionBox expression={expression.func} />
        </FlexCenter>
      </ExpressionPriorityContext.Provider>
    </Flex>
  )
}

export default CallExpressionBox
