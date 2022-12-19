/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Flex from 'src/components/Flex'
import { spaces } from 'src/lib/theme'
import TwoColContext, { TwoColContextProps } from 'src/components/TwoColContext'

const TwoColGrid = ({
  left,
  right,
  noTopNegativeMargin,
  noBottomNegativeMargin,
  maxVariableSize,
  forceVariableSize,
  leftVerticalIndent
}: {
  left: React.ReactNode
  right: React.ReactNode
  noTopNegativeMargin?: boolean
  noBottomNegativeMargin?: boolean
  maxVariableSize: TwoColContextProps['maxVariableSize']
  forceVariableSize?: TwoColContextProps['forceVariableSize']
  leftVerticalIndent?: TwoColContextProps['leftVerticalIndent']
}) => (
  <TwoColContext.Provider
    value={{
      maxVariableSize,
      forceVariableSize
    }}
  >
    <Flex
      css={[
        css`
          margin-left: ${spaces('-0.75')};
          margin-right: ${spaces('-0.75')};
        `,
        !noTopNegativeMargin &&
          css`
            margin-top: ${spaces('-1.5')};
          `,
        !noBottomNegativeMargin &&
          css`
            margin-bottom: ${spaces('-1.5')};
          `
      ]}
    >
      <div
        css={css`
          padding: 0 ${spaces(0.5)} 0 ${spaces(0.75)};
          flex: 1;
        `}
      >
        <TwoColContext.Provider
          value={{
            maxVariableSize,
            forceVariableSize,
            leftVerticalIndent
          }}
        >
          {left}
        </TwoColContext.Provider>
      </div>
      <div
        css={css`
          padding: 0 ${spaces(0.75)} 0 ${spaces(0.5)};
          flex: 1;
        `}
      >
        {right}
      </div>
    </Flex>
  </TwoColContext.Provider>
)

TwoColGrid.defaultProps = {
  maxVariableSize: 'md'
}

export default TwoColGrid
