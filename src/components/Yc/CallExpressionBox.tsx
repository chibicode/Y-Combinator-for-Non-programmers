/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionBox from 'src/components/Yc/ExpressionBox'
import ExpressionPriorityContext from 'src/components/Yc/ExpressionPriorityContext'
import colors from 'src/lib/theme/colors'
import { CallExpression } from 'src/types/yc/ExpressionTypes'
export const jsxBabelFix = jsx

interface CallExpressionBoxProps {
  expression: CallExpression
}

const CallExpressionBox = ({ expression }: CallExpressionBoxProps) => (
  <Flex
    css={css`
      flex-direction: column;
      flex: 1;
    `}
  >
    <ExpressionPriorityContext.Consumer>
      {({ activePriority }) => (
        <ExpressionPriorityContext.Provider
          value={{
            activePriority:
              activePriority ||
              (expression.state === 'active' ? expression.priority : undefined)
          }}
        >
          <FlexCenter
            css={
              expression.state !== 'default' &&
              css`
                border-bottom: 10px solid ${colors('indigo300')};
              `
            }
          >
            <ExpressionBox expression={expression.arg} />
          </FlexCenter>
          <FlexCenter>
            <ExpressionBox expression={expression.func} />
          </FlexCenter>
        </ExpressionPriorityContext.Provider>
      )}
    </ExpressionPriorityContext.Consumer>
  </Flex>
)

export default CallExpressionBox
