/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { colors, spaces } from 'src/lib/theme'
import H from 'src/components/H'
import { P } from 'src/components/ContentTags'
import ExpressionRunnerButton from 'src/components/ExpressionRunnerButton'

const InlineRunAndConvertToMathboxButton = () => (
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
          name: 'runAndConvertToMathbox',
          addNewline: true
        }}
      />
    </ExpressionRunnerButton>
  </P>
)

export default InlineRunAndConvertToMathboxButton
