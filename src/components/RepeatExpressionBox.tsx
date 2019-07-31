/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionBox from 'src/components/ExpressionBox'
import { RepeatExpression } from 'src/types/ExpressionTypes'
import RepeatBorder from 'src/components/RepeatBorder'

interface RepeatExpressionBoxProps {
  expression: RepeatExpression
}

const RepeatExpressionBox = ({ expression }: RepeatExpressionBoxProps) => {
  return (
    <Flex
      css={css`
        flex-direction: column;
        flex: 1;
        position: relative;
      `}
    >
      <FlexCenter
        css={css`
          position: relative;
        `}
      >
        <RepeatBorder
          count={expression.count}
          countVariable={expression.countVariable}
        />
        <ExpressionBox expression={expression.child} />
      </FlexCenter>
    </Flex>
  )
}

export default RepeatExpressionBox
