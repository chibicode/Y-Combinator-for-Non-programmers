/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { spaces } from 'src/lib/theme'
import Emoji from 'src/components/Emoji'
import ExpressionRunnerCaptionWrapper from 'src/components/ExpressionRunnerCaptionWrapper'
import H from 'src/components/H'
import { P } from 'src/components/ContentTags'

const ExpressionRunnerSeparator = ({
  doubleArrow
}: {
  doubleArrow?: boolean
}) => (
  <P
    css={css`
      text-align: center;
      margin: ${spaces('-1.25')} 0 ${spaces('-1')};
    `}
  >
    {doubleArrow ? (
      <ExpressionRunnerCaptionWrapper>
        <Emoji size="mdlg">↕️</Emoji> <H args={{ name: 'sameAddRole' }} />{' '}
        <Emoji size="mdlg">↕️</Emoji>
      </ExpressionRunnerCaptionWrapper>
    ) : (
      <Emoji size="mdlg">⬇️</Emoji>
    )}
  </P>
)

export default ExpressionRunnerSeparator
