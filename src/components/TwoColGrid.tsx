/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Flex from 'src/components/Flex'
import { spaces } from 'src/lib/theme'

const TwoColGrid = ({
  left,
  right
}: {
  left: React.ReactNode
  right: React.ReactNode
}) => (
  <Flex
    css={css`
      margin: ${spaces('-0.75')} ${spaces('-1.5')};
    `}
  >
    <div
      css={css`
        padding: 0 ${spaces(0.75)};
        flex: 1;
      `}
    >
      {left}
    </div>
    <div
      css={css`
        padding: 0 ${spaces(0.75)};
        flex: 1;
      `}
    >
      {right}
    </div>
  </Flex>
)

export default TwoColGrid
