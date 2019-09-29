/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionBox from 'src/components/ExpressionBox'
import ExpressionPriorityContext from 'src/components/ExpressionPriorityContext'
import { BinaryExpression } from 'src/types/ExpressionTypes'
import BinaryContext from 'src/components/BinaryContext'
import MultiplyIcon from 'src/components/MultiplyIcon'
import ExpressionRunnerContext from 'src/components/ExpressionRunnerContext'
import { ExpressionRunnerContextProps } from 'src/types/ExpressionRunnerTypes'
import { fontSizes, zIndices } from 'src/lib/theme'

interface BinaryExpressionBoxProps {
  expression: BinaryExpression
}

const multiplyIconSize = (size: ExpressionRunnerContextProps['variableSize']) =>
  ({
    lg: fontSizes(1.2),
    md: fontSizes(1),
    sm: fontSizes(0.85),
    xs: fontSizes(0.8),
    xxs: fontSizes(0.75),
    xxxs: fontSizes(0.7)
  }[size])

const BinaryExpressionBox = ({ expression }: BinaryExpressionBoxProps) => {
  const { activePriority } = useContext(ExpressionPriorityContext)
  const { inBinaryActive } = useContext(BinaryContext)
  const { variableSize } = useContext(ExpressionRunnerContext)
  return (
    <BinaryContext.Provider
      value={{
        binaryState: expression.state,
        inBinaryActive: inBinaryActive || expression.state === 'active'
      }}
    >
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
          <FlexCenter
            css={css`
              position: relative;
            `}
          >
            <div
              css={css`
                position: absolute;
                font-size: ${multiplyIconSize(variableSize)};
                z-index: ${zIndices('multiplySign')};
              `}
            >
              <MultiplyIcon revert={expression.state === 'active'} />
            </div>
          </FlexCenter>
          <FlexCenter>
            <ExpressionBox expression={expression.second} />
          </FlexCenter>
        </ExpressionPriorityContext.Provider>
      </Flex>
    </BinaryContext.Provider>
  )
}

export default BinaryExpressionBox
