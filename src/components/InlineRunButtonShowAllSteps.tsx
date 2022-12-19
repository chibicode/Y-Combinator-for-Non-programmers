/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { colors, spaces, fontSizes, fitWithinMobileWidth } from 'src/lib/theme'
import H from 'src/components/H'
import { P } from 'src/components/ContentTags'
import ExpressionRunnerButton from 'src/components/ExpressionRunnerButton'

const InlineRunButtonShowAllSteps = ({
  children
}: {
  children: React.ReactNode
}) => (
  <P
    css={css`
      text-align: center;
      margin-top: ${spaces(1.75)};
      margin-bottom: ${spaces(1.75)};
    `}
  >
    <ExpressionRunnerButton
      css={css`
        padding-left: ${spaces(1)};
        padding-right: ${spaces(1)};
        background: ${colors('yellow100')};
      `}
    >
      <H
        args={{
          name: 'runAndShowAllSteps'
        }}
      />
    </ExpressionRunnerButton>
    <span
      css={[
        css`
          display: block;
          font-size: ${fontSizes(0.85)};
          color: ${colors('grey700')};
          padding-bottom: ${spaces(0.5)};
          max-width: ${fitWithinMobileWidth};
          margin: ${spaces(0.5)} auto 0;
        `
      ]}
    >
      {children}
    </span>
  </P>
)

export default InlineRunButtonShowAllSteps
