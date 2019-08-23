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
      margin-left: ${spaces('-0.75')};
      margin-right: ${spaces('-0.75')};
    `}
  >
    <div
      css={css`
        padding: 0 ${spaces(0.75)};
      `}
    >
      {left}
    </div>
    <div
      css={css`
        padding: 0 ${spaces(0.75)};
      `}
    >
      {right}
    </div>
  </Flex>
)

export default TwoColGrid
