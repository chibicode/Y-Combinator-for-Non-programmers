/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionBox from 'src/components/ExpressionBox'
import ExpressionPriorityContext from 'src/components/ExpressionPriorityContext'
import { ConditionalExpression } from 'src/types/ExpressionTypes'
import ConditionalBorder from 'src/components/ConditionalBorder'
import ConditionalContext from 'src/components/ConditionalContext'

interface ConditionalExpressionBoxProps {
  expression: ConditionalExpression
}

const ConditionalExpressionBox = ({
  expression
}: ConditionalExpressionBoxProps) => {
  const { activePriority } = useContext(ExpressionPriorityContext)
  return (
    <ConditionalContext.Provider value={{ conditionalState: expression.state }}>
      <ExpressionPriorityContext.Provider
        value={{
          activePriority:
            activePriority ||
            (expression.state !== 'default' ? expression.priority : undefined)
        }}
      >
        <Flex
          css={css`
            flex-direction: column;
            flex: 1;
            position: relative;
          `}
        >
          {expression.state !== 'trueCaseOnly' && (
            <FlexCenter
              css={css`
                position: relative;
              `}
            >
              <ConditionalBorder
                type="falseCase"
                shaded={
                  expression.state === 'trueCaseActive' ||
                  expression.state === 'conditionActive'
                }
              />
              <ExpressionBox expression={expression.falseCase} />
            </FlexCenter>
          )}
          {expression.state !== 'falseCaseOnly' &&
            expression.state !== 'trueCaseOnly' && (
              <FlexCenter
                css={css`
                  position: relative;
                `}
              >
                <ConditionalBorder
                  type="condition"
                  shaded={
                    expression.state === 'trueCaseActive' ||
                    expression.state === 'falseCaseActive'
                  }
                />
                <ExpressionBox expression={expression.condition} />
              </FlexCenter>
            )}
          {expression.state !== 'falseCaseOnly' && (
            <FlexCenter
              css={css`
                position: relative;
              `}
            >
              <ConditionalBorder
                type="trueCase"
                shaded={
                  expression.state === 'falseCaseActive' ||
                  expression.state === 'conditionActive'
                }
              />
              <ExpressionBox expression={expression.trueCase} />
            </FlexCenter>
          )}
        </Flex>
      </ExpressionPriorityContext.Provider>
    </ConditionalContext.Provider>
  )
}

export default ConditionalExpressionBox
