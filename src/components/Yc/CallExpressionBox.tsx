/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionBox from 'src/components/Yc/ExpressionBox'
import ExpressionPriorityContext from 'src/components/Yc/ExpressionPriorityContext'
import { CallExpression } from 'src/types/yc/ExpressionTypes'

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
        <FlexCenter css={expression.state !== 'default'}>
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
