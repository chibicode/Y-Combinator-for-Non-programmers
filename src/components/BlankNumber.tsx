/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import BlankNumberSvg from 'src/components/BlankNumberSvg'

const BlankNumber = () => (
  <span
    css={css`
      display: inline-flex;
      vertical-align: middle;
      transform: translateY(-0.125em);
      height: 1em;
    `}
  >
    <BlankNumberSvg />
  </span>
)

export default BlankNumber
