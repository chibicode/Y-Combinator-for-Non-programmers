/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { spaces } from 'src/lib/theme'
import Emoji from 'src/components/Emoji'
import ExpressionRunnerCaptionWrapper from 'src/components/ExpressionRunnerCaptionWrapper'
import H from 'src/components/H'

const ExpressionRunnerSeparator = ({
  doubleArrow
}: {
  doubleArrow?: boolean
}) => (
  <div
    css={css`
      text-align: center;
      margin: ${spaces('-1.25')} 0 ${spaces('-1')};
    `}
  >
    {doubleArrow ? (
      <ExpressionRunnerCaptionWrapper skipMargin>
        <Emoji size="mdlg">↕️</Emoji> <H args={{ name: 'sameAddRole' }} />{' '}
        <Emoji size="mdlg">↕️</Emoji>
      </ExpressionRunnerCaptionWrapper>
    ) : (
      <Emoji size="mdlg">⬇️</Emoji>
    )}
  </div>
)

export default ExpressionRunnerSeparator
